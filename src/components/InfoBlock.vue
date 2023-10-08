<template>
  <div class="popular-info" :class="{active: selectedId != null}">
    <button class="popular-info__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    <Transition name="info">
      <div class="popular-info__content" v-if="selectedItem">
        <img :src="imgUrlFull + selectedItem.backdrop_path" alt="" class="popular-info__content--img">
        <div class="popular-info__content--text">
          <h2>{{ selectedItem.title }}</h2>
          <p>{{ selectedItem.overview }}</p>
          <ul class="popular-info__content--tag">
            <li v-for="(tag, key) in selectedItem.genres" :key="key">
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
// import { useInfoBlock } from '../stores/infoblock'

const props = defineProps(['selectedId', 'selectedItem', 'index', 'category'])

// const infoBlockStore = useInfoBlock()
// const infoBlockItem = computed(() => props.selectedItem)

</script>