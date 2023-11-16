<template>
  <RouterLink @mouseover="$emit('handleMouseover', this)" :to="to">{{ text }}</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
a.router-link-exact-active:hover {
  background-color: transparent;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Helvetica, sans-serif;
  line-height: 27px;
  font-size: 16px;
  font-weight: 600;
  color: $white;
}

a.router-link-exact-active {
  border-bottom: 1px solid $brand-primary;
}
</style>
