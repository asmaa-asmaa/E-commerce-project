import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import mitt from "mitt";
const emitter = mitt();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-cube";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// const { Map } = await google.maps.importLibrary("maps");
// const map = new Map(document.getElementById("app"), {
//   zoom: 5,
//   center: { lat: 26.8206, lng: 30.8025 },
//   mapId: "DEMO_MAP_ID",
// });

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  // .use(VueGoogleMaps, {
  //   load: {
  //     // put your google API key either in the ./config/local.env.js file or just hardcode in the string below
  //     apiKey:
  //       import.meta.env.VITE_GOOGLE_MAPS_API_KEY ||
  //       "AIzaSyB_vTjTsa6QAL9-e3kkHWRM9lpeiLzA6as",
  //     libraries: ["places"],
  //     useBetaRenderer: false,
  //   },
  // })
  .use(vuetify)
  .provide("emitter", emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
