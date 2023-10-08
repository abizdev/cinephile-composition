<template>
  <div class="toprate">
    <h2 class="toprate-title">топ <span>10</span></h2>
    <swiper
      :modules="modules"
      :space-between="24"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
      class="toprate-slider"
    >
      <swiper-slide 
        v-for="(item, key) in toprate"
        :key="key"
        class="toprate-slider__item"
      >
        <img :src="imgUrlFull + item.backdrop_path" alt="" class="toprate-slider__item--img">
        <!-- <img src="../assets/images/bg.png" alt="" class="toprate-slider__item--img"> -->
        <div class="toprate-slider__item--info">
          <p>{{ key + 1 }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { imgUrl, imgUrlFull } from '../url'

// Swiper modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

// Toprate state
import { useTopRate } from '../stores/toprate.js'

const topRateStore = useTopRate()
topRateStore.getTopRate()

const toprate = computed(() => topRateStore.toprate)


// Swiper options
const modules = ref([Navigation])
let swiperOptions = ref({
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  }
})

</script>