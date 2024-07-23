<template>
  <div class="proNameductname" height="150vh">
    <v-layout class="bg-grey-lighten-1 ma-0">
      <v-container fluid>
        <v-row class="mt-3">
          <v-col cols="12"
            ><v-breadcrumbs
              :items="[
                'home',
                'products',
                $route.params.category,
                `${proName.title}`,
              ]"
              divider=">"
            ></v-breadcrumbs
          ></v-col>
        </v-row>
        <v-row class="d-flex">
          <v-col cols="12" sm="8">
            <v-card class="main mt-0 pt-0" height="950" elevation="5">
              <v-img
                :src="tab ? tab : proName.thumbnail"
                class="mainImg h-25 w-50"
              ></v-img>
              <v-tabs
                align-tabs="center"
                v-model="tab"
                height="100"
                color="red"
              >
                <v-tab
                  :value="iimg"
                  width="100"
                  height="100"
                  v-for="(iimg, i) in proName.images"
                  :key="i"
                  ><img :src="iimg" class="w-100 h-100"
                /></v-tab>
              </v-tabs>
              <v-card class="text-center" elevation="0">
                <v-card-title class="ma-0 pb-0 pt-0">{{
                  proName.title
                }}</v-card-title>
                <v-card-title class="mt-0 pt-0 text-red">
                  Brand: {{ proName.brand }}</v-card-title
                >

                <v-card-text class="pt-0 w-75 mx-auto">{{
                  proName.description
                }}</v-card-text>
                <v-card-subtitle class="pb-0 mb-0">
                  <del> Price: USD {{ proName.price }}</del></v-card-subtitle
                >
                <v-card-text class="pb-1 mb-0 pt-1 font-weight-bold">
                  Price: USD
                  {{
                    Math.round(
                      proName.price -
                        (proName.price * proName.discountPercentage) / 100
                    )
                  }}</v-card-text
                >
                <v-card-text class="pt-0 mt-0 pb-0 text-red">{{
                  proName.availabilityStatus
                }}</v-card-text>
                <v-card-text class="pt-0 mt-0 pb-0">{{
                  proName.shippingInformation
                }}</v-card-text>
                <v-card-text class="pt-0 mt-0 pb-0">{{
                  proName.returnPolicy
                }}</v-card-text>
                <v-card-text class="pt-0 mt-0 pb-0">{{
                  proName.warrantyInformation
                }}</v-card-text>
                <v-card-text> quantity: {{ proName.quantity }}</v-card-text>
                <v-card-text>
                  <v-btn
                    @click="cartAction(proName)"
                    elevation="3"
                    rounded="lg"
                    color="red"
                    width="50%"
                    v-if="proName.quantity < 1"
                    >add to cart</v-btn
                  >
                  <div class="quantity" v-if="proName.quantity >= 1">
                    <v-icon @click="decreaseAmo(proName)">mdi-minus</v-icon>
                    <input
                      class="text-center"
                      type="number"
                      v-model="proName.quantity"
                    />
                    <v-icon @click="increaseAmo(proName)">mdi-plus</v-icon>
                  </div>
                </v-card-text>

                <v-rating
                  class="ma-0 pb-0 pt-0"
                  readonly
                  :model-value="proName.rating"
                  color="red"
                  half-increments
                  length="5"
                ></v-rating>
              </v-card>
              <v-table
                hover
                density="compact"
                class="text-center w-75 mx-auto w-lg-50"
              >
                <thead>
                  <tr>
                    <th class="text-center">Reviews</th>
                    <th class="text-center">Rating</th>
                    <th class="text-center">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(review, i) in proName.reviews" :key="i">
                    <td>{{ review.comment }}</td>
                    <td>
                      <v-rating
                        color="red"
                        half-increments
                        :model-value="review.rating"
                        length="5"
                        readonly
                        size="25"
                      ></v-rating>
                    </td>
                    <td>{{ new Date(review.date).toLocaleDateString() }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card></v-col
          >
          <v-col cols="12" sm="4">
            <v-card height="950" class="s-main">
              <v-card-title>DELIVERY & RETURNS</v-card-title>
              <v-divider></v-divider>
              <v-card-text
                ><span><v-icon>mdi-arrow-top-right-thick</v-icon>EXPRESS</span>
              </v-card-text>
              <v-card-text
                >Express delivery for more info
                <span class="click" @click="dialogTh = true"
                  >click</span
                ></v-card-text
              >
              <v-dialog width="600" v-model="dialogTh" persistent>
                <v-card class="pa-2">
                  <p class="d-flex justify-space-between pr-2">
                    <v-card-title class="text-red"
                      >Express Service</v-card-title
                    >
                    <v-icon @click="dialogTh = false" color="red" class="pt-4"
                      >mdi-close</v-icon
                    >
                  </p>
                  <v-card-text
                    >Buy our express items and enjoy with</v-card-text
                  >
                  <!-- <v-card-item
                    >Free Shipping on orders above 250EGP for all cities.
                  </v-card-item> -->
                  <ul class="pt-1 pb-3 pl-5">
                    <li>
                      Free Shipping on orders above 500EGP for all cities.
                    </li>
                    <li>
                      <span class="text-red px-0 ml-0"
                        >In some areas of Cairo and Giza,</span
                      >
                      if you purchase Express products before 1:00 PM, the
                      products will be delivered within one business day.
                    </li>
                    <li>
                      <span class="text-red px-0 ml-0"
                        >In all other cities,</span
                      >
                      if you purchase Express products before 3:00 PM, the
                      product will be delivered within 1-7 business days.
                    </li>
                    <li>
                      The free shipping offer does not include large-sized items
                      and certain areas.
                    </li>
                  </ul>
                  <v-card-subtitle
                    >For more details about Express Service, please click
                    <router-link
                      to="/sellproducts"
                      class="text-red font-weight-bold"
                      >here</router-link
                    >
                  </v-card-subtitle>
                </v-card>
              </v-dialog>

              <v-divider></v-divider>
              <v-card-text>Choose Location</v-card-text>
              <v-card>
                <v-card-title width="100px"> </v-card-title>
              </v-card>

              <v-select v-model="country" :items="countries" item-title="name">
              </v-select>
              <v-select :items="cities" v-model="city"></v-select>
              <v-row class="mt-7 mb-5 px-3">
                <v-col cols="2" class="pt-1 pr-0"
                  ><span class="ico"><v-icon>mdi-box</v-icon></span></v-col
                >
                <v-col cols="10" class="pl-0">
                  <v-row class="one d-flex justify-space-between pr-3"
                    ><span>Pickup Station</span>
                    <span @click="dialog = true">Details</span></v-row
                  >
                  <v-dialog width="400" v-model="dialog" persistent>
                    <v-card class="pa-2">
                      <p class="d-flex justify-space-between pr-2">
                        <v-card-title class="text-red"
                          >Delivery Details</v-card-title
                        >
                        <v-icon @click="dialog = false" color="red" class="pt-4"
                          >mdi-close</v-icon
                        >
                      </p>
                      <v-card-subtitle>Pickup Station</v-card-subtitle>
                      <v-card-text
                        >Delivery time starts from the day you place your order
                        to the day your order arrives at the pickup station. You
                        will be notified of your order's arrival, and you have
                        to retrieve it within 5 days. If the order is not picked
                        up, it will be automatically cancelled.
                      </v-card-text>
                      <v-card-subtitle>Delivery Fee Details </v-card-subtitle>
                      <p class="d-flex justify-space-between mt-2 px-2">
                        <span>Total Delivery Amount </span>
                        <span class="text-red font-weight-bold">Free</span>
                      </p>
                    </v-card>
                  </v-dialog>
                  <v-row class="one">Free delivery</v-row>
                  <v-row class="one"
                    >Pickup by
                    <span class="text-red mx-1">
                      {{
                        new Date()
                          .toDateString()
                          .split(" ")
                          .slice(1, 3)
                          .join(" ")
                      }}
                    </span>
                    when you order within next
                    <span class="text-red mx-1"
                      >{{ new Date().getHours() }} hrs
                      {{ new Date().getMinutes() }} mins</span
                    ></v-row
                  >
                </v-col>
              </v-row>
              <v-row class="px-3">
                <v-col cols="2" class="pt-1 pr-0"
                  ><span class="ico"><v-icon>mdi-truck</v-icon></span></v-col
                >
                <v-col cols="10" class="pl-0">
                  <v-row class="one d-flex justify-space-between pr-3"
                    ><span>Door Delivery</span>
                    <span @click="dialogT = true">Details</span></v-row
                  >
                  <v-dialog width="400" v-model="dialogT" persistent>
                    <v-card class="pa-2">
                      <p class="d-flex justify-space-between pr-2">
                        <v-card-title class="text-red"
                          >Delivery Details</v-card-title
                        >
                        <v-icon
                          @click="dialogT = false"
                          color="red"
                          class="pt-4"
                          >mdi-close</v-icon
                        >
                      </p>
                      <v-card-subtitle>Pickup Station</v-card-subtitle>
                      <v-card-text
                        >Delivery time starts from the day you place your order
                        to the day one of our associates makes a first attempt
                        to deliver to you. Delivery will be attempted 3 times
                        over 7 days (8.00 am to 5.00 pm) after which the item
                        will be cancelled, if you are unreachable or unable to
                        receive the order.
                      </v-card-text>
                      <v-card-subtitle>Delivery Fee Details </v-card-subtitle>
                      <p class="d-flex justify-space-between mt-2 px-2">
                        <span>Total Delivery Amount </span>
                        <span class="text-red font-weight-bold">Free</span>
                      </p>
                    </v-card>
                  </v-dialog>
                  <v-row class="one pr-3"
                    >Delivery USD 10.00 (free delivery of order above USD
                    100)</v-row
                  >
                  <v-row class="one"
                    >Delivery by
                    <span class="text-red mx-1"
                      >{{
                        new Date()
                          .toDateString()
                          .split(" ")
                          .slice(1, 3)
                          .join(" ")
                      }}
                    </span>
                    when you order within next
                    <span class="text-red mx-1"
                      >{{ new Date().getHours() }} hrs
                      {{ new Date().getMinutes() }} mins</span
                    ></v-row
                  >
                </v-col>
              </v-row>
              <v-divider class="mt-5"></v-divider>
              <v-divider></v-divider>
              <v-row class="mt-5 mb-7 px-3">
                <v-col cols="2" class="pt-1 pr-0"
                  ><span class="ico"
                    ><v-icon>mdi-arrow-top-left-thick</v-icon></span
                  ></v-col
                >
                <v-col cols="10" class="pl-0">
                  <v-row class="one"><span>Return Policy</span></v-row>
                  <v-row class="one">
                    <p class="pr-3">
                      Free return within the legal period from 7 to 14 days, and
                      if they meet the terms & conditions.For more details about
                      return policy click here<v-icon>mdi-arrow-right</v-icon>
                      <span @click="$router.push({ name: 'return' })"
                        >Details</span
                      >
                    </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, inject, onUpdated } from "vue";
