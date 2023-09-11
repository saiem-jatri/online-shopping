import { createRouter, createWebHistory } from 'vue-router'
import catalog from "@/views/catalog.vue";
import ProductDetail from "@/views/productsDetails.vue"
import cartView from "@/views/cart.vue"
import SuccessPage from "../components/Success.vue"
import ErrorPage from "../components/Error.vue"

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
    {
      path: '/cart',
      name: 'cartView',
      component: cartView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessPage
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    },

  ]
})

export default router
