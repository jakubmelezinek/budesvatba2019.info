import Vue from 'vue';
import { AxiosStatic } from 'axios';
import * as firebase from 'firebase';
import Firestore = firebase.firestore.Firestore;

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        functional?: boolean;
    }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
    $db: Firestore;
  }
}
