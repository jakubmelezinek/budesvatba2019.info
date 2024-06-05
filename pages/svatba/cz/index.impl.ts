import Vue from 'vue';
import Component from 'nuxt-class-component';
import CountdownSection from "~/components/CountdownSection/CountdownSection.vue";
import Gallery from "~/components/Gallery/Gallery.vue";
import IImage from "~/interfaces/IImage";
import { State } from "~/node_modules/vuex-class";

@Component({
  components: {
    CountdownSection,
    Gallery,
  },
})
export default class Homepage extends Vue {
  @State locale: string;
  tel = "+420777987295"

  private stodolaImages: IImage[] = [
    { src: "/images-v1/stodola/stodola_01.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_01_tn.jpg" },
    { src: "/images-v1/stodola/stodola_02.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_02_tn.jpg" },
    { src: "/images-v1/stodola/stodola_06.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_06_tn.jpg" },
    { src: "/images-v1/stodola/stodola_04.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_04_tn.jpg" },
    { src: "/images-v1/stodola/stodola_05.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_05_tn.jpg" },
    { src: "/images-v1/stodola/stodola_03.jpeg", tiny: "/images-v1/stodola/thumbnail/stodola_03_tn.jpg" },
  ];

  private galleryImages: IImage[] = [

    // zasnoubeni
    { src: "/images-v1/gallery/6eeff8cb-a2ff-4f29-88cb-1330062ad3ea.jpg", tiny: "/images-v1/gallery/thumbnail/6eeff8cb-a2ff-4f29-88cb-1330062ad3ea_tn.jpg" },
    { src: "/images-v1/gallery/d009a317-7fc8-4772-8110-ac105db71a3b.jpg", tiny: "/images-v1/gallery/thumbnail/d009a317-7fc8-4772-8110-ac105db71a3b_tn.jpg" },

  ];

  private get weddingImages(): IImage[] {
    let res: IImage[] = [];
    for (let i = 1; i < 300; i++) {
      if (i == 186) break; // PH-168 missing
      let n = i.toString().padStart(3, "0");
      res.push({ src: "/images-v1/wedding/PH-" + n + ".jpg", tiny: "/images-v1/wedding/thumbnail/PH-" + n + ".jpg" });
    }
    return res;
  }

  private honeymoonImages: IImage[] = [
      // TODO
    { src: "/images-v1/gallery/IMG_20160826_112833.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160826_112833_tn.jpg" },
  ];
}
