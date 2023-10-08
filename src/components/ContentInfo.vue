<template>
  <div class="contentinfo container">
    <h2 class="contentinfo-title">
      {{ content == 'movies' ? 'Все фильмы' : 'Все сериалы' }}
    </h2>

    <div class="contentinfo-items">
      <div class="contentinfo-card" v-for="(item, key) in allContent" :key="key">
        <img :src="imgUrlFull + item.backdrop_path" alt="" class="contentinfo-card__img" v-if="item.backdrop_path != null">
        <img :src="imgUrlFull + item.poster_path" alt="" class="contentinfo-card__img" v-else>
        <a href="#!" class="contentinfo-card__link">{{ item.title ? item.title : item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['content'])
console.log(props.content);

import { ref } from 'vue'
import { useCinema } from '../stores/cinema'
import { imgUrl, imgUrlFull } from '../url';

// Cinema store
const cinemaStore = useCinema()


let page = ref(1)
let loading = ref(false)
const allContent = ref([])

// cinemaStore.getCinema(props.content, page.value)

const getContent = async () => {
  if (!loading.value) {
    loading.value = true
    await cinemaStore.getCinema(props.content, page.value)

    const storeInfo = cinemaStore.$state[props.content]
    allContent.value.push(...storeInfo)
    loading.value = false
    page.value++
    console.log(allContent.value);

  }
}

getContent()
window.addEventListener('scroll', () => {
  if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    getContent()
  }
})

</script>