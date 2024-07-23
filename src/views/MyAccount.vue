<template>
  <div class="account-in bg-white pa-5">
    <h1 v-if="!signedIn" class="text-red">
      You don't have an account, please signin first!
    </h1>
    <div class="logedin bg-white" v-if="signedIn">
      <h2 class="text-red">Account Overview</h2>
      <v-divider class="mb-5"></v-divider>
      <v-row>
        <v-col cols="6">
          <v-card class="h-75">
            <v-card-title class="text-blue-darken-4"
              >Account Details</v-card-title
            >
            <v-divider></v-divider>
            <div class="prode d-flex mt-1">
              <img
                :src="profile"
                width="50px"
                height="50px"
                style="border-radius: 50%"
              />
              <v-card-text>{{ first }} {{ last }}</v-card-text>
            </div>

            <v-card-text class="text-blue-darken-2">{{ mail }}</v-card-text>
          </v-card>
          <v-card class="mt-5">
            <v-card-title class="pa-5 text-blue-darken-4"
              >Dummy Store Credit</v-card-title
            >
            <v-divider></v-divider>
            <div class="credit d-flex pa-5">
              <v-icon color="blue">mdi-wallet</v-icon>
              <p class="text-blue pl-2">Dummy store credit balance: EGP 0.00</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="h-75">
            <div class="title d-flex justify-space-between align-center pr-3">
              <v-card-title class="text-blue-darken-4"
                >Address Book</v-card-title
              >
              <v-icon @click="$router.push({ name: 'editAccount' })" color="red"
                >mdi-pen</v-icon
              >
            </div>
            <v-divider></v-divider>
            <v-card-text>your default shipping address:</v-card-text>
            <v-card-text class="text-blue-darken-2">
              {{ first }}
              {{ last }}</v-card-text
            >
            <v-card-text
              v-if="pro != '' && mno != ''"
              class="text-blue-darken-2"
            >
              {{ pro }}{{ mno }}</v-card-text
            >
            <!-- <v-card-text class="text-blue-darken-2"
            >{{ prt }}{{ mnt }}
          </v-card-text> -->
            <v-card-text class="text-blue-darken-2" v-if="ad0 != ''">
              {{ ado }}</v-card-text
            >
            <!-- <v-card-text class="text-blue-darken-2"> {{ adt }}</v-card-text> -->

            <v-card-text
              class="text-blue-darken-2"
              v-if="gov != '' || city != ''"
            >
              {{ gov }} - {{ city }}</v-card-text
            >
          </v-card>
          <v-card class="mt-5 mb-5">
            <div class="title d-flex justify-space-between align-center pr-3">
              <v-card-title class="text-blue-darken-4"
                >Newsletter Preferences</v-card-title
              >
              <v-icon
                color="red"
                style="cursor: pointer"
                @click="$router.push({ name: 'newsletter' })"
                >mdi-pen</v-icon
              >
            </div>
            <v-divider></v-divider>
            <v-card-text
              >you are currently subscribed to following
              newsletters:</v-card-text
            >
            <p v-if="selectedOpt" class="text-blue-darken-2">
              <v-icon color="blue-darken-2">mdi-check</v-icon>
              {{ selectedOpt }}
            </p>
            <p v-if="!selectedOpt" class="text-blue-darken-2 mb-5">
              <v-icon color="blue-darken-2">mdi-check</v-icon>
              no subscriptions untill now
            </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
// const emitter = inject("emitter");
// import { useRoute } from "vue-router";

// const route = useRoute();
const first = localStorage.getItem("first");
const last = localStorage.getItem("last");
const mail = localStorage.getItem("mail");
// const fn = localStorage.getItem("fn");
// const ln = localStorage.getItem("ln");
const pro = localStorage.getItem("pro");
const mno = localStorage.getItem("mno");
// const prt = localStorage.getItem("prt");
// const mnt = localStorage.getItem("mnt");
const ado = localStorage.getItem("ado");
// const adt = localStorage.getItem("adt");
const gov = localStorage.getItem("gov");
const city = localStorage.getItem("city");
const selectedOpt = localStorage.getItem("newst");
const signedIn = localStorage.getItem("passwordT");
const profile = localStorage.getItem("profile");

// const loading = ref(false);
// const reload = () => {
//   if (loading.value == false) {
//     window.location.reload();
//     loading.value = true;
//   }
// };
// reload();

onMounted(() => {
  localStorage.getItem("profile");
});
</script>
<style scoped lang="scss">
.account-in {
  margin-top: -44px;
}
@media (max-width: 464px) {
  .account-in {
    margin-top: -30px !important;
  }
}

@media (min-width: 465px) and (max-width: 664px) {
  .account-in {
    margin-top: -44px !important;
  }
}

@media (max-width: 665px) {
  .logedin {
    text-align: center !important;
    h2 {
      font-size: 18px !important;
      // justify-content: center !important;
    }
    .v-col-6 {
      flex: 0 0 100% !important;
      max-width: 100% !important;
      // justify-content: center !important;

      .v-card-title {
        font-size: 16px !important;
        // justify-content: center !important;
      }
    }
  }
}
</style>
