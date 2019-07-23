import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDycae_MlcVD0VcvZRoLzGCVWkB_MoyPRU",
  authDomain: "budesvatba2019.firebaseapp.com",
  databaseURL: "https://budesvatba2019.firebaseio.com",
  projectId: "budesvatba2019",
  storageBucket: "budesvatba2019.appspot.com",
  messagingSenderId: "848596234635",
  appId: "1:848596234635:web:3f9eed80c2c654e0", // budesvatba2019.info
  // appId: "1:848596234635:web:d3318d5ff82c0c0b", // localhost:3000
});

const db = firebase.firestore();
// Vue.prototype.$db = db;

export default ({ app }, inject) => {
  inject('db', db);
}
