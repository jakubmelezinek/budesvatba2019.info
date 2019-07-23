import Vue from 'vue';
import Component from 'nuxt-class-component';
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
