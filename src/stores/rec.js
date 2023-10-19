import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useRec = defineStore({
  id: 'recomendation',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    moviesRec: [],
    tvsRec: []
  }),
  actions: {
    async getRec(category, itemId) {
      try {
        const res = await axios.get(`${this.url}/${category}/${itemId}/recommendations?api_key=${apiKey}&language=ru-Ru&page=1`)
        if(category == 'movie') {
          this.moviesRec = res.data.results
        } else {
          this.tvsRec = res.data.results
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении популярных фильмов или сериалов', error);
      }
    }
  }
})