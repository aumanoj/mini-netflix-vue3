<script>
import { fetchMovies } from '@/services/movieService'
export default {
  data() {
    return {
      searchQuery: 'action',
      movies: []
    }
  },
  methods: {
    async getMovies() {
      if (this.searchQuery.length > 0) {
        const data = await fetchMovies(this.searchQuery)
        this.movies = data.Search
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
  <div class="movie-list">
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

<style lang="scss">
@import '@/assets/scss/movie-list.scss';
</style>
