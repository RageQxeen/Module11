import { createRouter, createWebHashHistory } from 'vue-router'

import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import QuotesPage from '../views/QuotesPage.vue'
import NotFound from '../views/NotFound.vue'  // <-- no "Page"

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutPage },
  { path: '/quotes', component: QuotesPage },
  { path: '/contact', component: ContactPage },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(), // must use Hash for GitHub Pages
  routes
})

export default router