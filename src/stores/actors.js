import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useActors = defineStore({
  id: 'actors',
  state: () => ({
    url: 'https://api.themoviedb.org/3/',
    actorsMovie: null,
    actorsTv: null,
  }),
  actions: {
    async getActors(itemId, category, count) {
      try {
        const response = await axios.get(`${this.url}/${category}/${itemId}/credits?api_key=${apiKey}&language=ru-Ru`)
        const res = response.data.cast
        const actorsCount = res.slice(0, count)
        if(category == 'movie') {
          this.actorsMovie = actorsCount
        } else {
          this.actorsTv = actorsCount
        }
      } catch (error) {
        console.error('Ошибка произошла приполучении актеров', error);
      }
    }
  }
})