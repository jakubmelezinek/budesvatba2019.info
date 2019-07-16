import { Component, Vue } from 'vue-property-decorator'
import CountdownSection from "~/components/CountdownSection/CountdownSection.vue";
import RsvpSection from "~/components/RsvpSection/RsvpSection.vue";
import Gallery from "~/components/Gallery/Gallery.vue";
import IImage from "~/interfaces/IImage";
import { State } from "~/node_modules/vuex-class";

@Component({
  components: {
    CountdownSection,
    RsvpSection,
    Gallery,
  },
})
export default class Homepage extends Vue {
  @State private locale: string;

  private vigvamImages: IImage[] = [
    { img: "images/vigvam/01.jpg", src: "images/vigvam/thumbnail/01.jpg" },
    { img: "images/vigvam/02.jpg", src: "images/vigvam/thumbnail/02.jpg" },
    { img: "images/vigvam/03.jpg", src: "images/vigvam/thumbnail/03.jpg" },
    { img: "images/vigvam/04.jpg", src: "images/vigvam/thumbnail/04.jpg" },
    { img: "images/vigvam/05.jpg", src: "images/vigvam/thumbnail/05.jpg" },
    { img: "images/vigvam/06.jpg", src: "images/vigvam/thumbnail/06.jpg" },
  ];

  private galleryImages: IImage[] = [
    { img: "images/gallery-1-600x400.jpg", src: "images/gallery-1-600x400.jpg" },
    { img: "images/gallery-1-600x400.jpg", src: "images/gallery-1-600x400.jpg" },
    { img: "images/gallery-2-600x400.jpg", src: "images/gallery-2-600x400.jpg" },
    { img: "images/gallery-2-600x400.jpg", src: "images/gallery-2-600x400.jpg" },
    { img: "images/gallery-3-600x400.jpg", src: "images/gallery-3-600x400.jpg" },
    { img: "images/gallery-3-600x400.jpg", src: "images/gallery-2-600x400.jpg" },
  ];
}
