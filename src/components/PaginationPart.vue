<template>
  <div class="pagination">
    <v-row>
      <v-col cols="12" class="d-flex justify-center"
        ><h1 class="text-red">Our Dummy Clients</h1></v-col
      >
    </v-row>
    <v-row class="mx-1">
      <v-col
        class="ma-0 pa-0 d-flex justify-center"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="pag in pagiPro.data"
        :key="pag.id"
        style="gap: 1px"
      >
        <v-card
          class="mt-0 pt-0 d-flex flex-column justify-center align-center"
          height="400"
          width="500"
          elevation="5"
        >
          <v-img :src="pag.avatar" style="width: 250px; height: 200px"></v-img>
          <v-card-title>{{ pag.first_name }} {{ pag.last_name }}</v-card-title>
          <v-card-text class="pb-1 mb-0 pt-1"> {{ pag.email }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-pagination
          rounded="circle"
          elevation="10"
          :length="pagiPro.total_pages"
          v-model="pagg"
          color="red"
          @update:model-value="getPagination"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import productsMixin from "@/mixins/products.js";
const { pagiPro, getPagination, pagg } = productsMixin();
onMounted(async () => {
  await getPagination();
});
</script>
<style lang="scss">
@media (max-width: 380px) {
  .pagination {
    .v-pagination__item {
      margin: 0px !important;
    }
    h1 {
      font-size: 21px;
    }
  }
}
</style>
