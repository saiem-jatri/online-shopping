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
      <router-link style="text-decoration: none; color: white; text-align: center" to="/"> Back to catalog</router-link>
  </div>
  <div class="product">
    <div class="">
      <div class="product-image" style="width: 50%">
        <img style="height: 100%; width: 100%" :src="singleItem.thumbnail" alt="">
      </div>
      <div class="product-details" style="width: 430px">
        <p style="font-weight: 600; font-size: 20px">Brand : {{ singleItem.brand }}</p>
        <p style="font-weight: 500; font-size: 16px">Description : {{ singleItem.description }}</p>
        <p style="font-weight: 600; font-size: 20px">Price : {{ singleItem.price }}</p>
        <div style="width: 100%; display: flex; align-items: center">
          <button @click="addToCart()" style="background-color: #f04935; color: white; cursor: pointer; height: 30px; width: 120px; border: none">Add to cart</button>
        </div>
      </div>
    </div>
  </div>


</template>
<style scoped>
.backButton{
  font-size: 12px;
  background-color: #181818;
  width: 90px;
  text-align: center;
  padding: 5px;
}
.product{
  display: flex;
  justify-content: center;
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
}
.product-details{

}

</style>