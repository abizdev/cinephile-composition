<template>
  <div class="actors" v-for="(item, key) in actores" :key="key">
    <img :src="imgUrl + item.profile_path" alt="" class="actors-img">
    <div class="actors-name">{{ item.name }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useActors } from '../stores/actors'
import { imgUrl, imgUrlFull } from '../url';

const props = defineProps(['id', 'type', 'count'])
const { id, type, count } = props

console.log(id, type, count);

const actorsStore = useActors()
actorsStore.getActors(id, type, count)

const actores = computed(() => type == 'movie' ? actorsStore.actorsMovie : actorsStore.actorsTv)
console.log(actores);

</script>