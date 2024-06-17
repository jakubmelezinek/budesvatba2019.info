import Vue from 'vue';
import Component from 'nuxt-class-component';
import CountdownSection from "~/components/CountdownSection/CountdownSection.vue";
import Gallery from "~/components/Gallery/Gallery.vue";
import IImage from "~/interfaces/IImage";
import { State } from "~/node_modules/vuex-class";

declare const $;

@Component({
  components: {
    CountdownSection,
    Gallery,
  },
})
export default class Homepage extends Vue {
  @State locale: string;
  tel = "+420777987295"
  loadedCount = 0;
  isGaleryVisible = false;

  private mounted() {
    this.$nextTick( () => {
      this.isGaleryVisible = true;
    });


    // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
    $("#droplet").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

  }

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
    { src: "/images-v1/gallery/img1031.jpg", tiny: "/images-v1/gallery/thumbnail/img1031_tn.jpg" },
    { src: "/images-v1/gallery/6eeff8cb-a2ff-4f29-88cb-1330062ad3ea.jpg", tiny: "/images-v1/gallery/thumbnail/6eeff8cb-a2ff-4f29-88cb-1330062ad3ea_tn.jpg" },
    { src: "/images-v1/gallery/d009a317-7fc8-4772-8110-ac105db71a3b.jpg", tiny: "/images-v1/gallery/thumbnail/d009a317-7fc8-4772-8110-ac105db71a3b_tn.jpg" },
    { src: "/images-v1/gallery/img1032.jpg", tiny: "/images-v1/gallery/thumbnail/img1032_tn.jpg" },
    { src: "/images-v1/gallery/img1028.jpg", tiny: "/images-v1/gallery/thumbnail/img1028_tn.jpg" },
    { src: "/images-v1/gallery/img1100.jpg", tiny: "/images-v1/gallery/thumbnail/img1100_tn.jpg" },
    { src: "/images-v1/gallery/img1029.jpg", tiny: "/images-v1/gallery/thumbnail/img1029_tn.jpg" },
    { src: "/images-v1/gallery/img1026.jpg", tiny: "/images-v1/gallery/thumbnail/img1026_tn.jpg" },
    { src: "/images-v1/gallery/img1021.jpg", tiny: "/images-v1/gallery/thumbnail/img1021_tn.jpg" },
    { src: "/images-v1/gallery/img1024.jpg", tiny: "/images-v1/gallery/thumbnail/img1024_tn.jpg" },
    { src: "/images-v1/gallery/img1027.jpg", tiny: "/images-v1/gallery/thumbnail/img1027_tn.jpg" },
    { src: "/images-v1/gallery/img1023.jpg", tiny: "/images-v1/gallery/thumbnail/img1023_tn.jpg" },
    { src: "/images-v1/gallery/img1030.jpg", tiny: "/images-v1/gallery/thumbnail/img1030_tn.jpg" },
    { src: "/images-v1/gallery/img1033.jpg", tiny: "/images-v1/gallery/thumbnail/img1033_tn.jpg" },
    { src: "/images-v1/gallery/img1020.jpg", tiny: "/images-v1/gallery/thumbnail/img1020_tn.jpg" },
    { src: "/images-v1/gallery/img1018.jpg", tiny: "/images-v1/gallery/thumbnail/img1018_tn.jpg" },
    { src: "/images-v1/gallery/img1019.jpg", tiny: "/images-v1/gallery/thumbnail/img1019_tn.jpg" },
    { src: "/images-v1/gallery/img1017.jpg", tiny: "/images-v1/gallery/thumbnail/img1017_tn.jpg" },
    { src: "/images-v1/gallery/img1025.jpg", tiny: "/images-v1/gallery/thumbnail/img1025_tn.jpg" },
    { src: "/images-v1/gallery/img1038.jpg", tiny: "/images-v1/gallery/thumbnail/img1038_tn.jpg" },
    { src: "/images-v1/gallery/img1037.jpg", tiny: "/images-v1/gallery/thumbnail/img1037_tn.jpg" },
    { src: "/images-v1/gallery/img1036.jpg", tiny: "/images-v1/gallery/thumbnail/img1036_tn.jpg" },
    { src: "/images-v1/gallery/img1035.jpg", tiny: "/images-v1/gallery/thumbnail/img1035_tn.jpg" },
    { src: "/images-v1/gallery/img1034.jpg", tiny: "/images-v1/gallery/thumbnail/img1034_tn.jpg" },
    { src: "/images-v1/gallery/img1013.jpg", tiny: "/images-v1/gallery/thumbnail/img1013_tn.jpg" },
    { src: "/images-v1/gallery/img1003.jpg", tiny: "/images-v1/gallery/thumbnail/img1003_tn.jpg" },
    { src: "/images-v1/gallery/img1001.jpg", tiny: "/images-v1/gallery/thumbnail/img1001_tn.jpg" },
    { src: "/images-v1/gallery/img1000.jpg", tiny: "/images-v1/gallery/thumbnail/img1000_tn.jpg", class: "position-top" },
    { src: "/images-v1/gallery/img1015.jpg", tiny: "/images-v1/gallery/thumbnail/img1015_tn.jpg" },
    { src: "/images-v1/gallery/img1014.jpg", tiny: "/images-v1/gallery/thumbnail/img1014_tn.jpg" },
    { src: "/images-v1/gallery/img1099.jpg", tiny: "/images-v1/gallery/thumbnail/img1099_tn.jpg" },
    { src: "/images-v1/gallery/img1098.jpg", tiny: "/images-v1/gallery/thumbnail/img1098_tn.jpg" },
    { src: "/images-v1/gallery/img1012.jpg", tiny: "/images-v1/gallery/thumbnail/img1012_tn.jpg" },
    { src: "/images-v1/gallery/img1011.jpg", tiny: "/images-v1/gallery/thumbnail/img1011_tn.jpg" },
    { src: "/images-v1/gallery/img1010.jpg", tiny: "/images-v1/gallery/thumbnail/img1010_tn.jpg", class: "position-top" },
    { src: "/images-v1/gallery/img1008.jpg", tiny: "/images-v1/gallery/thumbnail/img1008_tn.jpg" },
    { src: "/images-v1/gallery/img1096.jpg", tiny: "/images-v1/gallery/thumbnail/img1096_tn.jpg" },
    { src: "/images-v1/gallery/img1007.jpg", tiny: "/images-v1/gallery/thumbnail/img1007_tn.jpg" },
    { src: "/images-v1/gallery/img1006.jpg", tiny: "/images-v1/gallery/thumbnail/img1006_tn.jpg" },
    { src: "/images-v1/gallery/img1094.jpg", tiny: "/images-v1/gallery/thumbnail/img1094_tn.jpg" },
    { src: "/images-v1/gallery/img1093.jpg", tiny: "/images-v1/gallery/thumbnail/img1093_tn.jpg" },
    { src: "/images-v1/gallery/img1005.jpg", tiny: "/images-v1/gallery/thumbnail/img1005_tn.jpg" },
    { src: "/images-v1/gallery/img1092.jpg", tiny: "/images-v1/gallery/thumbnail/img1092_tn.jpg" },
    { src: "/images-v1/gallery/img1091.jpg", tiny: "/images-v1/gallery/thumbnail/img1091_tn.jpg" },
    { src: "/images-v1/gallery/img1090.jpg", tiny: "/images-v1/gallery/thumbnail/img1090_tn.jpg" },
    { src: "/images-v1/gallery/img1089.jpg", tiny: "/images-v1/gallery/thumbnail/img1089_tn.jpg" },
    { src: "/images-v1/gallery/img1002.jpg", tiny: "/images-v1/gallery/thumbnail/img1002_tn.jpg" },
    { src: "/images-v1/gallery/img1088.jpg", tiny: "/images-v1/gallery/thumbnail/img1088_tn.jpg" },
    { src: "/images-v1/gallery/img1087.jpg", tiny: "/images-v1/gallery/thumbnail/img1087_tn.jpg" },
    { src: "/images-v1/gallery/img1079.jpg", tiny: "/images-v1/gallery/thumbnail/img1079_tn.jpg" },
    { src: "/images-v1/gallery/img1086.jpg", tiny: "/images-v1/gallery/thumbnail/img1086_tn.jpg" },
    { src: "/images-v1/gallery/img1085.jpg", tiny: "/images-v1/gallery/thumbnail/img1085_tn.jpg" },
    { src: "/images-v1/gallery/img1084.jpg", tiny: "/images-v1/gallery/thumbnail/img1084_tn.jpg", class: "position-top"},
    { src: "/images-v1/gallery/img1083.jpg", tiny: "/images-v1/gallery/thumbnail/img1083_tn.jpg" },
    { src: "/images-v1/gallery/img1070.jpg", tiny: "/images-v1/gallery/thumbnail/img1070_tn.jpg" },
    { src: "/images-v1/gallery/img1082.jpg", tiny: "/images-v1/gallery/thumbnail/img1082_tn.jpg" },
    { src: "/images-v1/gallery/img1080.jpg", tiny: "/images-v1/gallery/thumbnail/img1080_tn.jpg" },
    { src: "/images-v1/gallery/img1078.jpg", tiny: "/images-v1/gallery/thumbnail/img1078_tn.jpg" },
    { src: "/images-v1/gallery/img1077.jpg", tiny: "/images-v1/gallery/thumbnail/img1077_tn.jpg" },
    { src: "/images-v1/gallery/img1075.jpg", tiny: "/images-v1/gallery/thumbnail/img1075_tn.jpg" },
    { src: "/images-v1/gallery/img1076.jpg", tiny: "/images-v1/gallery/thumbnail/img1076_tn.jpg" },
    { src: "/images-v1/gallery/img1072.jpg", tiny: "/images-v1/gallery/thumbnail/img1072_tn.jpg" },
    { src: "/images-v1/gallery/img1073.jpg", tiny: "/images-v1/gallery/thumbnail/img1073_tn.jpg" },
    { src: "/images-v1/gallery/img1074.jpg", tiny: "/images-v1/gallery/thumbnail/img1074_tn.jpg" },
    { src: "/images-v1/gallery/img1071.jpg", tiny: "/images-v1/gallery/thumbnail/img1071_tn.jpg" },
    { src: "/images-v1/gallery/img1067.jpg", tiny: "/images-v1/gallery/thumbnail/img1067_tn.jpg" },
    { src: "/images-v1/gallery/img1069.jpg", tiny: "/images-v1/gallery/thumbnail/img1069_tn.jpg" },
    { src: "/images-v1/gallery/img1065.jpg", tiny: "/images-v1/gallery/thumbnail/img1065_tn.jpg" },
    { src: "/images-v1/gallery/img1066.jpg", tiny: "/images-v1/gallery/thumbnail/img1066_tn.jpg" },
    { src: "/images-v1/gallery/img1059.jpg", tiny: "/images-v1/gallery/thumbnail/img1059_tn.jpg" },
    { src: "/images-v1/gallery/img1060.jpg", tiny: "/images-v1/gallery/thumbnail/img1060_tn.jpg" },
    { src: "/images-v1/gallery/img1061.jpg", tiny: "/images-v1/gallery/thumbnail/img1061_tn.jpg" },
    { src: "/images-v1/gallery/img1063.jpg", tiny: "/images-v1/gallery/thumbnail/img1063_tn.jpg" },
    { src: "/images-v1/gallery/img1064.jpg", tiny: "/images-v1/gallery/thumbnail/img1064_tn.jpg" },
    { src: "/images-v1/gallery/img1058.jpg", tiny: "/images-v1/gallery/thumbnail/img1058_tn.jpg" },
    { src: "/images-v1/gallery/img1057.jpg", tiny: "/images-v1/gallery/thumbnail/img1057_tn.jpg" },
    { src: "/images-v1/gallery/img1056.jpg", tiny: "/images-v1/gallery/thumbnail/img1056_tn.jpg" },
    { src: "/images-v1/gallery/img1055.jpg", tiny: "/images-v1/gallery/thumbnail/img1055_tn.jpg" },
    { src: "/images-v1/gallery/img1054.jpg", tiny: "/images-v1/gallery/thumbnail/img1054_tn.jpg" },
    { src: "/images-v1/gallery/img1053.jpg", tiny: "/images-v1/gallery/thumbnail/img1053_tn.jpg" },
    { src: "/images-v1/gallery/img1049.jpg", tiny: "/images-v1/gallery/thumbnail/img1049_tn.jpg" },
    { src: "/images-v1/gallery/img1050.jpg", tiny: "/images-v1/gallery/thumbnail/img1050_tn.jpg" },
    { src: "/images-v1/gallery/img1051.jpg", tiny: "/images-v1/gallery/thumbnail/img1051_tn.jpg" },
    { src: "/images-v1/gallery/img1052.jpg", tiny: "/images-v1/gallery/thumbnail/img1052_tn.jpg" },
    { src: "/images-v1/gallery/img1048.jpg", tiny: "/images-v1/gallery/thumbnail/img1048_tn.jpg" },
    { src: "/images-v1/gallery/img1047.jpg", tiny: "/images-v1/gallery/thumbnail/img1047_tn.jpg" },
    { src: "/images-v1/gallery/img1046.jpg", tiny: "/images-v1/gallery/thumbnail/img1046_tn.jpg" },
    { src: "/images-v1/gallery/img1102.jpg", tiny: "/images-v1/gallery/thumbnail/img1102_tn.jpg" },
    { src: "/images-v1/gallery/img1045.jpg", tiny: "/images-v1/gallery/thumbnail/img1045_tn.jpg" },
    { src: "/images-v1/gallery/img1044.jpg", tiny: "/images-v1/gallery/thumbnail/img1044_tn.jpg" },
    { src: "/images-v1/gallery/img1043.jpg", tiny: "/images-v1/gallery/thumbnail/img1043_tn.jpg" },
    { src: "/images-v1/gallery/img1042.jpg", tiny: "/images-v1/gallery/thumbnail/img1042_tn.jpg" },
    { src: "/images-v1/gallery/img1041.jpg", tiny: "/images-v1/gallery/thumbnail/img1041_tn.jpg" },
    { src: "/images-v1/gallery/img1101.jpg", tiny: "/images-v1/gallery/thumbnail/img1101_tn.jpg" },
    { src: "/images-v1/gallery/img1040.jpg", tiny: "/images-v1/gallery/thumbnail/img1040_tn.jpg" },
    { src: "/images-v1/gallery/img1039.jpg", tiny: "/images-v1/gallery/thumbnail/img1039_tn.jpg" },



