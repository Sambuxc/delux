<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  <header>
    <div class="flex">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125" />

      <div class="items-center hidden md:flex md:mr-15">
        <img src="@/assets/star-icon.svg" width="24" height="24" />
        <span class="md:ml-5">0</span>
      </div>

      <div class="items-center hidden md:flex">
        <img src="@/assets/time-icon.svg" timeh="24" height="24" />
        <span class="md:ml-5">0</span>
      </div>
    </div>

    <Nav></Nav>
  </header>
</template>

<style lang="scss">

header {
  @extend .flex;

  justify-content: space-between;
  height: $header-height;
  width: 100%;
  border-bottom: 1px solid $border-color;
  padding: 10px 13px;

  @media (min-width: 768px) {
    height: $header-height-tablet;
  }

  @media (min-width: 1024px) {
    padding: 30px 32px;
    height: $header-height-desktop;
    display: flex;
    align-items: center;
  }
}

</style>