const tab = ref("");
import { useRoute } from "vue-router";
const route = useRoute();
import productsMixin from "@/mixins/products.js";
const { proName, getProductbyname, getCountries, countries } = productsMixin();
import cartMixin from "@/mixins/cart.js";
const {
  cartItems,
  addItem,
  increaseItem,
  removItem,
  getCartItems,
  getScartItems,
} = cartMixin();
console.log(countries);
const cities = ref(null);

const country = ref(null);
const city = ref(null);

console.log(cities);

watch(
  () => country.value,
  (val) => {
    city.value = "";
    for (let i = 0; i < countries.value.length; i++) {
      if (val === countries.value[i].name) {
        cities.value = countries.value[i].cities.slice(0, 5);
      }
    }
  }
);
const dialog = ref(false);
const dialogT = ref(false);
const dialogTh = ref(false);
const emitter = inject("emitter");
// const added = ref(false);
const cartAction = (item) => {
  emitter.emit("cartEmit");
  hideQuantity();
  quantity.value = 1;
  item.quantity = 1;
  addItem(item);
  getScartItems();
};
const quantity = ref(0);
const shown = ref(false);
const hideQuantity = () => {
  shown.value = true;
};
const increaseAmo = (item) => {
  //emitter.emit("cartEmit");
  //quantity.value++;
  //item.quantity++;

  item.quantity++;
  increaseItem(item);
  //localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  emitter.emit("cartNote");
};
const decreaseAmo = (item) => {
  emitter.emit("pUpdated");
  item.quantity > 0 ? item.quantity-- : false;
  removItem(item);
};
console.log(cartItems.value);

