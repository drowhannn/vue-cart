<template>
  <div @click.self="$emit('togglecart')" class="cartWrapper">
    <div class="cart">
      <h1>Cart</h1>
      <div class="cart__items" v-if="cartState.carts.length">
        <CartCard
          v-for="cart in cartState.carts"
          :key="`Cart-${cart?.id}`"
          :cart="cart"
        />
        <p>
          Total Price:
          {{ cartState.getTotalPrice ? cartState.getTotalPrice : 0 }}$
        </p>
        <button>Checkout</button>
      </div>
      <p v-else>No carts added😒 Shop Now!</p>
    </div>
  </div>
</template>

<script setup>
import { cartState } from "../state";
import CartCard from "./CartCard.vue";
</script>

<style>
.cartWrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0.1, 0.1, 0.1, 0.5);
}
.cart {
  width: 50%;
  position: absolute;
  right: 0;
  background: white;
  height: 100%;
  padding: 15px;
  overflow-y: scroll;
}
.cart > p {
  font-weight: bold;
}
.cart > button {
  padding: 15px 30px;
  font-size: 1.5rem;
  margin: 10px auto;
}
</style>
