<template >
  <div class="search container">
    <input type="text" placeholder="Найти фильм, сериал..." v-model="inputVal" class="search-input">

    <div class="search-content">
      <div class="contentinfo-card" v-for="(item, key) in searchData" :key="key">
        <img :src="imgUrlFull + item.backdrop_path" alt="" class="contentinfo-card__img" v-if="item.backdrop_path != null">
        <img :src="imgUrlFull + item.poster_path" alt="" class="contentinfo-card__img" v-else-if="item.poster_path != null">
        <img src="../assets/images/no-image.png" alt="" class="contentinfo-card__img" v-else>
        <router-link :to="`/${item.media_type == 'movie' ? 'films' : 'serials'}/` + id" class="contentinfo-card__link">
          {{ item.title ? item.title : item.name }}
        </router-link>
      </div>
    </div>

    <!-- {{ inputValue }} -->
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { imgUrlFull } from '../url';

import { useSearch } from '../stores/search'

const searchStore = useSearch()

const searchData = computed(() => searchStore.searchData)

const inputVal = ref('')
watchEffect(() => searchStore.getSearch(inputVal.value))

</script>