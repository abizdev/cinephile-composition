<template>
  <div class="trailer" :class="{active: id != null}">
    <button class="trailer__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    
    <transition name="info">
      <div class="trailer-content" v-if="item">
        {{ item.key }}
        <iframe 
          :src="'https://www.youtube.com/embed/' + item.key"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          
          ></iframe>
      </div>
      <h1 class="trailer-title" v-else>Видео не доступно</h1>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps(['category', 'id', 'item'])
</script>