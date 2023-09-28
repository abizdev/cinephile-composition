<template >
  <header class="upcoming" v-if="getUpcomingMovies">
    <upcoming-item 
      v-for="(movie, key) in getUpcomingMovies"
      :key="movie.id"
      :movie="movie"
      :index="key"
      :slideView="slideView"
      :nextMovie="getUpcomingMovies[key + 1 == getUpcomingMovies.length ? 0 : key + 1]"
      @slideNext="slideNext"
    />
  </header>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from '../stores/upcoming';
import { computed, ref, onMounted } from 'vue'

const upcomingStore = useUpcoming()
upcomingStore.getUpcoming()

let slideView = ref(0)
let timeout = ref(null)
const getUpcomingMovies = computed(() => upcomingStore.upcoming)

const slide = () => {
  if(getUpcomingMovies.value.length - 1 == slideView.value) {
    slideView.value = 0
  } else {
    slideView.value++
  }
  timeout = setTimeout(() => slide(), 10000);
}
const slideNext = () => {
  clearTimeout(timeout)
  slide()
}
onMounted(() => {
  timeout = setTimeout(() => slide(), 10000)
})

</script>