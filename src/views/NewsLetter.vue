<template>
  <div class="news-letter bg-grey-lighten-3 pt-10">
    <!-- <div class="spaceup mb-5"></div> -->
    <v-card class="mt-10 pb-5 ml-5 mr-5 mb-5">
      <v-card-title class="text-red">Newsletter Preferences</v-card-title>
      <v-divider></v-divider>
      <v-card class="mt-5 ma-4" variant="outlined">
        <v-card-text class="text-red">Prefered Language</v-card-text>
        <v-divider style="opacity: 1"></v-divider>
        <v-radio-group class="one" v-model="selectedLang">
          <v-radio label="English" value="English"></v-radio>
          <v-radio label="Arabic" value="Arabic"></v-radio>
        </v-radio-group>
      </v-card>
      <v-card class="mt-5 ma-4" variant="outlined">
        <v-card-text class="text-red">Subscribe to</v-card-text>
        <v-divider style="opacity: 1"></v-divider>
        <v-radio-group class="two" v-model="selectedOpt">
          <v-radio
            label="daily newsletters for her"
            value="daily newsletters for her"
          ></v-radio>
          <v-radio
            label="daily newsletters for him"
            value="daily newsletters for him"
          ></v-radio>
          <v-radio
            label="i don't want to receive daily newsletters"
            value="i don't want to receive daily newsletters"
          ></v-radio>
        </v-radio-group>
      </v-card>
      <v-checkbox
        class="targeted"
        @click="message = ''"
        value="agree"
        v-model="check"
        :error-messages="message"
        label="i agree Dummy's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time. "
      ></v-checkbox>
      <v-btn @click="validate" color="red" rounded="lg" class="save w-75"
        >save</v-btn
      >
    </v-card>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const message = ref("");
const check = ref(false);
const selectedOpt = ref("");
const selectedLang = ref("");

const validate = () => {
  if (check.value == false) {
    message.value = "Please agree with our policy";
  } else {
    localStorage.setItem("newso", selectedLang.value);

    localStorage.setItem("newst", selectedOpt.value);

    router.push({ name: "myaccount" });
  }
};
onMounted(() => {
  selectedLang.value = localStorage.getItem("newso");
  selectedOpt.value = localStorage.getItem("newst");
});
</script>

<style scoped lang="scss">
.news-letter {
  margin-top: -51px !important;
  height: 1000px;
  .save {
    margin-left: 12.5% !important;
  }
}
</style>
<style lang="scss">
.news-letter {
  .targeted {
    .v-label {
      opacity: 1 !important;
    }
  }
  // .v-icon {
  //   color: red !important;
  // }
  .mdi-radiobox-marked,
  .mdi-checkbox-marked {
    color: red !important;
  }
}
@media (max-width: 375px) {
  .news-letter {
    .v-card-title {
      font-size: 18px !important;
    }
    .v-card-text {
      font-size: 16px !important;
    }
    .v-label {
      font-size: 14px !important;
    }
  }
}
</style>
