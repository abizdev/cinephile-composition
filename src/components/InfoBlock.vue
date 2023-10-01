<template>
  <div class="popular-info" :class="{active: selectedId != null}">
    <button class="popular-info__close" @click="$emit('close')">
      <fa icon="fa-solid fa-xmark" />
    </button>
    
    <div class="popular-info__content">
      <img src="../assets/images/bg.png" alt="" class="popular-info__content--img">
      <div class="popular-info__content--text">
        <h2>Шан-Чи и легенда десяти колец</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh bibendum nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer condimentum. Amet, vitae dictum convallis dignissim. Lacus, suscipit sagittis, adipiscing metus, risus convallis sit...</p>
        <ul class="popular-info__content--tag">
          <li>2021, боевик, приключения, фэнтези</li>
        </ul>
        <div class="popular-info__content--actors"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['selectedId', 'selectedItem', 'index', 'category'])
</script>