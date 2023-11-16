<template>
  <nav>
    <nav-link-item to="/" text="This"></nav-link-item>
    <nav-link-item to="/our-cars" text="That"></nav-link-item>
    <nav-link-item to="/sell" text="The"></nav-link-item>
    <nav-link-item to="/apply" text="Other"></nav-link-item>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import NavLinkItem from './NavLinkItem.vue'
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  padding: 2px 34px;
  display: flex;
  justify-content: center;
  gap: 34px;
  text-align: center;

  background: #000f1e66;
  border: 1px solid $white;
  border-radius: 100px;
  backdrop-filter: blur(20px);

  @media (min-width: 1024px) {
    font-size: 100%;
  }
}
</style>
