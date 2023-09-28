<template>
  <div class="popular">
    <router-link :to="{ name: 'films' }" class="popular-link">
      Фильмы <fa icon="fa-solid fa-chevron-right" />
    </router-link>
    <swiper
      :modules="modules"
      :space-between="24"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      class="popular-slider"
    >
      <swiper-slide class="popular-slider__item" 
        v-for="(movie, key) in movies"
        :key="key"
      >
        <img :src="imgUrlFull + movie.backdrop_path" alt="" class="popular-slider__item--img">
      </swiper-slide>
      <swiper-slide class="popular-slider__item">
        <router-link :to="{ name: 'films' }" class="popular-slider__item--link">
          <fa icon="fa-solid fa-chevron-right" />
          <span>Все фильмы</span>
        </router-link>
      </swiper-slide>
    </swiper>
    
  </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { ref, computed } from 'vue'
import { usePopular } from '../stores/popular';
import { imgUrl, imgUrlFull } from '../url'

const popularStore = usePopular()
popularStore.getPopular('movie')

const movies = computed(() => popularStore.movies)

const modules = ref([Navigation])
let swiperOptions = ref({
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1450: { slidesPerView: 5 },
  }
})

</script>