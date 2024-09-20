<script>
import { fetchMovieDetails } from '@/services/movieService'
export default {
  data() {
    return {
      movie: {},
      loading: true
    }
  },
  methods: {
    async fetchMovieDetails() {
      const movieId = this.$route.params.movieId
      this.loading = true
      try {
        const data = await fetchMovieDetails(movieId)
        this.movie = data
      } catch (error) {
        console.error('Error fetching movie details:', error)
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchMovieDetails()
  }
}
</script>

<template>
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
  <div class="movie-details" v-else>
    <div class="poster-container">
      <img :src="movie.Poster" :alt="movie.Title" class="poster" />
    </div>
    <div class="info-container">
      <h1>{{ movie.Title }}</h1>
      <p class="plot">{{ movie.Plot }}</p>
      <div class="rating">
        <p class="rating-value">{{ movie.imdbRating }} / 10</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/movie-details.scss';
</style>
