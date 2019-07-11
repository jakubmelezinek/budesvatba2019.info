import { Component, Vue } from 'vue-property-decorator'
import CountdownSection from "~/components/CountdownSection/CountdownSection.vue";
import RsvpSection from "~/components/RsvpSection/RsvpSection.vue";

@Component({
  components: {
    CountdownSection,
    RsvpSection,
  },
})
export default class Homepage extends Vue {
}
