import { Component, Vue } from 'vue-property-decorator'
import CountdownSection from "~/components/CountdownSection/CountdownSection.vue";

@Component({
  components: {
    CountdownSection
  },
})
export default class Homepage extends Vue {
  mounted() {
    console.log("Homepage mounted");
  }
}
