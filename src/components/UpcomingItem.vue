<template>
  <div class="upcoming-item" v-if="slideView == index">
    <div class="upcoming-item__content">
      <img :src="imgUrlFull + movie.backdrop_path" alt="" class="upcoming-item__content--img">
      <div class="upcoming-item__content--text">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview || 'К данному фильму не добавлено описание' }}</p>
      </div>
    </div>
    <div class="upcoming-item__next" @click="$emit('slideNext')">
      <img :src="imgUrl + nextMovie.backdrop_path" alt="" class="upcoming-item__next--img">
      <div class="upcoming-item__next--text">
        <span>Следующий</span>
        <h4>{{ nextMovie.title }}</h4>
      </div>
      <div class="upcoming-item__next--line"></div>
    </div>
  </div>
</template>

<script setup>
import { imgUrl, imgUrlFull } from '../url'

const props = defineProps({
  movie: { type: Object },
  index: { type: Number },
  slideView: { type: Number },
  nextMovie: { type: Object }
})

console.log(props.nextMovie);
</script>