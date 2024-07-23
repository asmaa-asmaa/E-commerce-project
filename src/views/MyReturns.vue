<template>
  <div class="my-returns">
    <v-card>
      <v-card-title class="font-weight-bold mt-3 text-red"
        >How To Creat A return</v-card-title
      >
      <v-card-text
        >If you're not satisfied with your purchase, Dummy Site makes it easy
        for you to return your items and receive a refund. To create a return,
        simply follow these easy steps. All items must be in their original
        condition and packaging to be eligible for a return.</v-card-text
      >
      <v-card-title class="font-weight-bold text-red"
        >Initiate your return:</v-card-title
      >
      <v-list>
        <v-list-item
          ><span class="font-weight-bold">Step 1: </span>Log in to your account
          and go to
          <span
            style="cursor: pointer"
            @click="$router.push({ name: 'cart' })"
            class="text-red"
            >"Orders"</span
          ></v-list-item
        >
        <v-list-item
          ><span class="font-weight-bold">Step 2: </span> Click on the order of
          the item(s) you want to return</v-list-item
        >
        <v-list-item
          ><span class="font-weight-bold">Step 3: </span>Select the item(s) you
          want to return and provide a reason for the return</v-list-item
        >
        <v-list-item
          ><span class="font-weight-bold">Step 4: </span>Choose your preferred
          refund method
        </v-list-item>
        <v-list-item
          ><span class="font-weight-bold">Step 5: </span> Select the return
          method</v-list-item
        >
        <v-list-item
          ><span>Step 6: </span> Review your information and submit your return
          request</v-list-item
        >
      </v-list>
      <v-card-title class="font-weight-bold text-red"
        >Return Policy and Guidelines:</v-card-title
      >
      <v-card-text
        >You can request a return within the first 14 days from the delivery
        date if you change your mind about a product and if it has not been
        opened except for the following products, for hygiene and security
        reasons: swimwear, underwear, lingerie, accessories, earrings, gold,
        cosmetics, perfumes, Groceries, food supplements, personal care
        products, hair care products, nutritional supplements, software,
        tickets, books, personal care products, health supplies.</v-card-text
      >
      <v-card-text
        ><span class="font-weight-bold text-red">Note: </span>In case of
        receiving a product with an apparent defect/damage or a product with a
        wrong (color / size /model) or any shortage of product belongings or
        accessories, or damage in the outer package of the product, you must
        make a return or inform us within a maximum 48 hours from the delivery
        date.</v-card-text
      >
      <v-card-title class="las font-weight-bold text-red"
        >We hope this guide has been helpful. Happy shopping!</v-card-title
      >
    </v-card>
  </div>
</template>
<style lang="scss">
@media (max-width: 464px) {
  .my-returns {
    margin-top: -42px !important;
    .v-card-title {
      font-size: 14px;
    }
    .v-card-text {
      font-size: 12px;
    }
    .v-list {
      font-size: 12px;
    }
    .las {
      font-size: 11px;
    }
    span {
      font-weight: bold;
    }
  }
}
@media (min-width: 465px) and (max-width: 588px) {
  .my-returns {
    margin-top: -46px !important;
    .v-card-title {
      font-size: 18px;
    }
    .v-card-text {
      font-size: 15px;
    }
    .v-list {
      font-size: 15px;
    }
    .las {
      font-size: 15px;
    }
    span {
      font-weight: bold;
    }
  }
}

@media (min-width: 465px) {
  .my-returns {
    margin-top: -46px !important;
  }
}
</style>
