import { createRouter, createWebHistory } from 'vue-router'
import catalog from "@/views/catalog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: catalog
    },

  ]
})

export default router
