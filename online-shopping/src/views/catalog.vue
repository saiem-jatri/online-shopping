<script>
import { defineComponent } from "vue";
import ProductsCatalog from "../components/ProductsCatalog.vue"
export default defineComponent({
  name: 'Catalog'
})
</script>

<script setup>
import {onMounted, onUnmounted} from "vue";
import { productsStore } from "@/stores/products";
import router from "../router";

const store = productsStore()

onMounted(async () => {
  await store.fetchProductsFromDB()
})
onUnmounted(()=>{
  localStorage.setItem('items', JSON.stringify(store.products));
})
</script>

<template>
  <ProductsCatalog
  :productData="store.products"
  />

</template>

<style>

</style>