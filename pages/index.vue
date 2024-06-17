<script lang="ts">
import Component from "nuxt-class-component";
import Vue from "vue";

@Component({})
export default class RootIndex extends Vue {

  mounted() {
    this.$router.push("/svoji");
  }
}
</script>
