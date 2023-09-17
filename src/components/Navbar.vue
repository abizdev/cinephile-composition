<template >
  <nav class="navbar">
    <div class="navbar-nav container">
      <router-link :to="{name: 'home'}">
        <img src="../assets/images/Logo.svg" alt="logo" class="navbar-nav__logo">
      </router-link>
      
      <button class="navbar-nav__btn" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="navbar-nav__list" ref="navbar-nav__list" :class="openOrClose ? 'active' : ''">
        <button class="navbar-nav__close">
          <fa icon="fa-solid fa-xmark" @click="closeMenu"/>
        </button>
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
import { ref } from 'vue'
  // Navbar links
  const navbarList = [
    {url: 'home', name: 'Главная'},
    {url: 'films', name: 'Фильмы'},
    {url: 'serials', name: 'Сериалы'},
  ]
  // Menu toggle functionality
  
  const navbarNavList = ref()
  let openOrClose = ref(false)
  
  const openMenu = () => {
    // navbarNavList.style.transition = '0.3s'
    // navbarNavList.style.transform = 'traslateX(0)'
    openOrClose.value = true
  }
  const closeMenu = () => {
    openOrClose.value = false
  }
  window.addEventListener('resize', () => {
    if(window.innerWidth > 992) {
      openOrClose.value = false
      // navbarNavList.removeAttribute('style')
    }
  })
  
</script>