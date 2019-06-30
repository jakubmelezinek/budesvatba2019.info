import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  },
})
export default class Homepage extends Vue {
  mounted() {
    console.log("Homepage mounted");
  }
}
