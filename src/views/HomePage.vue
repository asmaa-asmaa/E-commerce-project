<template>
  <div class="home h-100 pa-3 bg-grey-lighten-2">
    <SwiperPart />

    <SecondPart />
    <PaginationPart />
    <AllCategories />

    <v-layout class="bg-grey">
      <!-- <v-row> -->
      <!-- <v-col cols="12" class="mb-3 h-25"> -->
      <app-footer />
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-layout>
  </div>
</template>

<script setup>
import AllCategories from "@/components/AllCategories.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import SecondPart from "@/components/SecondPart.vue";
import PaginationPart from "@/components/PaginationPart.vue";
import SwiperPart from "@/components/SwiperPart.vue";
</script>

<style scoped lang="scss">
.home {
  position: relative;
  margin-top: -44px;
  .v-layout {
    display: block;
    margin: -11px;
    width: 107%;
  }
}
</style>
<style lang="scss"></style>
