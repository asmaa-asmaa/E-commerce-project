<template>
  <div class="helpp bg-yellow-lighten-4 px-10 pt-16 pb-16">
    <v-card class="w-100 p-relative">
      <v-card-text class="text-black-lighten-2">Help Center</v-card-text>
      <v-card-title class="text-black-lighten-4"
        >Hello, How can we help you?</v-card-title
      >
      <v-textarea
        no-resize
        v-model="text"
        variant="outlined"
        class="mx-5"
        label="Please write your question"
      ></v-textarea>
      <v-file-input
        variant="outlined"
        v-model:model-value="photos"
        @update:model-value="renderPhotos"
        multiple
        chips
        class="mx-5"
        label="Attach photo"
      ></v-file-input>
      <v-file-input
        variant="outlined"
        v-model:model-value="files"
        @update:model-value="renderFiles"
        multiple
        chips
        class="mx-5"
        label="Attach file"
      ></v-file-input>
      <div class="result d-flex">
        <div class="imge">
          <img v-if="imgUrl" style="width: 20px; height: 20px" :src="imgUrl" />
        </div>
        <div class="fil">
          <!-- <v-card-text>{{ words }}</v-card-text> -->
          <embed
            :src="words"
            type="application/pdf"
            width="50px"
            height="50px"
          />
        </div>
      </div>
      <v-btn class="mb-2" color="red" @click="submitMessage">submit</v-btn>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
// const file = ref("");
const text = ref("");

const photos = ref([]);
const files = ref([]);

console.log(photos.value);

const imgUrl = ref("");
const words = ref("");

// const addTolo = () => {
//   localStorage.setItem("fileinput", files.value);
// };
const renderPhotos = () => {
  if (!photos.value[0]) {
    imgUrl.value = "";
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(photos.value[0]);
    reader.addEventListener("load", () => {
      imgUrl.value = reader.result;
    });
  }
};
const renderFiles = () => {
  if (!files.value[0]) {
    words.value = "";
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(files.value[0]);
    reader.addEventListener("load", () => {
      words.value = reader.result;
    });
  }
};
const submitMessage = () => {
  localStorage.setItem("textarea", text.value);
  localStorage.setItem("inputphoto", imgUrl.value);
  localStorage.setItem("inputfile", words.value);
};
</script>
<style scoped lang="scss">
.helpp {
  height: 100vh;
  position: relative;
  .v-btn {
    top: 90%;
    position: absolute;
    right: 7%;
  }
}
</style>
<style lang="scss">
.helpp {
  margin-top: -44px;

  .v-chip {
    // background-color: red !important;
  }
  .v-input {
    color: red !important;
  }
}

@media (max-width: 464px) {
  .helpp {
    margin-top: -30px !important;
  }
  .v-card-title {
    font-size: 15px !important;
  }
  .v-label {
    font-size: 13px !important;
  }
  .v-btn {
    margin: 1px auto;
  }
}

@media (min-width: 465px) and (max-width: 664px) {
  .helpp {
    margin-top: -44px !important;
  }
}
</style>
