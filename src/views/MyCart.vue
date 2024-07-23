<template>
  <div class="cartt bg-grey-lighten-1">
    <v-row v-if="!cartItems.length">
      <v-col cols="12" class="mt-6 mb-6 d-flex justify-center text-center">
        <v-card elevation="0" class="cardO">
          <div
            class="carti bg-grey-lighten-2 d-flex justify-center align-center mx-auto mb-2"
          >
            <v-icon size="90" color="red">mdi-cart</v-icon>
          </div>
          <v-card-title class="font-weight-bold"
            >Your cart is empty!</v-card-title
          >
          <v-card-text
            >Browse our categories and discover our best deals!</v-card-text
          >
          <v-btn
            @click="
              {
                $router.push({ name: 'home' });
              }
            "
            color="red"
            class="mt-5 text-black pt-4 pb-6 h3"
            >start shopping</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-if="cartItems.length"
      class="mt-3 d-flex justify-space-between mx-auto"
    >
      <v-col cols="12" sm="12" md="9">
        <v-card class="one pa-5">
          <v-card-title>cart ({{ cartItems.length }})</v-card-title>
          <v-divider></v-divider>
          <v-divider></v-divider>
          <v-row v-for="item in cartItems" :key="item.id">
            <v-row class="mx-auto d-flex">
              <v-col
                cols="12"
                md="8"
                lg="8"
                class="firstC d-flex ml-0 pl-0 pr-md-8 pr-lg-12 mb-0"
              >
                <img
                  :src="item.thumbnail"
                  class="w-50 h-50"
                  @click="
                    $router.push({
                      name: 'productname',
                      params: {
                        category: item.category,
                        proId: item.id,
                      },
                      query: { proname: item.title },
                    })
                  "
                />
                <div class="detail mt-5">
                  <v-card-text
                    >{{ item.title }}-{{ item.description }}</v-card-text
                  >
                  <v-card-subtitle class="unit text-red mt-3 mt-md-0 mb-md-7">
                    <v-icon>mdi-alert-circle-outline</v-icon
                    >{{ item.stock }} units lefted</v-card-subtitle
                  >
                </div>
              </v-col>
              <v-col
                cols="12"
                md="4"
                lg="4"
                class="mR text-center pl-md-10 mt-5"
              >
                <v-card-text>
                  Price: USD
                  {{
                    Math.round(
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                        item.quantity
                    )
                  }}</v-card-text
                >
                <v-card-subtitle class="mb-5">
                  <del>Price: USD{{ item.price }}</del></v-card-subtitle
                >
              </v-col>
            </v-row>
            <v-row class="reBtn d-flex mx-auto">
              <v-col cols="7" sm="6" md="9" lg="10">
                <v-btn class="text-red" elevation="0"
                  ><v-icon color="red">mdi-delete</v-icon> remove</v-btn
                >
              </v-col>
              <v-col cols="5" sm="6" md="3" lg="2">
                <div class="rebtnS">
                  <v-icon class="px-4 seC" @click="decreaseAmo(item)"
                    >mdi-minus</v-icon
                  >
                  <input
                    class="text-center w-25"
                    type="number"
                    v-model="item.quantity"
                  />
                  <v-icon class="px-4 seC" @click="increaseAmo(item)"
                    >mdi-plus</v-icon
                  >
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card class="end d-flex justify-center flex-column pa-2">
          <v-card-title class="ml-1 pl-0">CART SUMMARY</v-card-title>
          <v-divider></v-divider>
          <div class="total d-flex justify-space-between mx-1">
            <span>Subtotal</span>
            <span
              >USD
              {{ total }}
            </span>
          </div>
          <v-divider></v-divider>
          <v-btn @click="summaryDetails" color="red" class="pa-3 mt-5 mb-1 mx-5"
            >checkout-<span>USD {{ total }}</span></v-btn
          >
          <v-card-text v-if="sh != ''" class="text-red"
            >please write your address</v-card-text
          >
          <v-card-text v-if="sign != ''" class="text-red"
            >please sigin first!</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { onMounted, inject, ref } from "vue";
