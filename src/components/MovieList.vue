<script>
import { fetchMovies } from '@/services/movieService'
export default {
  data() {
    return {
      searchQuery: 'action',
      movies: [],
      loader: false
    }
  },
  methods: {
    async getMovies() {
      this.loading = true
      try {
        if (this.searchQuery.length > 0) {
          const data = await fetchMovies(this.searchQuery)
          this.movies = data.Search
        }
      } catch (error) {
        console.error('Error fetching movie details:', error)
      } finally {
        this.loading = false
      }
    },
    goToDetails(id) {
      this.$router.push(`/movie/details/${id}`)
    }
  },
  mounted() {
    this.getMovies()
  }
}
</script>

<template>
  <LoaderComponent :loading="loading" v-if="loading"></LoaderComponent>
  <div class="movie-list" v-else>
    <div
      v-for="movie in movies"
      :key="movie.imdbID"
      class="movie-thumbnail"
      @click="goToDetails(movie.imdbID)"
    >
      <img :src="movie.Poster" :alt="movie.Title" />
      <h2>{{ movie.Title }}</h2>
    </div>
  </div>
</template>
