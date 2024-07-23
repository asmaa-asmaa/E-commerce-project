<template>
  <div class="swiper-part mb-16 mt-5" height="200px">
    <Swiper
      :modules="[EffectCube, Pagination, Navigation]"
      effect="cube"
      :grab-cursor="true"
      :loop="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="{}"
    >
      <SwiperSlide v-for="(cat, i) in categories" :key="i">
        <v-card
          class="d-flex justify-center flex-column"
          @click="
            $router.push({
              name: 'productscategory',
              params: { category: cat.slug },
            })
          "
        >
          <v-card-title class="ma-0 pb-0 pt-0 text-red">{{
            cat.name
          }}</v-card-title>
          <v-img :src="imgArr[i]" class="h-75 w-75 mx-auto"></v-img>
        </v-card>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { EffectCube, Pagination, Navigation } from "swiper";
// import { useRouter } from "vue-router";
// const router = useRouter();

import { onMounted } from "vue";
import productsMixin from "@/mixins/products.js";
const { categories, getProducts, imgArr } = productsMixin();

console.log(categories);
console.log(getProducts());

onMounted(async () => {
  await getProducts();
});
</script>
<style lang="scss">
.swiper {
  width: 600px;
  height: 400px;
  overflow: visible;
  .swiper-slide .v-card {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background-color: red;
  }
  .swiper-button-next,
  .swiper-button-prev {
    right: -12px;
  }
  .swiper-button-prev {
    left: -12px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: red;
    font-size: 20px;
  }
}
@media (max-width: 650px) {
  .swiper {
    width: 75% !important;
    height: 25% !important;
    overflow: visible;
    .swiper-slide .v-card {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets {
    bottom: -3px !important;
  }
}
</style>
