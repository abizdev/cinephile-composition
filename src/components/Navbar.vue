<template >
  <nav class="navbar">
    <div class="navbar-nav container">
      <router-link :to="{name: 'home'}">
        <img src="../assets/images/Logo.svg" alt="logo" class="navbar-nav__logo">
      </router-link>
      <ul class="navbar-nav__link">
        <li v-for="(link, key) in navbarList" :key="key">
          <router-link :to="{name: link.url}">{{ link.name }}</router-link>
        </li>
        <li>
          <router-link :to="{name: 'search'}">
            <fa icon="fa-solid fa-magnifying-glass" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  const navbarList = [
    {url: 'home', name: 'Главная'},
    {url: 'films', name: 'Фильмы'},
    {url: 'search', name: 'Сериалы'},
  ]
</script>