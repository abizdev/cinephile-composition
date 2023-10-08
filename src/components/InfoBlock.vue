<template>
  <div class="popular-info" :class="{active: selectedId != null}">
    <button class="popular-info__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    <Transition name="info">
      <div class="popular-info__content" v-if="selectedItem">
        <img :src="imgUrlFull + selectedItem.backdrop_path" alt="" class="popular-info__content--img">
        <div class="popular-info__content--text">
          <h2>{{ selectedItem.title ? selectedItem.title : selectedItem.name }}</h2>
          <p>{{ selectedItem.overview }}</p>
          <ul class="popular-info__content--tag">
            <li v-for="(tag, key) in selectedItem.genres" :key="key">
              {{ tag.name }},
            </li>
          </ul>
          <div class="popular-info__content--actors">
            <!-- <actors :type="category" :id="selectedId" :count="4" /> -->
          </div>
          <btn-more :page="category" :id="selectedId" />
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