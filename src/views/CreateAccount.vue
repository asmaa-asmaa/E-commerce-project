<template>
  <div class="create-account bg-white">
    <v-card class="w-50 mx-auto mt-5 pa-5">
      <v-card-title>Create Account</v-card-title>
      <v-divider></v-divider>
      <div class="form d-flex mt-5" style="gap: 5px">
        <v-text-field
          required
          style="width: 20%"
          placeholder="First Name"
          v-model="first"
        ></v-text-field>
        <v-text-field
          required
          style="width: 20%"
          placeholder="Last Name"
          class="w-25"
          v-model="last"
        ></v-text-field>
      </div>
      <v-text-field
        required
        placeholder="Email"
        v-model="mail"
        class="w-75 mx-auto"
      ></v-text-field>
      <v-text-field
        :type="showPassword ? 'text' : 'password'"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="showPassword = !showPassword"
        color="red"
        class="w-75 mx-auto mt-6"
        label="Password"
        variant="outlined"
        v-model="createPass"
      ></v-text-field>
      <v-text-field
        :type="showPasswordt ? 'text' : 'password'"
        :append-inner-icon="showPasswordt ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="showPasswordt = !showPasswordt"
        color="red"
        class="w-75 mx-auto mt-6"
        label="confirm Password"
        variant="outlined"
        v-model="confPass"
      ></v-text-field>
      <p v-if="showEM" class="text-red w-75 mx-auto">
        Please enter a valid e-mail.
      </p>
      <p v-if="showEma" class="text-red w-75 mx-auto">
        password must has a length more than 6 character , at least one
        Uppercase letter and at least one special charachters(@ # $ % ^ * & !
        ?).
      </p>
      <p v-if="ShowCon" class="text-red w-75 mx-auto">
        confirm password dosent match password that you entered.
      </p>
      <p v-if="showFo" class="text-red w-75 mx-auto">
        Please complete the form.
      </p>
      <v-btn
        @click="goTomyaccount"
        style="margin-left: 12%"
        color="red"
        class="w-75 mt-4"
      >
        Create</v-btn
      >
      <v-card-subtitle class="text-red" v-if="warn == true"
        >You have already a registered account, go back!</v-card-subtitle
      >
      <div class="bn d-flex mt-5" style="width: 10%; margin-left: 80%">
        <v-btn @click="$router.go(-1)" color="red">back</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
const emitter = inject("emitter");
const first = ref("");
const last = ref("");
const mail = ref("");
const showEM = ref(false);
const showEma = ref(false);
const ShowCon = ref(false);
const showFo = ref(false);

const router = useRouter();
const showPassword = ref(false);
const showPasswordt = ref(false);
const createPass = ref("");
const confPass = ref("");
const warn = ref(false);

const goTomyaccount = () => {
  ShowCon.value = false;
  showEma.value = false;
  showEM.value = false;
  showFo.value = false;

  if (
    createPass.value.length > 0 &&
    confPass.value.length > 0 &&
    first.value.length > 0 &&
    last.value.length > 0 &&
    mail.value.length > 0
  ) {
    //localStorage.setItem("first", first.value);
    //localStorage.setItem("last", last.value);
    if (mail.value.match(/\w+\W?\w+@\w+.com/gi)) {
      if (
        createPass.value.match(
          /(?=.*[A-Z])(?=.*[@!#$%&*^])[A-Za-z0-9!@#$%^&*]{7,}/
        )
      ) {
        if (createPass.value === confPass.value) {
          if (!localStorage.getItem("mail")) {
            localStorage.setItem("mail", mail.value);
            localStorage.setItem("first", first.value);
            localStorage.setItem("last", last.value);
            localStorage.setItem("password", createPass.value);
            emitter.emit("changeAccounttwo");
            router.push({
              name: "myaccount",
              query: { na: first.value, la: last.value, ma: mail.value },
            });
          } else {
            warn.value = true;
          }
        } else {
          ShowCon.value = true;
        }
      } else {
        showEma.value = true;
      }
    } else {
      showEM.value = true;
    }
  } else {
    showFo.value = true;
  }
};

// onMounted(() => {
//   name.value = localStorage.getItem("first");
//   last.value = localStorage.getItem("last");
//   mail.value = localStorage.getItem("mail");
// });
</script>
<style lang="scss">
@media (max-width: 463px) {
  .create-account {
    margin-top: -56px !important;
  }
}

@media (min-width: 464px) {
  .create-account {
    margin-top: -65px !important;
  }
}
@media (max-width: 750px) {
  .create-account {
    .v-card {
      width: 90% !important;
    }
  }
}
</style>
