<template>
  <div class="drawer">
    <v-navigation-drawer
      class="h-100"
      v-model="drawer"
      :location="$vuetify.display.xs ? 'right' : 'left'"
      temporary
      style="margin-top: 100px"
    >
      <v-list>
        <v-list-item
          active-color="red"
          :value="cat.name"
          v-for="(cat, i) in categories"
          :key="i"
          :to="{
            name: 'productscategory',
            params: { category: cat.slug },
          }"
        >
          <v-list-item-title> {{ cat.name }} </v-list-item-title>
          <template v-slot:prepend>
            <v-icon class="icon">{{ icons[i] }}</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script setup>
import { inject, onMounted, ref } from "vue";
import productsMixin from "@/mixins/products.js";
const { categories, getProducts } = productsMixin();

console.log(categories);
console.log(getProducts());

const drawer = ref(false);
const emitter = inject("emitter");
onMounted(async () => {
  emitter.on("openMenu", () => {
    drawer.value = true;
  });
  await getProducts();
});
const icons = ref([
  "mdi-lipstick",
  "mdi-bottle-tonic-outline",
  "mdi-table-furniture",
  "mdi-rice",
  "mdi-lamp-outline",
  "mdi-stove",
  "mdi-laptop",
  "mdi-tshirt-crew-outline",
  "mdi-shoe-formal",
  "mdi-watch",
]);
</script>
<style lang="scss">
.drawer {
  .v-navigation-drawer {
    top: 114px !important;
  }
}
</style>
<style scoped lang="scss">
.drawer {
  .v-list-item-title:hover {
    font-weight: bolder !important;
  }
  .v-list-item {
    padding-left: 10px !important;
    justify-content: start !important;
    font-size: 14px;
  }
  .icon {
    margin-right: 0 !important;
    padding-right: 10px !important;
    font-size: 18px;
  }
}
</style>
