import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useTrailer = defineStore({
  id: 'trailer',
  state: () => ({
    url: 'https://api.themoviedb.org/3',
    movieVideo: null,
    tvVideo: null
  }),
  actions: {
    async getTrailer(category, itemId) {
      try {
        const res = await axios.get(`${this.url}/${category}/${itemId}/videos?api_key=${apiKey}&language=ru-Ru&`)
        if(category == 'movie') {
          this.movieVideo = res.data.results[0]
        } else {
          this.tvVideo = res.data.results[0]
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении треилера', error);
      }
    }
  }
})