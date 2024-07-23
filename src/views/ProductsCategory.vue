<template>
  <div class="category mt-0">
    <v-layout class="bg-grey-lighten-1 ma-0">
      <v-container fluid>
        <v-row class="mt-3">
          <v-col cols="12"
            ><v-breadcrumbs
              :items="['home', 'products', $route.params.category]"
              divider=">"
            ></v-breadcrumbs
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="12"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="12"
            ><h1 class="text-red">
              {{ $route.params.category.toUpperCase() }}
            </h1></v-col
          >
        </v-row>
        <v-row class="mx-1">
          <v-col
            class="ma-0 pa-0 d-flex justify-center"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="pro in prodCat"
            :key="pro.id"
            style="gap: 1px"
          >
            <v-card
              class="mt-0 pt-0"
              height="500"
              elevation="5"
              @click="
                $router.push({
                  name: 'productname',
                  params: {
                    category: $route.params.category,
                    proId: pro.id,
                  },
                  query: { proname: pro.title },
                })
              "
            >
              <v-img :src="pro.images[0]" class="h-50 w-50"></v-img>
              <v-card-title class="ma-0 pb-0 pt-0">{{
                pro.title
              }}</v-card-title>
              <v-card-title class="mt-0 pt-0 text-red">
                Brand: {{ pro.brand }}</v-card-title
              >

              <v-card-text class="pt-0 mb-0 pb-0">{{
                pro.description
              }}</v-card-text>
              <v-card-subtitle class="pb-0 mb-0">
                <del> Price: EGP {{ pro.price }}</del></v-card-subtitle
              >
              <v-card-text class="pb-1 mb-0 pt-1 font-weight-bold">
                Price: EGP
                {{
                  Math.round(
                    pro.price - (pro.price * pro.discountPercentage) / 100
                  )
                }}</v-card-text
              >
              <v-card-text class="pt-0 mt-0 pb-0 text-red">{{
                pro.availabilityStatus
              }}</v-card-text>
              <v-rating
                class="ma-0 pb-0 pt-0"
                readonly
                :model-value="pro.rating"
                color="red"
                half-increments
                length="5"
                size="30"
              ></v-rating>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log(route.params);
const router = useRouter();
console.log(router);
import productsMixin from "@/mixins/products.js";
import { onMounted, onUpdated } from "vue";
const { getProductsbycategory, prodCat } = productsMixin();
onMounted(async () => {
  await getProductsbycategory(route.params.category);
});
onUpdated(async () => {
  await getProductsbycategory(route.params.category);
});
// console.log(prodCat);
// const items = ref[("home", "products", pro.value)];
</script>
<style scoped lang="scss">
.v-img {
  position: relative;
  left: 25%;
  top: 10px;
  margin-bottom: -6px;
  padding-bottom: 0;
}
// .v-img__img {
//   margin-bottom: 0;
//   padding-bottom: 0;
// }
.v-card {
  border-radius: 25px !important;
}
.v-card:hover {
  transform: scale3d(1.1, 1.1, 1.1);
  transition: 0.5s ease-in-out;
  z-index: 100;
}
</style>
