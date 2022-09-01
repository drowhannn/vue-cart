<script setup>
import ItemCard from "../components/ItemCard.vue";
import { items } from "../items";
</script>

<template>
  <div class="allItems">
    <h1>Products</h1>
    <div class="items">
      <ItemCard
        v-for="item in items"
        :key="`Item-Card-${item.id}`"
        :item="item"
      />
    </div>
  </div>
</template>

<style>
.allItems {
  width: 100vw;
  overflow: hidden;
  padding: 10px 70px;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1rem;
  margin-top: 1rem;
  place-items: center;
}
@media screen and(min-width:800px) {
  .items {
    grid-template-columns: repeat(3, auto);
  }
}
@media screen and(min-width:1600px) {
  .items {
    grid-template-columns: repeat(5, auto);
  }
}
</style>
