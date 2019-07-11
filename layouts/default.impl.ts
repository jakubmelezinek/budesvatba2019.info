import { Component, Vue } from "~/node_modules/vue-property-decorator";
import Header from '~/components/Header/Header.vue'
import Footer from '~/components/Footer/Footer.vue'


@Component({
  components: {
    Header,
    Footer
  }
})
export default class DefaultLayout extends Vue {
}
