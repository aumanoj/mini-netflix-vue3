import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MovieListView.vue'
import MovieDetail from '../views/MovieDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/details/:movieId',
      name: 'movie',
      component: MovieDetail
    }
  ]
})

export default router
