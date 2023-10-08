import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useTopRate = defineStore({
  id: 'toprate',
  state: () => ({
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    toprate: null
  }),
  actions: {
    async getTopRate(page=1) {
      try {
        const response = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru`)
        const res = response.data.results
        this.toprate = res.slice(0, 10)
      } catch (error) {
        console.error('Ошибка произошла приполучении топ 10 фильмов', error);
      }
    }
  }
})