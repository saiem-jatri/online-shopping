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
    <div class="griding" style="">
      <div style="box-shadow: 10px 5px 5px #ccc; padding: 20px; border-radius: 10px" v-for="item in props.productData" :key="item.id">
        <img style="height: 200px; width: 200px" :src="item.thumbnail" alt="">
        <h2 style="font-weight: 600; font-size: 20px">Brand: {{item.brand}}</h2>
        <h2 style="font-weight: 500; font-size: 16px">Description: {{item.description}}</h2>
        <h2 style="font-weight: 600; font-size: 20px">Price: {{item.price}}</h2>
        <button style="padding: 5px; border-radius: 5px; background-color: green; color: white; font-size: 12px; cursor: pointer" @click="gotoDetails(item.id)">Details</button>
      </div>
    </div>
  </div>
</template>

<style>
.griding{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px
}
@media only screen and (max-width: 600px) {
  .griding{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>