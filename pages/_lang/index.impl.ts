import Vue from 'vue';
import Component from 'nuxt-class-component';
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
    { src: "/images-v1/vigvam/01.jpg", tiny: "/images-v1/vigvam/thumbnail/01.jpg" },
    { src: "/images-v1/vigvam/02.jpg", tiny: "/images-v1/vigvam/thumbnail/02.jpg" },
    { src: "/images-v1/vigvam/03.jpg", tiny: "/images-v1/vigvam/thumbnail/03.jpg" },
    { src: "/images-v1/vigvam/04.jpg", tiny: "/images-v1/vigvam/thumbnail/04.jpg" },
    { src: "/images-v1/vigvam/05.jpg", tiny: "/images-v1/vigvam/thumbnail/05.jpg" },
    { src: "/images-v1/vigvam/06.jpg", tiny: "/images-v1/vigvam/thumbnail/06.jpg" },
  ];

  private galleryImages: IImage[] = [

    // izrael
    { src: "/images-v1/gallery/43.jpg", tiny: "/images-v1/gallery/thumbnail/43_tn.jpg" },
    { src: "/images-v1/gallery/IMG_2439.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_2439_tn.jpg" },
    { src: "/images-v1/gallery/IMG_2549.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_2549_tn.jpg" },
    { src: "/images-v1/gallery/IMG_2617.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_2617_tn.jpg" },

    // ostatni skotsko
    { src: "/images-v1/gallery/IMG_0130.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_0130_tn.jpg" },
    { src: "/images-v1/gallery/IMG_0276.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_0276_tn.jpg" },

    // hawai
    { src: "/images-v1/gallery/IMG_0440.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_0440_tn.jpg" },
    { src: "/images-v1/gallery/IMG_0788.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_0788_tn.jpg" },
    { src: "/images-v1/gallery/IMG_3278.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_3278_tn.jpg" },
    { src: "/images-v1/gallery/IMG_3714.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_3714_tn.jpg" },

    // ostatni - moto
    { src: "/images-v1/gallery/moto.jpg", tiny: "/images-v1/gallery/thumbnail/moto_tn.jpg" },
    { src: "/images-v1/gallery/IMG_20160710_103502.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160710_103502_tn.jpg" },

    // zanzibar
    { src: "/images-v1/gallery/IMG_4086.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_4086_tn.jpg" },
    { src: "/images-v1/gallery/IMG_4379.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_4379_tn.jpg" },
    { src: "/images-v1/gallery/IMG_4684.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_4684_tn.jpg" },
    { src: "/images-v1/gallery/vlcsnap-2019-07-18-21h56m25s281.png", tiny: "/images-v1/gallery/thumbnail/vlcsnap-2019-07-18-21h56m25s281_tn.jpg" },

    // ostatni - hory
    { src: "/images-v1/gallery/IMG_5005.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_5005_tn.jpg" },
    { src: "/images-v1/gallery/IMG_5021.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_5021_tn.jpg" },
    { src: "/images-v1/gallery/IMG_5034.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_5034_tn.jpg" },
    { src: "/images-v1/gallery/IMG_5036.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_5036_tn.jpg" },

    // ostatni
    { src: "/images-v1/gallery/IMG_0444.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_0444_tn.jpg" },

    // vietnam
    // { src: "/images-v1/gallery/IMG_20160823_152105.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160823_152105_tn.jpg" },
    { src: "/images-v1/gallery/IMG_20160824_100129.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160824_100129_tn.jpg" },
    { src: "/images-v1/gallery/IMG_20160824_122654.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160824_122654_tn.jpg" },
    { src: "/images-v1/gallery/IMG_20160826_112833.jpg", tiny: "/images-v1/gallery/thumbnail/IMG_20160826_112833_tn.jpg" },
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
