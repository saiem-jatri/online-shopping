<script setup>
import { RouterView } from 'vue-router'
import {useRoute, useRouter} from "vue-router"
import {productsStore} from "@/stores/products";


const store = productsStore()
const router = useRouter()
</script>

<template>
  <div style="display: flex; flex-direction: column; width: 100%">
    <header>
      <div v-if="store.products.length > 0" class="cart-items" @click="router.push('/cart')">
        <p >Items in cart : {{ store.cart.length }}</p>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
