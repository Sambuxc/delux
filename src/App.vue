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
      <a href="#">Back to top</a>
    </main>


</template>

<style lang="scss">
main {
  @include flex-base;
  flex-direction: column;
  padding-bottom: 70px;

  a {
    text-align: center;
    color: $text-grey;
    font-size: 16px;

    &::after {
      content: '';
      position: relative;
      top: -4px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: $text-grey;
    }
  }
}
</style>