<template>
  <div class="popular-info" :class="{active: selectedId != null}">
    <button class="popular-info__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    <Transition name="info">
      <div class="popular-info__content" v-if="infoBlockItem">
        <img :src="imgUrlFull + infoBlockItem.backdrop_path" alt="" class="popular-info__content--img">
        <div class="popular-info__content--text">
          <h2>{{ infoBlockItem.title }}</h2>
          <p>{{ infoBlockItem.overview }}</p>
          <ul class="popular-info__content--tag">
            <li v-for="(tag, key) in infoBlockItem.genres">
              {{ tag.name }},
            </li>
          </ul>
          <div class="popular-info__content--actors"></div>
          <btn-more />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { imgUrl, imgUrlFull } from '../url'
import { useInfoBlock } from '../stores/infoblock'

const props = defineProps(['selectedId', 'index', 'category'])

const infoBlockStore = useInfoBlock()
const infoBlockItem = computed(() => infoBlockStore.movies)

</script>