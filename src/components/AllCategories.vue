<template>
  <div class="all-categories">
    <h2 class="text-sm-center text-red">Shop as you prefer</h2>

    <v-carousel
      color="red"
      show-arrows="hover"
      hide-delimiters
      progress
      height="300px"
    >
      <v-carousel-item
        v-for="(cat, i) in categories"
        :key="i"
        :src="imgArr[i]"
        @click="
          $router.push({
            name: 'productscategory',
            params: { category: cat.slug },
          })
        "
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
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
.all-categories {
  .v-window {
    color: rgb(230, 22, 22) !important;
    margin-top: 5px !important;
  }
  .v-btn--icon .v-icon {
    color: rgb(230, 19, 19) !important;
  }
}
</style>
