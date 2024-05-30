import Vue from 'vue';
import { AxiosStatic } from 'axios';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        functional?: boolean;
    }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}
