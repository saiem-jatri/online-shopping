<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ProductsDetails'
})
</script>

<script setup>
import {computed, onMounted} from 'vue'
import { productsStore } from "../stores/products.js";
import {useRoute, useRouter} from "vue-router"

const store = productsStore()
const router = useRouter()

const allData = JSON.parse(localStorage.getItem('items'));


console.log("storage data =", allData)
const route = useRoute()
const singleItem = computed(()=>{
 return allData.find((item)=> item.id === Number(route.params.id))
})
const addToCart = ()=>{
  store.addToCart(singleItem.value)
  router.push('/cart')
}
</script>

<template>
  <div class="backButton">
      <router-link to="/">Back to catalog</router-link>
  </div>
  <div class="product">
      <div class="product-image" style="width: 50%">
        <img :src="singleItem.thumbnail" alt="">
      </div>
    <div class="product-details" style="width: 430px">
      <p>Brand : {{ singleItem.brand }}</p>
      <p>Description : {{ singleItem.description }}</p>
      <p>Price : {{ singleItem.price }}</p>
    </div>
  </div>
  <div style="width: 100%; display: flex; justify-content: center; align-items: center">
    <button @click="addToCart()" style="background-color: green; color: white; padding: 10px; border-radius: 10%; cursor: pointer; height: 60px; width: 120px">Add to cart</button>
  </div>
</template>
<style scoped>
.product {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}

</style>