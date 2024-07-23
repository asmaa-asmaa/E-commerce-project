<template>
  <div class="second-part">
    <v-sheet height="530px" color="white" class="mb-16">
      <v-row class="rHead mt-16 text-center ma-0">
        <v-col cols="12">
          <h2>Choose A Category</h2>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-around mx-1" style="gap: 0">
        <v-col cols="12" sm="6" height="400px" v-for="(nm, i) in 4" :key="i">
          <div
            class="con d-flex justify-space-around align-center mx-1"
            style="gap: 0"
          >
            <v-card
              :image="imgArr[i]"
              @click="
                router.push({
                  name: 'productscategory',
                  params: { category: categories[i].slug },
                })
              "
            ></v-card>
          </div>
        </v-col>
      </v-row>
      <!-- <v-row class="d-flex justify-space-around mt-7 mx-1" style="gap: 0">
        <v-card
          v-for="(num, j) in 4"
          :key="j"
          :image="imgArr[j]"
          @click="
            router.push({
              name: 'productscategory',
              params: { category: categories[j] },
            })
          "
        ></v-card>
      </v-row> -->
    </v-sheet>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import productsMixin from "@/mixins/products.js";
const { imgArr, getProducts, categories } = productsMixin();
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(async () => {
  await getProducts();
});
</script>
<style scoped lang="scss">
.rHead {
  background-color: rgb(248, 53, 53);
}
.v-card {
  height: 200px !important;
  width: 620px !important;
  margin-right: 0;
  //   margin-bottom: 15px;
}
.con:hover {
  overflow: hidden !important;
  height: 100%;
  width: 100%;

  .v-card {
    transform: skewY(10deg) scale(1.5) !important;

    // transform: translateZ(0);
  }
}
@media (max-width: 599px) {
  .v-sheet {
    height: 980px !important;
  }
}
</style>
