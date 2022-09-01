<template>
  <router-link class="nav" to="/">
    <h1 class="nav__title">NIKE Store</h1>
    <div class="nav__cart" @click="toggleShowCart">
      <img
        class="nav__cartImage"
        src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
        alt="cart logo"
      />
      <div class="nav__cartNumber">{{ cartState.getCartLength }}</div>
    </div>
  </router-link>
  <Cart v-if="showCart" @togglecart="toggleShowCart" />
</template>

<script setup>
import { cartState } from "../state";
import Cart from "./Cart.vue";
import { ref } from "vue";

let showCart = ref(false);
const toggleShowCart = () => {
  showCart.value = !showCart.value;
};
</script>

<style>
.nav {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: rgb(215, 215, 215);
  height: 15vh;
}

.nav__title {
  color: black;
}
.nav__cart {
  position: relative;
}
.nav__cartImage {
  width: 35px;
  height: 35px;
  border: 1px solid transparent;
}
.nav__cartImage:hover {
  border: 1px solid blue;
}

.nav__cartNumber {
  text-align: center;
  position: absolute;
  right: -10px;
  top: -10px;
  background: red;
  padding: 1px 6px;
  border-radius: 50%;
  color: white;
}
</style>
