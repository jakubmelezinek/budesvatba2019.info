<script lang="ts">
import Component from "nuxt-class-component";
import Vue from "vue";

@Component({})
export default class RootIndex extends Vue {

  mounted() {
    const skIndex = navigator.languages.indexOf("sk");
    const skSkIndex = navigator.languages.indexOf("sk-Sk")
    const csIndex = navigator.languages.indexOf("cs")
    const csCzIndex = navigator.languages.indexOf("cs-CZ")

    if (skIndex !== -1 && (skIndex < csIndex || skIndex < csCzIndex)) {
      this.$router.push("/svatba/sk");
    } else if (skSkIndex !== -1 && (skSkIndex < csIndex || skSkIndex < csCzIndex)) {
      this.$router.push("/svatba/sk");
    } else {
      this.$router.push("/svatba/cz");
    }
  }
}
</script>
