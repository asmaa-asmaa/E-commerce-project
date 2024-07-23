z
<template>
  <div class="nav">
    <v-container fluid style="margin-top: 50px; padding: 0">
      <v-row>
        <!-- <v-app-bar
          app
          class="third-bar"
          :style="`margin-top: ${mrgTop}px; padding: 0`"
        > -->
        <v-container class="third">
          <v-app-bar
            app
            class="third-bar"
            :style="`margin-top: ${mrgTop}px; padding: 0`"
          >
            <v-row class="third-row">
              <v-col class="lef-col" cols="12" md="4">
                <div class="left d-flex" style="gap: 8px">
                  <img src="@/assets/news-03.png" />

                  <v-app-bar-nav-icon @click="fireEmit"></v-app-bar-nav-icon>
                </div>
              </v-col>
              <v-col cols="12" md="8" class="btns d-flex justify-end">
                <button
                  v-if="alreadySigned == false"
                  id="btn"
                  @click="changeBg"
                  @blur="changeSb"
                  :style="`background-color: ${bg}; color: ${clr};font-size: 17px; border-radius: 5px; transition: .5s ease in out`"
                  class="account d-flex justiy-center align-center pa-3"
                >
                  <v-icon>mdi-account-outline</v-icon>
                  <span>Account</span>
                  <v-icon v-if="open == false">mdi-chevron-down</v-icon>
                  <v-icon v-if="open == true">mdi-chevron-up</v-icon>
                </button>
                <button
                  v-if="alreadySigned == true"
                  id="signed"
                  @click="changeBg"
                  @blur="changeSb"
                  :style="`background-color: ${bg}; color: ${clr};font-size: 17px; border-radius: 5px; transition: .5s ease in out`"
                  class="account d-flex justiy-center align-center pa-3"
                >
                  <v-icon>mdi-account-outline</v-icon>
                  <span>Hello, {{ first }}</span>
                  <v-icon v-if="open == false">mdi-chevron-down</v-icon>
                  <v-icon v-if="open == true">mdi-chevron-up</v-icon>
                </button>

                <button
                  id="sbtn"
                  @click="schangeBg"
                  @blur="schangeSb"
                  :style="`background-color: ${sBg}; color: ${clr};font-size: 17px; border-radius: 5px; transition: .5s ease in out`"
                  class="help d-flex justiy-center align-center pa-3"
                >
                  <v-icon size="23">mdi-help-circle-outline</v-icon>
                  <span class="ml-1">Help</span>
                  <v-icon v-if="sOpen == false">mdi-chevron-down</v-icon>
                  <v-icon v-if="sOpen == true">mdi-chevron-up</v-icon>
                </button>
                <button
                  class="cart d-flex align-center"
                  @click="
                    {
                      $router.push({ name: 'cart' });
                    }
                  "
                >
                  <v-badge
                    v-if="cartItems.length"
                    :content="cartItems.length"
                    color="red"
                    offset-x="2"
                    offset-y="-4"
                    bordered
                    max="9"
                    ><v-icon>mdi-cart-outline</v-icon></v-badge
                  >
                  <!-- <v-icon>mdi-cart-outline</v-icon> -->

                  <span>Cart</span>
                </button>
              </v-col>
            </v-row>
          </v-app-bar>
        </v-container>
      </v-row>
      <v-row style="margin: -17px">
        <v-col col="12">
          <v-menu
            activator="#btn"
            offset="10"
            innerWidth="150"
            v-if="alreadySigned == false"
          >
            <v-list class="ma-0">
              <v-list-item
                @click="addpassT"
                :to="{ name: 'sign' }"
                innerWidth="80%"
                class="sign mx-auto justify-center mb-3"
              >
                <v-list-item-title style="font-size: 14px"
                  >SIGN IN</v-list-item-title
                >
              </v-list-item>
              <v-divider></v-divider>
              <v-divider></v-divider>

              <v-list-item :to="{ name: 'myaccount' }" class="account mt-3">
                <v-list-item-title>My Account</v-list-item-title>
                <template v-slot:prepend>
                  <v-icon class="iaccount">mdi-account-outline</v-icon>
                </template>
              </v-list-item>
              <v-list-item :to="{ name: 'cart' }" class="order">
                <v-list-item-title>Orders</v-list-item-title>
                <template v-slot:prepend>
                  <v-icon class="wallet">mdi-wallet-outline</v-icon>
                </template>
              </v-list-item>
              <!-- <v-list-item :to="{ name: 'saveditems' }" class="saved">
                <v-list-item-title>Saved Items</v-list-item-title>
                <template v-slot:prepend>
                  <v-icon class="sav">mdi-heart-outline</v-icon>
                </template>
              </v-list-item> -->
            </v-list>
          </v-menu>
        </v-col>
        <v-menu
          activator="#signed"
          offset="10"
          innerWidth="150"
          v-if="alreadySigned == true"
        >
          <v-list class="ma-0">
            <v-list-item :to="{ name: 'myaccount' }" class="account mt-3">
              <v-list-item-title>My Account</v-list-item-title>
              <template v-slot:prepend>
                <v-icon class="iaccount">mdi-account-outline</v-icon>
              </template>
            </v-list-item>
            <v-list-item :to="{ name: 'editAccount' }" class="order">
              <v-list-item-title>Edit Account</v-list-item-title>
              <template v-slot:prepend>
                <v-icon class="wallet">mdi-pen</v-icon>
              </template>
            </v-list-item>
            <v-list-item :to="{ name: 'summary' }" class="saved">
              <v-list-item-title>Orders</v-list-item-title>
              <template v-slot:prepend>
                <v-icon class="sav">mdi-heart-outline</v-icon>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-btn @click="goOut" class="sign spe mb-1 mt-3"> logout </v-btn>
          </v-list>
        </v-menu>
        <v-col cols="12">
          <v-menu activator="#sbtn" offset="30" innerWidth="150">
            <v-list>
              <v-list-item
                active-color="red"
                class="helpl text-start"
                v-for="route in router"
                :key="route.name"
                :value="route.path"
                :to="{ name: route.name }"
              >
                <v-list-item-title style="font-size: 14px">{{
                  route.meta.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const bg = ref("");
const clr = ref("");
const open = ref(false);
const sOpen = ref(false);
const sBg = ref("");
//const showBar = window.scrollY;

const emitter = inject("emitter");
const fireEmit = () => {
  emitter.emit("openMenu");
};
const changeBg = () => {
  bg.value = "red";
  clr.value = "black";
  open.value = !open.value;
};
const changeSb = () => {
  bg.value = "";
  clr.value = "black";
  open.value = false;
};
const schangeBg = () => {
  sBg.value = "red";
  clr.value = "black";
  sOpen.value = !sOpen.value;
};
const schangeSb = () => {
  sBg.value = "";
  clr.value = "black";
  sOpen.value = false;
};
const router = useRouter().options.routes.splice(0, 4);
const rrouter = useRouter();
//const content = ref(0);
//const showBadge = ref(false);
console.log(window.innerHeight);
console.log(window);
import cartMixin from "@/mixins/cart.js";
const { getScartItems, cartItems } = cartMixin();
const mrgTop = ref();
//const mrgMs= ref(120);
//const wiScr = window.scrollY;
const windScroll = () => {
  if (window.innerWidth >= 969) {
    mrgTop.value = window.scrollY >= 100 ? 0 : 100 - window.scrollY;
  }
  if (window.innerWidth >= 960 && window.innerWidth <= 968) {
    mrgTop.value = window.scrollY >= 120 ? 0 : 120 - window.scrollY;
  }
  if (window.innerWidth > 599 && window.innerWidth <= 959) {
    mrgTop.value = window.scrollY >= 140 ? 0 : 140 - window.scrollY;
  }
  if (window.innerWidth > 0 && window.innerWidth <= 599) {
    mrgTop.value = window.scrollY >= 152 ? 0 : 152 - window.scrollY;
  }
};
const alreadySigned = ref(false);
const first = localStorage.getItem("first");
const passwordT = localStorage.getItem("passwordT");

onMounted(() => {
  getScartItems();

  emitter.on("cartEmit", () => {
    cartItems.value.length++;
  });
  window.addEventListener("scroll", windScroll);
  emitter.on("changeAccount", () => {
    rrouter.push({ name: "home" });
    localStorage.setItem("passwordT", "2");
    alreadySigned.value = true;
    open.value = false;
    //cartItems.value.length = localStorage.getItem("cartItems").length;
  });
  emitter.on("changeAccounttwo", () => {
    localStorage.setItem("passwordT", "2");

    alreadySigned.value = true;
    open.value = false;
  });

  window.addEventListener("load", () => {
    if (passwordT) {
      alreadySigned.value = true;
    } else if (!passwordT) {
      alreadySigned.value = false;
    }
  });
});
console.log(passwordT);
const goOut = () => {
  localStorage.removeItem("passwordT");
  //cartItems.value.length = "";

  alreadySigned.value = false;
  rrouter.push({ name: "home" });

  // window.location.reload();
};

// onUnmounted(() => {
//   window.removeEventListener("scroll", windScroll);
// });
const addpassT = () => {
  localStorage.setItem("passwordT", "");
};
</script>
<style lang="scss">
.v-badge__badge {
  width: 20px;
  height: 20px;
}
@media (min-width: 969px) {
  .nav {
    .third-bar {
      margin-top: 100px;
    }
  }
}

@media (min-width: 960px) and (max-width: 968px) {
  .nav {
    .third-bar {
      margin-top: 120px;
    }
  }
}
@media (max-width: 465px) {
  .v-row {
    margin-top: -14px;
    margin-left: -10px;
  }
  .v-toolbar__content {
    height: 81px !important;
  }
  .left {
    margin-top: 11px;
    margin-bottom: -32px;
    justify-content: space-between !important;
  }
  img {
    margin-left: 12px;
  }

  #btn {
    font-size: 14px !important;
    padding: 1px 2px !important;
  }
  #signed {
    font-size: 14px !important;
    padding: 1px 2px !important;
  }
  .help {
    font-size: 14px !important;
    padding: 1px 2px !important;
  }
  .cart {
    font-size: 14px !important;
    margin-right: 50px;
  }
}
@media (max-width: 599px) {
  .nav {
    .third-bar {
      margin-top: 152px;
    }
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  .nav {
    .third-bar {
      margin-top: 140px;
    }
  }
}
</style>

<style scoped lang="scss">
.left {
  img {
    height: 30px;
    width: 55px;
    border-radius: 12px;
    margin-top: 8px;
    margin-left: 3px;
  }
}
.account,
.help,
.cart {
  cursor: pointer;
  gap: 2px;
  transition: 0.5s ease-in-out;

  &:hover {
    color: rgb(248, 53, 53);
  }
}
.cart {
  margin-right: 5px !important;
}
.red {
  background-color: rgb(248, 53, 53);
}
.sign {
  background-color: rgb(248, 53, 53);
}
.spe {
  margin-left: 15% !important;
}
.wallet,
.iaccount,
.sav {
  margin-right: 0 !important;
  padding-right: 10px !important;
  font-size: 18px;
}
.order,
.account,
.saved {
  padding-left: 10px !important;
  justify-content: start !important;
  font-size: 14px;
}
.v-list-item-title:hover {
  font-weight: bolder !important;
}

@media (min-width: 465px) and (max-width: 599px) {
  .left {
    height: 25px !important;
    padding: 10px 0 4px 0;
    display: flex;
    justify-content: space-between !important;
    margin-top: 20px;
    img {
      margin-top: 15px;
      margin-left: 4px;
    }
  }
  #btn {
    padding: 0;
  }
  .btns {
    padding-bottom: 24px;
    margin-bottom: 12px;
    justify-content: center !important;
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  .left {
    height: 10px !important;
    margin-top: 46px;
    margin-bottom: -30px;

    img {
      margin-top: -15px;
      margin-left: 4px;
    }
    .v-app-bar-nav-icon {
      margin-top: -20px;
    }
  }
  .btns {
    padding-bottom: 24px;
    margin-bottom: 19px;
    margin-top: -31px;
  }
  .cart {
    margin-right: 4px;
  }
}
</style>
