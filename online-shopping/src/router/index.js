import { createRouter, createWebHistory } from 'vue-router'
import catalog from "@/views/catalog.vue";
import ProductDetail from "@/views/productsDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: catalog
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductDetail
    },

  ]
})

export default router
