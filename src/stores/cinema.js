import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useCinema = defineStore({
  id: 'cinema',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    movie: null,
    tv: null
  }),
  actions: {
    async getCinema(category, page=1) {
      try {
        const res = await axios.get(`${this.url}/${category}/popular?api_key=${apiKey}&language=ru-Ru&page=${page}`)
        if(category == 'movie') {
          this.movie = res.data.results
        } else {
          this.tv = res.data.results
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении популярных фильмов или сериалов', error);
      }
    }
  }
})