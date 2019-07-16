import { Component, Prop, Vue } from "~/node_modules/vue-property-decorator";
import VueEasyLightbox from "vue-easy-lightbox/dist/vue-easy-lightbox.es5.esm.min.js";
import IImage from "~/interfaces/IImage";

@Component({
  components: {
    VueEasyLightbox
  },
})
export default class Gallery extends Vue {
  @Prop({ required: true }) images: IImage[];
  private visible = false;
  private index = 0;

  private get imgs() {
    return this.images.map((image) => image.img);
  }

  private created() {
    window.addEventListener('keydown', this.onKeydown)
  }

  private beforeDestroy() {
    window.removeEventListener('keydown', this.onKeydown)
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
    this.index = index;
    this.visible = true
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
