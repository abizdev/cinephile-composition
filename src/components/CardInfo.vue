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
          <button type="button" class="cardinfo-item__btn btn-more" @click="getVideo(category, getCardInfo.id)">
            <fa icon="fa-solid fa-play" />
            Смотреть трейлер
          </button>
        </div>
        <img :src="imgUrlFull + getCardInfo.poster_path" alt="" class="cardinfo-item__content--img">
        <div class="cardinfo-item__content--actors">
          <h3 class="cardinfo-item__content--title">В главных ролях</h3>
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
    <div class="contentinfo-trailer container">
      <trailer
        :category="category"
        :id="selectedId"
        :item="selectedItem"
        @close="selectedId = null"
      />
    </div>
    <div class="cardinfo-rec container" v-if="getRecItems">
      <h4 class="cardinfo-rec__title"></h4>
      <div class="cardinfo-rec__items">
        <div class="contentinfo-card" v-for="(item, key) in getRecItems" :key="key">
        <img :src="imgUrlFull + item.backdrop_path" alt="" class="contentinfo-card__img" v-if="item.backdrop_path != null">
        <img :src="imgUrlFull + item.poster_path" alt="" class="contentinfo-card__img" v-else>
        <img :src="imgUrlFull + item.poster_path" alt="" class="contentinfo-card__img" v-else>
        <router-link :to="`/${item.media_type == 'movie' ? 'films' : 'serials'}/` + item.id" class="contentinfo-card__link" @click="reloadClick()">
          {{ item.title ? item.title : item.name }}
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Trailer from './Trailer.vue'

import { imgUrlFull, imgUrl } from '../url'
import { useInfoBlock } from '../stores/infoblock.js'
import { useRec } from '../stores/rec.js'
import { useTrailer } from '../stores/trailer.js'
import { computed, ref } from 'vue'

const props = defineProps(['category', 'id'])

const infoBlockStore = useInfoBlock()
infoBlockStore.getInfoBlock(props.category, props.id)

const getCardInfo = computed(() => props.category == 'movie' ? infoBlockStore.movieId : infoBlockStore.tvId)

const recStore = useRec()
recStore.getRec(props.category, props.id)

const trailerStore = useTrailer()
const trailer = computed(() => props.category == 'movie' ? trailerStore.movieVideo : trailerStore.tvVideo)

const getRecItems = computed(() => {
  const info = props.category == 'movie' ? recStore.moviesRec : recStore.tvsRec
  if(info.length == 0) {
    return false
  } else {
    return info.slice(0, 4)
  }
})

let selectedId = ref(null)
let selectedItem = ref(null)
const getVideo = async (cat, itemId) => {
  selectedId.value = itemId
  await trailerStore.getTrailer(cat, itemId)
  selectedItem.value = trailer.value
}


const reloadClick = () => {
  setTimeout(() => {
    location.reload()
    window.scrollTo(0, 0)
  }, 100);
}

</script>