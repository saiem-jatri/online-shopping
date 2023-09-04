<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Catalog'
})
</script>
<script setup>
import {onMounted} from "vue";
import {productsStore} from "@/stores/products"

const store = productsStore()

onMounted(()=>{
  console.log("Mounted========>")
  store.fetchProductsFromDB()
})
</script>

<template>
  catalog
</template>