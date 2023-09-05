<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ProductsDetails'
})
</script>

<script setup>
import { computed } from 'vue'
import { productsStore } from "@/stores/products";
import {useRoute} from "vue-router"

const store = productsStore()
const route = useRoute()
console.log(route.params.id)
const singleItem = computed(()=>{
 return store.products.find((item)=> item.id === Number(route.params.id))
})

console.log(singleItem)

</script>

<template>
  {{singleItem}}
Details
</template>