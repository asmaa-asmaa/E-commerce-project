<template>
  <div class="signDetails bg-white">
    <div class="card w-50">
      <img src="@/assets/news-03.png" />
      <h3 class="text-center mt-2">Welcome Back</h3>
      <p class="text-center mt-2">Log back into your Dummy account.</p>
      <input
        readonly
        style="
          height: 56px;
          border: 1px solid rgb(177, 172, 172);
          outline: none;
        "
        type="text"
        :placeholder="fromSignin"
        class="one w-75 ml-14 position-relative pl-3 bg-grey-lighten-2 mt-5"
      />
      <span
        style="cursor: pointer"
        @click="$router.go(-1)"
        class="text-red position-relative"
        >Edit</span
      >

      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="showPassword = !showPassword"
        color="red"
        class="w-75 mx-auto mt-6"
        label="Password"
        variant="outlined"
        v-model="existPass"
        :error-messages="message"
      ></v-text-field>
      <v-btn
        @click="validatePass"
        style="margin-left: 12%"
        color="red"
        class="w-75 mt-4"
      >
        Login</v-btn
      >
      <p class="text-center mt-2">
        <span style="cursor: pointer" class="text-red"
          >Forgot Your Password?</span
        >
      </p>
      <p class="text-center mt-2">
        <span
          @click="$router.push({ name: 'createAccount' })"
          style="cursor: pointer"
          class="text-red"
          >Create A new Account</span
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, inject } from "vue";
import { useRoute } from "vue-router";
const emitter = inject("emitter");
const route = useRoute();
// const router = useRouter();
const fromSignin = route.query.placeholder;
const showPassword = ref(false);
const existPass = ref("");
const message = ref("");

// const removeClass = () => {
//   setTimeout(() => {
//     document.querySelector(".select").classList.remove("v-field--focused");
//   }, 1000);
// };

// console.log(one);
const validatePass = () => {
  if (existPass.value == localStorage.getItem("password")) {
    // router.push({ name: "home" });
    emitter.emit("changeAccount");
  } else {
    message.value = "password is not correct";
  }
};
</script>
<style lang="scss">
.signDetails {
  .v-input--horizontal .v-input__append {
    margin-inline-start: -48px !important;
    z-index: 1000;
    position: relative;
  }
}

// .one .v-field--focused {

// }
</style>
<style scoped lang="scss">
.signDetails {
  display: flex;
  justify-content: center;
  img {
    height: 30px;
    width: 55px;
    border-radius: 12px;
    margin-top: 60px;
    margin-left: calc(50% - 27.5px);
  }
  .one {
    margin-left: 12.5% !important;
  }
  span {
    margin-left: -37px;
  }
  .v-btn {
    text-transform: capitalize;
  }
}
@media (max-width: 531px) {
  .signDetails {
    .card {
      width: 75% !important;
      h3 {
        font-size: 18px !important;
      }
      p {
        font-size: 15px !important;
      }
    }
    .one {
      width: 100% !important;
      margin-left: 0% !important;
    }

    .v-input {
      width: 100% !important;
    }
  }
}
@media (max-width: 464px) {
  .signDetails {
    margin-top: -42px !important;
  }
}

@media (min-width: 465px) {
  .signDetails {
    margin-top: -46px !important;
  }
}
</style>