// const local = ref(JSON.parse(localStorage.getItem("cartItems")));
onMounted(async () => {
  await getProductbyname(route.params.proId);
  await getCountries();
  getCartItems(proName.value, quantity);
  getScartItems();
});
onUpdated(async () => {
  await getProductbyname(route.params.proId);
});
//onBeforeMount(() => {
//getCartItems(proName.value, quantity);
//});
//onUpdated(() => {
//getCartItems(proName.value, quantity);
//});
</script>
<style scoped lang="scss">
.proNameductname {
  .v-img {
    position: relative;
    left: 25%;
    top: 3px;
    margin-bottom: -8px;
    padding-bottom: 0;
  }
  .v-table {
    margin: 0 2px 0;
    td {
      border: 1px solid red;
    }
    th {
      background-color: red !important;
      font-weight: bold !important;
    }
  }
  .click {
    cursor: pointer;
  }
  .v-row span:nth-child(1) {
    font-weight: bold;
    color: red;
  }
  .v-row span:nth-child(2) {
    color: rgba(241, 42, 42, 0.986);
    cursor: pointer;
  }
  .ico {
    border: 1px solid red;
    padding: 2px;
    margin-top: 0;
  }
  .quantity {
    border: 1px solid red;
    border-radius: 5px;
    width: 30%;
    margin: 0 auto;
    input[type="number"] {
      outline: none;
    }
  }

  @media (max-width: 794px) {
    .v-breadcrumbs {
      white-space: nowrap !important;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .v-card-title {
      font-size: 16px;
    }
    .v-table {
      width: 100% !important;
      font-size: 14px;
      margin: 0 3px 3px 3px;
    }

    .main,
    .s-main {
      height: 1150px !important;
      padding-bottom: 3px !important;
    }
    .one {
      padding-left: 25px;
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 795px) and (max-width: 999px) {
    .one {
      padding-left: 25px;
      display: flex;
      flex-direction: column;
    }
    .v-table {
      width: 85% !important;
    }
    .main,
    .s-main {
      height: 1150px !important;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    .one {
      padding-left: 12px;
    }
  }
}
</style>
