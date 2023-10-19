<template>
  <card-info category="movie" :id="route.params.id" />
</template>

<script setup>
import CardInfo from '../components/CardInfo.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
</script>