import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/help",
    name: "help",
    component: () => import("@/views/HelpCenter.vue"),
    meta: {
      title: "Help Center",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/MyContact.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/returns",
    name: "return",
    component: () => import("@/views/MyReturns.vue"),
    meta: {
      title: "Return Process",
    },
  },
  {
    path: "/products/:category",
    name: "productscategory",
    component: () => import("@/views/ProductsCategory.vue"),
    meta: {
      title: "product category",
    },
  },
  {
    path: "/products/:category/:proId",
    name: "productname",
    component: () => import("@/views/ProductName.vue"),
    meta: {
      title: "product name",
    },
  },

  {
    path: "/sellproducts",
    name: "Sell_Products",
    component: () => import("@/views/SellProducts.vue"),
    meta: {
      title: "Sell Products",
    },
  },
  {
    path: "/sign",
    name: "sign",
    component: () => import("@/views/SignIn.vue"),
    meta: {
      title: "SIGN IN",
    },
  },
  {
    path: "/my_orders",
    name: "myorders",
    component: () => import("@/views/MyOrders.vue"),
    meta: {
      title: "Orders ",
    },
  },
  {
    path: "/summary_items",
    name: "summary",
    component: () => import("@/views/SummaryItems.vue"),
    meta: {
      title: "Saved Items ",
    },
  },
  {
    path: "/my_account",
    name: "myaccount",
    component: () => import("@/views/MyAccount.vue"),
    meta: {
      title: "My Account",
    },
  },

  {
    path: "/placeorder",
    name: "place_order",
    component: () => import("@/views/PlaceOrder.vue"),
    meta: {
      title: "Place an Order",
    },
  },
  {
    path: "/payment",
    name: "pay",
    component: () => import("@/views/MyPayment.vue"),
    meta: {
      title: "Payment",
    },
  },
  {
    path: "/cancel_order",
    name: "cancel",
    component: () => import("@/views/MyCancelation.vue"),
    meta: {
      title: "Cancel Order",
    },
  },
  {
    path: "/payment-methods",
    name: "paymentmethod",
    component: () => import("@/views/PaymentMethod.vue"),
    meta: {
      title: "Payment Methods",
    },
  },

  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/MyCart.vue"),
    meta: {
      title: "Cart",
    },
  },
  {
    path: "/sign/signdetails",
    name: "signDetails",
    component: () => import("@/views/SignDetails.vue"),
    meta: {
      title: "Sign Details",
    },
  },

  {
    path: "/sign/signdetails/createaccount",
    name: "createAccount",
    component: () => import("@/views/CreateAccount.vue"),
    meta: {
      title: "Create Account",
    },
  },
  {
    path: "/sign/signdetails/createaccount/editAccount",
    name: "editAccount",
    component: () => import("@/views/EditAccount.vue"),
    meta: {
      title: "Edit Account",
    },
  },
  {
    path: "/sign/signdetails/createaccount/news-letter",
    name: "newsletter",
    component: () => import("@/views/NewsLetter.vue"),
    meta: {
      title: "news-Letters",
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
