<template>
  <div class="sign-in bg-white">
    <div class="card w-50">
      <img src="@/assets/news-03.png" />
      <h3 class="text-center mt-2">Welcome to Dummy Site</h3>
      <p class="text-center mt-2">
        Type your e-mail or phone number to log in or create an account.
      </p>
      <v-text-field
        :rules="validRules"
        id="pasorph"
        @input="notValid = false"
        color="red"
        class="w-75 mx-auto mt-6"
        label="Enter your e-mail or mobile phone"
        v-model="passOrPhone"
        variant="outlined"
      ></v-text-field>

      <v-btn
        @click="goTosigndetails"
        style="margin-left: 12%"
        color="red"
        class="w-75 mt-4"
      >
        Continue</v-btn
      >
      <p class="text-center mt-2">
        <span class="text-blue">By continuing</span> you agree to dummy's
      </p>
      <p
        @click="dialog = true"
        class="text-red text-center"
        style="text-decoration: underline; cursor: pointer"
      >
        Terms and Conditions
      </p>
      <v-dialog width="400" v-model="dialog" persistent>
        <v-card class="pa-2">
          <p class="d-flex justify-space-between pr-2">
            <v-card-title class="text-red">Terms & Conditions</v-card-title>
            <v-icon @click="dialog = false" color="red" class="pt-4"
              >mdi-close</v-icon
            >
          </p>
          <v-card-text>
            Dummy Site is the trading name for the Dummy group companies . Each
            Dummy group company operates an e-commerce platform consisting of a
            website and mobile application (“marketplace”), together with
            supporting IT, logistics and payment infrastructure, for the sale
            and purchase of consumer products and services (“products”) in its
            allocated territory as defined at Appendix 1 (“territory”). These
            general terms and conditions shall apply to buyers and sellers on
            the marketplace and shall govern your use of the marketplace and
            related services. By using our marketplace, you accept these general
            terms and conditions in full. If you disagree with these general
            terms and conditions or any part of these general terms and
            conditions, you must not use our marketplace.
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-btn
        @click="goToF"
        style="margin-left: 12%"
        color="blue"
        class="w-75 mt-4 d-flex justify-space-around"
      >
        <span class="mr-5"
          ><v-icon icon="facebook-square">mdi-facebook</v-icon></span
        >
        <span>Log In With Facebook</span></v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const dialog = ref(false);
const valid = ref(false);
const notValid = ref(false);
const goToF = () => {
  window.open("https://www.facebook.com", "_blank");
};
const passOrPhone = ref("");
const goTosigndetails = () => {
  rulesMeasure();
  localStorage.removeItem("passwordT");

  if (valid.value == true) {
    localStorage.setItem("passOrphone", passOrPhone.value);
    router.push({
      name: "signDetails",
      query: { placeholder: passOrPhone.value },
    });
  }
};
const rulesMeasure = () => {
  if (passOrPhone.value.match(/\w+\W?\w+@\w+.com/gi)) {
    valid.value = true;
  } else if (passOrPhone.value.match(/\d{11}/)) {
    valid.value = true;
  } else {
    valid.value = false;
    passOrPhone.value = "";
  }
};
const validRules = [
  (v) => !!v || "password or phone required",
  (v) =>
    /\d{11}/.test(v) ||
    /\w+\W?\w+@\w+.com/gi.test(v) ||
    "please write a valid phone number or email",
];
</script>
<style lang="scss"></style>
<style scoped lang="scss">
.sign-in {
  display: flex;
  justify-content: center;
  img {
    height: 30px;
    width: 55px;
    border-radius: 12px;
    // position: relative;
    margin-top: 60px;
    margin-left: calc(50% - 27.5px);
  }

  .v-btn {
    text-transform: capitalize;
  }
}
@media (max-width: 460px) {
  .sign-in {
    .card {
      width: 75% !important;
      h3 {
        font-size: 15px !important;
      }
      p {
        font-size: 13px !important;
      }
    }
    .v-input {
      width: 100% !important;
      .v-label {
        font-size: 13px !important;
      }
    }
    .v-btn {
      font-size: 12px !important;
      span:first-child {
        margin-right: 3px !important;
      }
    }
  }
}
@media (min-width: 461px) and (max-width: 600px) {
  .sign-in {
    .card {
      width: 100% !important;
      h3 {
        font-size: 18px !important;
      }
      p {
        font-size: 15px !important;
      }
    }
    .v-input {
      width: 75% !important;
      .v-label {
        font-size: 14px !important;
      }
    }
    .v-btn {
      width: 50% !important;
      font-size: 14px !important;
      margin-left: 25% !important;
      span:first-child {
        margin-right: 4px !important;
      }
    }
  }
}
@media (min-width: 601px) and (max-width: 756px) {
  .sign-in {
    .card {
      width: 75% !important;
      .v-btn {
        width: 50% !important;
        font-size: 14px !important;
        margin-left: 25% !important;
        span:first-child {
          margin-right: 4px !important;
        }
      }
    }
  }
}
@media (max-width: 464px) {
  .sign-in {
    margin-top: -42px !important;
  }
}

@media (min-width: 465px) {
  .sign-in {
    margin-top: -46px !important;
  }
}
</style>