    // { src: "/images-v1/gallery/img1022.jpg", tiny: "/images-v1/gallery/thumbnail/img1022_tn.jpg" },
    // { src: "/images-v1/gallery/img1004.jpg", tiny: "/images-v1/gallery/thumbnail/img1004_tn.jpg" },
    // { src: "/images-v1/gallery/img1009.jpg", tiny: "/images-v1/gallery/thumbnail/img1009_tn.jpg" },
    // { src: "/images-v1/gallery/img1016.jpg", tiny: "/images-v1/gallery/thumbnail/img1016_tn.jpg" },
    // { src: "/images-v1/gallery/img1062.jpg", tiny: "/images-v1/gallery/thumbnail/img1062_tn.jpg" },
    // { src: "/images-v1/gallery/img1068.jpg", tiny: "/images-v1/gallery/thumbnail/img1068_tn.jpg" },
    // { src: "/images-v1/gallery/img1081.jpg", tiny: "/images-v1/gallery/thumbnail/img1081_tn.jpg" },
    // { src: "/images-v1/gallery/img1095.jpg", tiny: "/images-v1/gallery/thumbnail/img1095_tn.jpg" },
    // { src: "/images-v1/gallery/img1097.jpg", tiny: "/images-v1/gallery/thumbnail/img1097_tn.jpg" },



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

