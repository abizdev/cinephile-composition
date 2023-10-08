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
      <swiper-slide
        v-for="(item, key) in movies"
        :key="key"
        class="popular-slider__item"
        :class="{active: selectedId == item.id}"
        @click="getInfo(item, key)"
      >
        <img :src="imgUrlFull + item.backdrop_path" alt="" class="popular-slider__item--img">
      </swiper-slide>
      <swiper-slide class="popular-slider__item">
        <router-link :to="{ name: 'films' }" class="popular-slider__item--link">
          <fa icon="fa-solid fa-chevron-right" />
          <span>Все фильмы</span>
        </router-link>
      </swiper-slide>
    </swiper>
    
    <info-block
      :selectedId="selectedId"
      :selectedItem="selectedItem"
      :index="index"
      category="movie"
      @close="selectedId = selectedItem = null"
    />
  </div>
</template>

<script setup>
import InfoBlock from './InfoBlock.vue';
// Swiper modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { ref, computed } from 'vue'
import { imgUrl, imgUrlFull } from '../url'

// Pinia states
import { usePopular } from '../stores/popular';
import { useInfoBlock } from '../stores/infoblock'

// Swiper items (populars)
const popularStore = usePopular()
popularStore.getPopular('movie')
const movies = computed(() => popularStore.movies)

// Infoblock
const infoBlockStore = useInfoBlock()
const infoBlockItem = computed(() => infoBlockStore.movieId)

let selectedId = ref(null)
let selectedItem = ref(null)
let index = ref(null)

const getInfo = async (item, key) => {
  selectedId.value = item.id
  selectedItem.value = null
  index.value = key
  await infoBlockStore.getInfoBlock('movie', item.id)
  selectedItem.value = infoBlockItem.value
  console.log(selectedItem.value);
}
// Swiper options
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