<template>
  <div class="popular">
    <router-link :to="{ name: 'serials' }" class="popular-link">
      Сериалы <fa icon="fa-solid fa-chevron-right" />
    </router-link>
    <swiper
      :modules="modules"
      :space-between="24"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      class="popular-slider"
    >
      <swiper-slide class="popular-slider__item" 
        v-for="(item, key) in tvs"
        :key="key"
      >
      <img :src="imgUrlFull + item.backdrop_path" alt="" class="popular-slider__item--img" v-if="item.backdrop_path != null">
      <img :src="imgUrlFull + item.poster_path" alt="" class="popular-slider__item--img" v-else-if="item.poster_path != null">
      </swiper-slide>
      <swiper-slide class="popular-slider__item">
        <router-link :to="{ name: 'serials' }" class="popular-slider__item--link">
          <fa icon="fa-solid fa-chevron-right" />
          <span>Все сериалы</span>
        </router-link>
      </swiper-slide>
    </swiper>
    
  </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { ref, computed } from 'vue'
import { usePopular } from '../stores/popular';
import { imgUrl, imgUrlFull } from '../url'

const popularStore = usePopular()
popularStore.getPopular('tv')

const tvs = computed(() => popularStore.tvs)

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