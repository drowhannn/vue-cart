<template>
  <div class="itemDetail">
    <img :src="item.image" class="itemDetail__image" />
    <div class="itemDetail__content">
      <h1>{{ item.name }}</h1>
      <p>Price: {{ item.price }}</p>
      <span
        >Quantity <button @click="decreaseQuantity">-</button> {{ quantity }}
        <button @click="increaseQuantity">+</button></span
      >
      <button @click="cartState.addToCart(item.id, quantity, item.price)">
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { items } from "../items";
import { ref } from "vue";
import { cartState } from "../state";
import { useRoute } from "vue-router";

let quantity = ref(0);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const route = useRoute();
const itemId = route.params.id;

const item = items[itemId - 1];
</script>

<style>
.itemDetail {
  width: 100vw;
  overflow: hidden;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}

.itemDetail__image {
  width: 50%;
}
.itemDetail__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.itemDetail__content > span > button {
  padding: 5px 10px;
  margin: 0 5px;
}

.itemDetail__content > button {
  padding: 15px;
  width: fit-content;
}
</style>
