<template>
  <div class="summary-item bg-white">
    <div class="one" v-if="!cartItems.length">
      <v-card class="w-75 mx-auto pa-2" variant="elevated">
        <h1 class="text-red mx-auto">
          Your cart is empty please place an order
        </h1>
      </v-card>
    </div>

    <v-card v-if="cartItems.length" class="w-50 mx-3 mb-3">
      <div class="head d-flex justify-space-between">
        <v-card-title class="text-red"
          ><v-icon color="green">mdi-check-circle</v-icon>Customer
          Address</v-card-title
        >
        <span
          style="cursor: pointer"
          @click="$router.push({ name: 'editAccount' })"
          class="mt-3 text-red"
          >change <v-icon>mdi-chevron-right</v-icon></span
        >
      </div>

      <v-divider></v-divider>
      <v-card-text class="ml-3">{{ first }} {{ last }}</v-card-text>
      <v-card-text class="ml-3">{{ ado }}</v-card-text>
    </v-card>
    <v-card v-if="cartItems.length" class="w-50 ma-3">
      <div class="head d-flex justify-space-between">
        <v-card-title class="text-red"
          ><v-icon color="green">mdi-check-circle</v-icon>Payment
          Details</v-card-title
        >
        <span
          @click="$router.push({ name: 'paymentmethod' })"
          style="cursor: pointer"
          class="mt-3 text-red"
          >change <v-icon>mdi-chevron-right</v-icon></span
        >
      </div>

      <v-divider></v-divider>

      <div class="sec d-flex justify-space-between">
        <v-card-title>{{ payMethod }}</v-card-title
        ><v-icon color="red mt-3 mr-2">mdi-wallet-outline</v-icon>
      </div>
      <v-card-text>Delivery scheduled on {{ res }} </v-card-text>
      <h2 class="ml-3 text-red">Shipment</h2>
      <v-card variant="outlined">
        <div class="sec d-flex justify-space-between">
          <v-card-title class="text-red">Door delivery</v-card-title
          ><v-icon color="red mt-3 mr-2">mdi-truck</v-icon>
        </div>
        <v-card-text>Delivery scheduled on {{ res }} </v-card-text>
        <div class="prods d-flex ml-4" v-for="item in cartItems" :key="item.id">
          <img :src="item.thumbnail" />
          <div class="de">
            <v-card-subtitle>{{ item.title }}</v-card-subtitle>
            <v-card-subtitle>{{ item.quantity }}</v-card-subtitle>
          </div>
        </div>
      </v-card>
      <v-btn
        class="mt-5"
        style="width: 150px; margin-left: 35%; font-size: 12px"
        color="red"
        @click="someChecks"
        >Confirm order</v-btn
      >
      <v-card-subtitle class="text-red" v-if="sho == true">
        Please write your Address</v-card-subtitle
      >
    </v-card>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import cartMixin from "@/mixins/cart.js";

const { cartItems, getScartItems } = cartMixin();
const res = ref("");
const deliveryD = () => {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 2);
  const da = String(currentDate.getDate()).padStart(2, "0");
  const mon = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  res.value = `${da}/${mon}/${year}`;
};
// const day = da < 10 ? "0" + da : da;

const first = localStorage.getItem("first");
const last = localStorage.getItem("last");
const ado = localStorage.getItem("ado");
const payMethod = localStorage.getItem("paymethod");
const sho = ref(false);

const someChecks = () => {
  if (ado == "") {
    sho.value = true;
  } else {
    sho.value = false;
  }
};

onMounted(() => {
  deliveryD();

  localStorage.getItem("first");
  localStorage.getItem("last");
  localStorage.getItem("ado");
  getScartItems();
});
</script>
<style scoped lang="scss">
.summary-items {
  .one {
    .v-card {
      box-shadow: 10px 19px 16px 1px !important;
    }
  }
}
img {
  width: 56px !important;
  height: 56px !important;
}
@media (max-width: 464px) {
  .summary-item {
    margin-top: -21px !important;
    .v-card-title,
    h2 {
      font-size: 18px !important;
    }
  }
}

@media (min-width: 465px) and (max-width: 597px) {
  .summary-item {
    margin-top: -37px !important;
    // margin-right: 30px;
  }
}
@media (min-width: 598px) {
  .summary-item {
    margin-top: -42px !important;
    padding-top: 30px;
  }

  .v-card {
    // width: 100% !important;
  }
}
@media (max-width: 800px) {
  .summary-item {
    padding-right: 30px;
  }

  .v-card {
    width: 100% !important;
  }
}
</style>
