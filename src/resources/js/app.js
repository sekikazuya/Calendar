require('./bootstrap');

window.Vue = require('vue');

// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

import { createApp } from 'vue';
// Vue.use(Vuetify);

const app = createApp({
  components: {
    'sample-component': require('./components/Sample.vue').default,
  }
}).mount('#app')
// Vue.component('sample-component', require('./components/Sample.vue').default);

// const app = new Vue({
//   el : '#app',
// })