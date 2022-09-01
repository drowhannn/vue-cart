<template>
  <router-link :to="`/${item.id}`" class="itemCard">
    <img :src="item.image" alt="" />
    <h4>{{ item.name }}</h4>
    <p>{{ item.price }}$</p>
  </router-link>
</template>

<script setup>
const { item } = defineProps(["item"]);
</script>

<style>
.itemCard {
  height: 360px;
  width: 250px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 300ms ease-in;
  border-radius: 10px;
  cursor: pointer;
}
.itemCard:hover {
  box-shadow: 0px 0px 34px 8px rgba(176, 176, 176, 0.18);
  -webkit-box-shadow: 0px 0px 34px 8px rgba(176, 176, 176, 0.18);
  -moz-box-shadow: 0px 0px 34px 8px rgba(176, 176, 176, 0.18);
}

.itemCard > img {
  height: 300px;
  width: inherit;
  object-fit: cover;
}

.itemCard > h4 {
  margin-top: 10px;
}
.itemCard > h4,
.itemCard > p {
  padding-left: 10px;
}

.itemCard > button {
  flex: 1;
}
</style>
