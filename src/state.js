import { reactive } from "vue";
import { computed } from "vue";

export const cartState = reactive({
  carts: [],
  getCartLength: computed(() => {
    return cartState.carts.length;
  }),
  getTotalPrice: computed(() => {
    let totalPrice = 0;
    if (cartState.carts) {
      cartState.carts.map((cart) => {
        totalPrice += cart.totalPrice;
      });
    }
    return totalPrice;
  }),
  loadCart: () => {
    if (localStorage.getItem("carts")) {
      cartState.carts = JSON.parse(localStorage.getItem("carts"));
    }
  },
  addToCart: (id, quantity, price) => {
    if (quantity === 0) return;

    if (cartState.carts.find((cart) => cart.itemId === id)) {
      cartState.carts = cartState.carts.map((cart) => {
        if (cart.itemId === id) {
          cart.quantity += quantity;
          cart.totalPrice += price * quantity;
        }
        return cart;
      });
    } else {
      cartState.carts = [
        ...cartState.carts,
        {
          id: Date.now(),
          itemId: id,
          quantity: quantity,
          totalPrice: price * quantity,
        },
      ];
    }
    cartState.saveCart();
  },
  removeFromCart: (id, price) => {
    const exist = cartState.carts.find((cart) => cart.id === id);
    if (exist.quantity === 1) {
      cartState.carts = cartState.carts.filter((cart) => cart.id != id);
    } else {
      cartState.carts = cartState.carts.map((cart) =>
        cart.id === id
          ? {
              ...exist,
              quantity: exist.quantity - 1,
              totalPrice: exist.totalPrice - price,
            }
          : cart
      );
    }
    cartState.saveCart();
  },
  saveCart: () => {
    localStorage.setItem("carts", JSON.stringify(cartState.carts));
  },
});
