<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'CartView'
})
</script>
<script setup>
import { productsStore } from "../stores/products.js";
import {useRoute, useRouter} from "vue-router"
const store = productsStore()
const router = useRouter()
import {computed} from 'vue'

const removeFromStoreCart = (id)=>{
  console.log("id=========>",id)
  // store.cart = store.cart.filter((item) => item.id !== id)
  store.removeFromCart(id)
}
// const addOneItem = (id)=>{
//   console.log(id)
//   let pushItem = store.cart.filter((item)=> item.id === id)
//   pushItem[0].price = pushItem[0].price * 2
// }
const allData = JSON.parse(localStorage.getItem('items'));
const singleItem = computed(()=>{
  return allData.find((item)=> item.id === Number(route.params.id))
})
const addToCart = (item)=>{
  store.addToCart(item)
}
const reduceOneItem = (item)=>{
  store.reduceOneItem(item)
}

  const totalsSum =computed(()=>{
      let total = 0;
      store.cart.map((item)=>{
        total += item.totalPrice
      })
    return total
  })

</script>

<template>
  <div class="backButton" style="margin-bottom: 20px">
    <router-link style="text-decoration: none; color: white; text-align: center" to="/"> Back to catalog</router-link>
  </div>
  <div v-if="!store.cart.length" style="text-align: center">
    <h1>Empty Cart ...</h1>
  </div>
  <div class="cart-items" v-else>
    <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
    >
      <div style="position: relative;" class="item-details">
        <p class="badge" style="position: absolute; right: 10px; top: 2px">{{ item.quantity }}</p>
        <img :src="item.thumbnail" alt="">
        <span>Brand: {{ item.brand }}</span>
        <span>Category: {{ item.category }}</span>
        <span>Price: ${{ item.totalPrice }}</span>
        <button @click="addToCart(item)">+ 1</button>
        <button @click="reduceOneItem(item)">-1</button>
        <button @click="removeFromStoreCart(item.id)">Remove</button>
      </div>
    </div>
    <div class="article">
      <p class="example-left" >Approximate Total Cost : {{totalsSum}}</p>
    </div>
  </div>
</template>
<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}
.backButton{
  font-size: 12px;
  background-color: #181818;
  width: 90px;
  text-align: center;
  padding: 5px;
}
.article {
  width: 600px;
  margin: 1em auto;
  overflow: hidden;
  position: relative;
  min-height: 4em;
  border: 1px solid #ccc;
}

.example-left {
  white-space: nowrap;
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  outline:none
}

.example-left {
  -webkit-animation: mymove 10s linear infinite; /* Safari 4.0 - 8.0 */
  white-space: nowrap;
  animation: mymove 10s linear infinite;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes mymove {
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
}
.badge {
  background-color: red;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
</style>