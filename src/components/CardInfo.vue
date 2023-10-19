<template>
  <div class="cardinfo" v-if="getCardInfo">
    <div class="cardinfo-item">
      <img :src="imgUrlFull + getCardInfo.backdrop_path" alt="" class="cardinfo-item__bg">
      <div class="cardinfo-item__content">
        <div class="cardinfo-item__content--text">
          <h1>{{ getCardInfo.title ? getCardInfo.title : getCardInfo.name }}</h1>
          <p>{{ getCardInfo.overview }}</p>
          <ul class="cardinfo-item__content--tag">
            <li>{{ new Date(getCardInfo.release_date).getFullYear() }}</li>
            <li v-for="(li, key) in getCardInfo.genres" :key="key">
              {{ li.name }}, 
            </li>
          </ul>
        </div>
        <img :src="imgUrlFull + getCardInfo.poster_path" alt="" class="cardinfo-item__content--img">
        <div class="cardinfo-item__content--actors">
          <actors :type="category" :id="id" count="6" />
        </div>
      </div>
    </div>
    <div class="cardinfo-budget container">
      <div class="cardinfo-budget__item">
        <h5>Бюджет</h5>
        <p>${{ getCardInfo.budget }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Сборы</h5>
        <p>${{ getCardInfo.revenue }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Статус</h5>
        <p>{{ getCardInfo.status }}</p>
      </div>
      <div class="cardinfo-budget__item">
        <h5>Исходное название</h5>
        <p>{{ getCardInfo.original_title }}</p>
      </div>
      
    </div>
    <div class="cardinfo-rec"></div>
  </div>
</template>

<script setup>
import { imgUrlFull, imgUrl } from '../url'
import { useInfoBlock } from '../stores/infoblock.js'
import { computed, ref } from 'vue'

const props = defineProps(['category', 'id'])

const infoBlockStore = useInfoBlock()
infoBlockStore.getInfoBlock(props.category, props.id)

const getCardInfo = computed(() => props.category == 'movie' ? infoBlockStore.movieId : infoBlockStore.tvId)
console.log(getCardInfo);
</script>