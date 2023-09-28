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
    async getPopular(category, page=1) {
      try {
        const res = await axios.get(`${this.url}/${category}/popular?api_key=${apiKey}&language=ru-Ru&page=${page}`)
        console.log(res);
        if(category == 'movie') {
          this.movies = res.data.results
        } else {
          this.tvs = res.data.results
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении популярных фильмов или сериалов', error);
      }
    }
  }
})