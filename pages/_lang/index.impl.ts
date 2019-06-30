import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
})
export default class Homepage extends Vue {
  mounted() {
    console.log("Homepage mounted");
  }
}
