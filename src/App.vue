<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import { cartState } from "./state";
import Navbar from "./components/Navbar.vue";

cartState.loadCart();
</script>
