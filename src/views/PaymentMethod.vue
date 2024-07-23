<template>
  <div class="payment-method bg-grey-lighten-3">
    <v-card class="" style="height: 100vh" variant="tonal">
      <v-card-title
        ><v-icon color="green">mdi-check-circle</v-icon>Payment
        Method</v-card-title
      >
      <divider></divider>
      <v-list class="ml-3">
        <v-list-item>
          <v-list-item-title>Payment on Delivery</v-list-item-title>
          <v-radio-group v-model="select">
            <v-radio
              @click="changeSho"
              label="Pay on delivery(cash on delivery)"
              value="Cash on delivery"
            ></v-radio>
          </v-radio-group>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Pre-Pay Now</v-list-item-title>
          <v-radio-group v-model="select">
            <v-radio
              @click="changeSho"
              label="Pay by Card"
              value="Pay by Card"
            ></v-radio>
          </v-radio-group>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Installment</v-list-item-title>
          <v-radio-group v-model="select">
            <v-radio
              @click="changeSho"
              label="Instalments with valU(for valU customers only)"
              value="Installments with value"
            ></v-radio>
          </v-radio-group>
        </v-list-item>
      </v-list>
      <div class="btn d-flex justify-end mr-3 mt-5">
        <v-btn @click="goSummary">next</v-btn>
      </div>

      <v-card-subtitle v-if="sho == true">
        Please choose payment method!</v-card-subtitle
      >
    </v-card>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const select = ref("");
const sho = ref(false);

console.log(select.value);
const goSummary = () => {
  if (select.value != "") {
    localStorage.setItem("paymethod", select.value);
    router.push({ name: "summary" });
  } else {
    sho.value = true;
  }
};
const changeSho = () => {
  sho.value = false;
};
onMounted(() => {
  localStorage.getItem("paymethod");
});
</script>
<style lang="scss">
.payment-method {
  .v-card-title,
  .v-list-item-title,
  .mdi-radiobox-marked,
  .v-btn,
  .v-card-subtitle {
    color: red !important;
  }
  .v-btn {
    box-shadow: 0px 4px 5px 2px;
  }
  .v-label {
    opacity: 100% !important;
  }
}

@media (min-width: 464px) and (max-width: 962px) {
  .payment-method {
    margin-top: -60px !important;
  }
}

@media (min-width: 464px) {
  .payment-method {
    margin-top: -46px !important;
  }
}
@media (min-width: 964px) {
  .payment-method {
    margin-top: -30px !important;
  }
}
</style>
