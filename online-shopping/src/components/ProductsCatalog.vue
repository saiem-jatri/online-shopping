<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ProductsCatalog'
})
</script>

<script setup>
import {onMounted} from "vue";
import router from "../router";

const props = defineProps({
  productData: {
    type: Object,
    required: true,
  }
})
const gotoDetails =(id)=>{
  router.push(`/product/${id}`)
}
</script>

<template>
  <div style="width: 100%;">
    <div style="display: grid; grid-column: 4">
      <div class="" v-for="item in props.productData" :key="item.id">
        <img :src="item.thumbnail" alt="">
        <h2>Brand: {{item.brand}}</h2>
        <h2>Description: {{item.description}}</h2>
        <h2>Price: {{item.price}}</h2>
        <button @click="gotoDetails(item.id)">Details</button>
      </div>
    </div>
  </div>
</template>