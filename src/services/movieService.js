import axios from 'axios'

const API_KEY = '936fe5d7'
const BASE_URL = 'http://www.omdbapi.com/'

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchQuery
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movie list:', error)
    throw error
  }
}

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movie detail:', error)
    throw error
  }
}
