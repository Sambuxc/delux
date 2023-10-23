<script setup>
import './assets/main.scss'
import Header from './components/Header.vue';
import SearchFilterMenu from './components/SearchFilterMenu.vue';
import FiltersMenuButton from './components/FiltersMenuButton.vue';
import Listings from './components/Listings.vue';
</script>

<template>
    <Header />

    <SearchFilterMenu />

    <FiltersMenuButton />

    <main>
      <Listings />
    </main>


</template>

<style lang="scss">
main {
  position: relative;
}
</style>