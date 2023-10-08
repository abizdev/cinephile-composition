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
      <swiper-slide 
        class="popular-slider__item" 
        v-for="(item, key) in tvs"
        :key="key"
        :class="{active: selectedId == item.id}"
        @click="getInfo(item, key)"
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
    
    <info-block
      :selectedId="selectedId"
      :selectedItem="selectedItem"
      :index="index"
      category="tv"
      @close="selectedId = selectedItem = null"
    />
  </div>
</template>

<script setup>
import InfoBlock from './InfoBlock.vue';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { ref, computed } from 'vue'
import { imgUrl, imgUrlFull } from '../url'

import { usePopular } from '../stores/popular';
import { useInfoBlock } from '../stores/infoblock.js'

const popularStore = usePopular()
popularStore.getPopular('tv')

const tvs = computed(() => popularStore.tvs)

// Infoblock
const infoBlockStore = useInfoBlock()
const infoBlockItem = computed(() => infoBlockStore.tvId)

let selectedId = ref(null)
let selectedItem = ref(null)
let index = ref(null)

const getInfo = async (item, key) => {
  selectedId.value = item.id
  selectedItem.value = null
  index.value = key
  await infoBlockStore.getInfoBlock('tv', item.id)
  selectedItem.value = infoBlockItem.value
  console.log(selectedItem.value);
}

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