  private rsvpLoaded() {
    this.loadedCount++;
    let mod = this.loadedCount % 5;
    let rsvpForm= this.getRsvpForm();

    if(this.isSmallScreen()) {
      switch(mod) {
        case 0: rsvpForm.height = "400px"; break; // submit another page
        case 1: rsvpForm.height = "1150px"; break; // first page
        case 2: rsvpForm.height = "1400px"; break;
        case 3: rsvpForm.height = "1550px"; break;
        case 4: rsvpForm.height = "650px"; break;
      }
    } else {
      switch(mod) {
        case 0: rsvpForm.height = "300px"; break; // submit another page
        case 1: rsvpForm.height = "1000px"; break; // first page
        case 2: rsvpForm.height = "1100px"; break;
        case 3: rsvpForm.height = "1300px"; break;
        case 4: rsvpForm.height = "550px"; break;
      }
    }
    if(this.loadedCount != 1) {
      (this.$refs.rsvpSection as HTMLDivElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  getRsvpForm(): HTMLIFrameElement {
    return this.$refs.rsvpForm as HTMLIFrameElement;
  }

  isSmallScreen() {
    return window.innerWidth < 600;
  }

  scrollSmoothly(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (event.target.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = event.target.hash;

        console.log(event)

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
  }

}