//const quantity = ref(0);

// const ttrue = ref(localStorage.getItem("cartItems"));
import cartMixin from "@/mixins/cart.js";
import router from "@/router";
const { cartItems, getScartItems } = cartMixin();
const emitter = inject("emitter");
const increaseAmo = (item) => {
  item.quantity++;
  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  emitter.emit("cartNote");
  totalPr();
};
const decreaseAmo = (item) => {
  item.quantity--;
  localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  totalPr();
  if (item.quantity > 1) {
    emitter.emit("pUpdated");
  }
  for (let i = 0; i < cartItems.value.length; i++) {
    if (cartItems.value[i].quantity < 1) {
      cartItems.value.splice(i, 1);
      emitter.emit("itemDeleted");
      location.reload();
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
  }
};
const total = ref("");

const totalPr = () => {
  if (cartItems.value.length > 1) {
    cartItems.value.reduce((i, c) => {
      return (total.value = Math.round(
        (i.price - (i.price * i.discountPercentage) / 100) * i.quantity +
          (c.price - (c.price * c.discountPercentage) / 100) * c.quantity
      ));
    });
  } else if (cartItems.value.length == 1) {
    total.value = Math.round(
      (cartItems.value[0].price -
        (cartItems.value[0].price * cartItems.value[0].discountPercentage) /
          100) *
        cartItems.value[0].quantity
    );
  }
};
const ado = localStorage.getItem("ado");
const sh = ref(false);
const sign = ref(false);

const summaryDetails = () => {
  if (localStorage.getItem("passwordT")) {
    if (ado != "") {
      router.push({ name: "summary" });
    } else {
      sh.value = "true";
    }
  } else {
    sign.value = "true";
  }
};

onMounted(() => {
  getScartItems();
  totalPr();
});
</script>
<style scoped lang="scss">
.cartt {
  height: 600px;
  margin-top: -12px;
  margin-right: -1px !important;
  .carti {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .cardO {
    width: 95%;
    height: 540px;
    margin-bottom: 25px;
    padding: 100px 0;
    // margin-left: 7px;
    margin-top: -18px;
  }
  .seC {
    border: 1px solid red;
    background-color: red;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.555);
  }
  input {
    outline: none;
    color: red;
    font-weight: bold;
  }
  .reBtn {
    margin-top: -70px;
    // margin-right: 6px;
    // padding-right: 2px;
  }
  .mR {
    padding-left: 200px;
  }
}
//@media (min-width: 701px) and (max-width: 959px) {

@media (min-width: 701px) and (max-width: 959px) {
  .cartt {
    margin-top: -60px !important;
  }
  .one {
    padding: 50px !important;
  }
  .firstC {
    // flex-direction: column;
    margin: 5px auto;
    .detail {
      margin-top: 30px !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      // text-align: center;
      .unit {
        margin: 0 auto 148px !important;
      }
    }
  }
  .cardO {
    margin-top: 8px !important;
  }
  .mR {
    margin-top: -180px !important;
    // padding-left: 200px !important;
    margin-bottom: 5px !important;
    text-align: center !important;
    // display: flex;
  }
  .reBtn {
    margin-top: -48px;
    text-align: end;
    margin-right: 40px !important;
  }
  .end {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .v-btn {
      width: 50% !important;
      margin: 15px auto 9px !important;
    }
  }
}
@media (max-width: 700px) {
  .cartt {
    margin-top: -47px !important;
  }
  .firstC {
    flex-direction: column;
    margin: 5px auto;
    img {
      margin: auto !important;
    }
    .detail {
      margin-top: 2px !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .unit {
        margin-top: 5px !important;
      }
    }
  }
  .mR {
    margin-top: 3px !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
  }
  .reBtn {
    margin-top: -10px !important;
    .rebtnS {
      display: flex;
      justify-content: end;
    }
  }
  .end {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .cardO {
    margin-top: 10px !important;
  }
}
</style>
