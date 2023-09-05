<script>
import { defineComponent } from "vue";
import ProductsCatalog from "../components/ProductsCatalog.vue"
export default defineComponent({
  name: 'Catalog'
})
</script>

<script setup>
import {onMounted} from "vue";
import { productsStore } from "@/stores/products";
import router from "../router";

const store = productsStore()

onMounted(async () => {
  await store.fetchProductsFromDB()
})
</script>

<template>
  <ProductsCatalog
  :productData="store.products"
  />

</template>

<style>

</style>