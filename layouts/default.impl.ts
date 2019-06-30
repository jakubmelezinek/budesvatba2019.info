import { Component, Vue } from "~/node_modules/vue-property-decorator";
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


@Component({
  components: {
    Header,
    Footer
  }
})
export default class DefaultLayout extends Vue {
  mounted() {
    console.log("DefaultLayout mounted");
  }
}
