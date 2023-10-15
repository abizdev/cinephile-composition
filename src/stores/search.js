import { defineStore } from "pinia";
import { apiKey } from "../url";
import axios from "axios";

export const useSearch = defineStore({
  id: 'toprate',
  state: () => ({
    url: 'https://api.themoviedb.org/3/search/multi',
    searchData: null
  }),
  actions: {
    async getSearch(value) {
      try {
        const response = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru&query=${value}&page=1&include_adult=false`)
        this.searchData = response.data.results
      } catch (error) {
        console.error('Ошибка произошла приполучении поиска', error);
      }
    }
  }
})