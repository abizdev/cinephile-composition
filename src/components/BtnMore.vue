<template>
  <router-link :to="`/${page == 'movie' ? 'films' : 'serials'}/` + id" class="btn-more">
    <fa icon="fa-solid fa-bars" /> Подробнее
  </router-link>
</template>

<script setup>
const props = defineProps(['id', 'page'])

</script>