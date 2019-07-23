import Vue from 'vue';
import Component from 'nuxt-class-component';
import VueEasyLightbox from "vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js";
import IImage from "~/interfaces/IImage";
import { Prop, Watch } from "nuxt-property-decorator";

const BREAKPOINT = 768;

@Component({
  components: {
    VueEasyLightbox
  },
})
export default class Gallery extends Vue {
  @Prop({ required: true }) images: IImage[];
  private visible = false;
  private index = 0;
  private windowWidth = 0;

  private get imgs() {
    return this.images.map((image) => image.src);
  }

  private get active() {
    return this.windowWidth >= BREAKPOINT;
  }

  private created() {
    window.addEventListener('keydown', this.onKeydown)
  }

  private mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
  }

  private beforeDestroy() {
    window.removeEventListener('keydown', this.onKeydown);
    window.removeEventListener('keydown', this.onResize);
  }

  @Watch('active')
  private onActiveChange(active) {
    if(!active) {
      this.hide();
    }
  }

  private onResize() {
    this.windowWidth = window.innerWidth;
  }

  private onKeydown(event) {
    if (this.visible) {
      switch (event.which) {
        case 27: // esc
          this.hide();
          break;
        case 37: // arrow left
          this.prev();
          break;
        case 39: // arrow right
          this.next();
          break;
      }
    }
  }

  private show(index) {
    if(this.active) {
      this.index = index;
      this.visible = true
    }
  }

  private hide() {
    this.visible = false;
  }

  private prev() {
    (this.$refs.lightbox as any).onPrevClick();
  }

  private next() {
    (this.$refs.lightbox as any).onNextClick();
  }
}
