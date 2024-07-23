<template>
  <div class="contact-us">
    <div
      class="contac"
      ref="map"
      id="map"
      style="height: 400px; width: 100%"
    ></div>
    <v-card class="ma-8">
      <v-card-title class="mt-2 mb-2 text-red">Contacts</v-card-title>

      <v-card-subtitle class="text-red-darken-3 mb-2 h1"
        >Feel Free to contact us</v-card-subtitle
      >
      <v-divider length="30%" color="red"></v-divider>
      <v-divider length="30%" color="red"></v-divider>
      <v-card-text> Dummy Phone:<span>+20 --------</span> </v-card-text>
      <v-card-text>
        Dummy E-mail:
        <span>dummy-site@gmail.com.</span>
      </v-card-text>
      <v-card-text>
        Dummy FaceBook Page: <span>https://lablablaaaa.</span>
      </v-card-text>
      <v-card-text>
        Dummy Instagram: <span>https://lablablaaaaaa.</span>
      </v-card-text>
      <v-card-text class="d-flex flex-column justify-space-between">
        Dummy Address: <span class="pa-5">3 Dummy street, Heliopolis </span
        ><span class="pl-5">Cairo, Egypt</span>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
// const map = ref(null);
const initMap = () => {
  const cairo = ref({ lat: 29.977358246605252, lng: 31.13258454104899 });
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: cairo.value,
    zoom: 10,
  });
  new window.google.maps.Marker({
    position: cairo.value,
    map: map,
    title: "cairo, egypt",
  });
};

onMounted(() => {
  initMap();
  // new window.google.maps.Map(map.value, {
  //   center: { lat: 26.8206, lng: 30.8025 },
  //   zoom: 6,
  // });

  // new window.google.maps.Marker(map.value, {
  //   position: { lat: 26.8206, lng: 30.8025 },
  // });
});
</script>
<style lang="scss">
.contact-us {
  .v-card--variant-elevated {
    box-shadow: 4px -8px 0px 1px !important;
    color: red !important;
  }
  .v-card-text {
    color: #f44336 !important;
    opacity: 100%;

    span {
      color: rgb(30 30 143) !important;
    }
  }
}
@media (max-width: 464px) {
  .contact-us {
    margin-top: -42px !important;
  }
}

@media (min-width: 465px) {
  .contact-us {
    margin-top: -46px !important;
  }
}
</style>
