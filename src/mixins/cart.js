import { ref, inject } from "vue";
const cartMixin = () => {
  const cartItems = ref([]);
  const addItem = (item) => {
    const exists = ref(false);
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == item.id) {
        cartItems.value[i].quantity = item.quantity;
        exists.value = true;
        break;
      }
    }
    if (!exists.value) {
      cartItems.value.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
    console.log(cartItems.value);
  };

  const increaseItem = (item) => {
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == item.id) {
        cartItems.value[i].quantity = item.quantity;
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));

        break;
      }
    }
  };
  const emitter = inject("emitter");

  const removItem = (item) => {
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == item.id) {
        cartItems.value[i].quantity = item.quantity;
        if (item.quantity == 0) {
          cartItems.value.splice(i, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
          emitter.emit("itemDeleted");
          location.reload();
        } else {
          localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
        }

        break;
      }
    }
  };

  const getCartItems = (item) => {
    if (localStorage.getItem("cartItems")) {
      cartItems.value = JSON.parse(localStorage.getItem("cartItems"));

      for (let i = 0; i < cartItems.value.length; i++) {
        if (item.id == cartItems.value[i].id) {
          item.quantity = cartItems.value[i].quantity;
          break;
        }

        if (item.id !== cartItems.value[i].id) {
          item.quantity = 0;
        }
        // cartItems.value[i].quantity = item.quality;

        if (cartItems.value[i].quantity == 0) {
          cartItems.value.splice(i, 1);
        }
      }
    }
    if (!cartItems.value.length) {
      item.quantity = 0;
    }
  };
  const getScartItems = () => {
    if (localStorage.getItem("cartItems")) {
      cartItems.value = JSON.parse(localStorage.getItem("cartItems"));
    }
  };

  return {
    cartItems,
    addItem,
    removItem,
    getCartItems,
    increaseItem,
    getScartItems,
  };
};
export default cartMixin;
