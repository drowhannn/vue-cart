<template>
  <div class="cartCard">
    <img class="cartCard__image" :src="item.image" alt="image" />
    <div class="cartCard__content">
      <h2>{{ item.name }}</h2>
      <p>Price: {{ item.price }}$</p>
      <span
        >Quantity:
        <button @click="cartState.removeFromCart(cart.id, item.price)">-</button
        >{{ cart.quantity }}
        <button @click="cartState.addToCart(item.id, 1, item.price)">
          +
        </button></span
      >
    </div>
  </div>
</template>

<script setup>
import { items } from "../items";
import { cartState } from "../state";

const { cart } = defineProps(["cart"]);

const item = items.find((item) => cart.itemId === item.id);
</script>

<style>
.cartCard {
  width: 90%;
  height: 150px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 10px;
  margin: 10px 0;
}

.cartCard__image {
  height: inherit;
  width: 160px;
}

.cartCard__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 15px;
}
.cartCard__content > span > button {
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
</style>
