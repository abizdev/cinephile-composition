import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useInfoBlock = defineStore({
  id: 'infoBlock',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    movies: null,
    tvs: null
  }),
  actions: {
    async getInfoBlock(category, itemId) {
      try {
        const res = await axios.get(`${this.url}/${category}/${itemId}?api_key=${apiKey}&language=ru-Ru`)
        if(category == 'movie') {
          this.movies = res.data
        } else {
          this.tvs = res.data
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении популярных фильмов или сериалов', error);
      }
    }
  }
})