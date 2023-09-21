<template >
  <header class="upcoming">
    <upcoming-item />
  </header>
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from '../stores/upcoming';

const upcomingStore = useUpcoming()
upcomingStore.getUpcoming()

</script>