<template>
  <div class="editAccount">
    <v-card class="pa-10">
      <v-card-title
        class="text-red"
        style="cursor: pointer"
        @click="$router.push({ name: 'myaccount' })"
        ><v-icon color="red" class="pr-2">mdi-arrow-left</v-icon>Edit
        Address</v-card-title
      >
      <v-row>
        <v-col cols="12">
          <v-file-input
            color="red"
            variant="outlined"
            v-model:model-value="profile"
            @update:model-value="renderProfile"
            chips
            class="mx-5"
            label="Attach profile photo"
          ></v-file-input>
        </v-col>
      </v-row>
      <row class="name d-flex">
        <v-col cols="6">
          <v-text-field
            readonly
            type="text"
            label="First Name"
            v-model="first"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            readonly
            type="text"
            label="Last Name"
            v-model="last"
          ></v-text-field>
        </v-col>
      </row>
      <v-row class="name d-flex">
        <v-col cols="6" class="pref d-flex">
          <v-col cols="3"
            ><v-text-field
              variant="plain"
              type="text"
              label="prefix"
              v-model="pro"
              @focus="appearo = true"
            >
              <v-icon v-if="appearo" size="sm" class="mt-1"
                >mdi-plus</v-icon
              ></v-text-field
            ></v-col
          >
          <v-col cols="9">
            <v-text-field
              type="number"
              label="Phone Number"
              v-model="mno"
            ></v-text-field
          ></v-col>
        </v-col>
        <v-col cols="6" class="pref d-flex">
          <v-col cols="3" class="cellfv"
            ><v-text-field
              @focus="appear = true"
              variant="plain"
              type="text"
              label="prefix"
              v-model="prt"
              ><v-icon v-if="appear" size="sm" class="mt-1"
                >mdi-plus</v-icon
              ></v-text-field
            >
          </v-col>
          <v-col cols="9" class="cells"
            ><v-text-field
              class="nt"
              v-model="mnt"
              type="number"
              label="Enter your Additional Phone Number"
            ></v-text-field
          ></v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="ado"
            class="add w-75 mx-auto"
            type="text"
            label="Address"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="adt"
            class="add w-75 mx-auto"
            type="text"
            label="Additional Information"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- <v-text-field type="text" label="City"> -->
          <v-select
            id="region"
            label="Region"
            :items="items"
            v-model="selectedGov"
          >
          </v-select>
          <!-- </v-text-field> -->
        </v-col>
        <v-col cols="6">
          <v-select
            id="city"
            label="City"
            :items="selectedCity"
            v-model="cityExist"
          >
          </v-select>
        </v-col>
      </v-row>
      <div class="btn d-flex justify-end mr-3">
        <v-btn @click="addToLocal" class="save" color="red" rounded="lg"
          >save</v-btn
        >
      </div>
    </v-card>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const items = ref(["Cairo", "Giza", "Alexandria", "Port Saied", "Upper Egypt"]);
const selectedGov = ref("");
const selectedCity = ref(null);
const cityExist = ref(null);
const appearo = ref(false);

const appear = ref(false);

const array = ref([
  ["Helipolis", "mokkatam"],
  ["Elmohandseen", "6th of October"],
  ["SidiBashr", "miami"],
  ["Port Saied"],
  ["Luxor", "Aswan"],
]);
watch(
  () => selectedGov.value,
  (newVal) => {
    cityExist.value = "";
    for (let i = 0; i < items.value.length; i++) {
      if (newVal == items.value[i]) {
        selectedCity.value = array.value[i];
      }
    }
  },
  { deep: true }
);
const first = ref("");
const last = ref("");
const pro = ref("");
const mno = ref("");
const prt = ref("");
const mnt = ref("");
const ado = ref("");
const adt = ref("");
// const saved = ref(false);
const addToLocal = () => {
  // localStorage.setItem("fn", fn.value == "null" ? "" : fn.value);
  // localStorage.setItem("ln", ln.value == "null" ? "" : ln.value);
  localStorage.setItem("pro", pro.value == "null" ? "" : pro.value);
  localStorage.setItem("mno", mno.value == "null" ? "" : mno.value);
  localStorage.setItem("prt", prt.value == "null" ? "" : prt.value);
  localStorage.setItem("mnt", mnt.value == "null" ? "" : mnt.value);
  localStorage.setItem("ado", ado.value == "null" ? "" : ado.value);
  localStorage.setItem("adt", adt.value == "null" ? "" : adt.value);
  localStorage.setItem(
    "gov",
    selectedGov.value == "null" ? "" : selectedGov.value
  );
  localStorage.setItem("city", cityExist.value);
  localStorage.setItem("profile", profileUrl.value);

  router.go(-1);
};
onMounted(() => {
  if (localStorage) {
    first.value = localStorage.getItem("first");
    last.value = localStorage.getItem("last");
    pro.value = localStorage.getItem("pro");
    mno.value = localStorage.getItem("mno");
    prt.value = localStorage.getItem("prt");
    mnt.value = localStorage.getItem("mnt");
    ado.value = localStorage.getItem("ado");
    adt.value = localStorage.getItem("adt");
    selectedGov.value = localStorage.getItem("gov");
    cityExist.value = localStorage.getItem("city");
  }
});
const profile = ref("");
const profileUrl = ref("");
const renderProfile = () => {
  const reader = new FileReader();
  reader.readAsDataURL(profile.value[0]);
  reader.addEventListener("load", () => {
    profileUrl.value = reader.result;
  });
};
</script>
<style lang="scss">
@media (max-width: 464px) {
  .editAccount {
    margin-top: -42px !important;
  }
}

@media (min-width: 465px) {
  .editAccount {
    margin-top: -46px !important;
  }
}
@media (max-width: 791px) {
  .editAccount {
    .name,
    .pref {
      flex-direction: column;
    }

    .v-label {
      font-size: 13px !important;
    }

    .v-col-6,
    .v-col-9,
    .add {
      max-width: 100% !important;
    }

    .v-col-3 {
      max-width: 50% !important;
    }
  }
}
@media (max-width: 368px) {
  .editAccount {
    .v-label {
      font-size: 11px !important;
    }
  }
}
</style>
