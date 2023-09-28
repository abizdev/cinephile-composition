import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const usePopular = defineStore({
  id: 'popular',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    movies: null,
    tvs: null
  }),
  actions: {
    async getPopular(category) {
      try {
        const res = await axios.get(`${this.url}/${category}/popular?api_key=${apiKey}&language=ru-Ru`)
        this.upcoming = res.data.results
      } catch (error) {
        console.error('Ошибка произошла приполучении популярных фильмов или сериалов', error);
      }
    }
  }
})