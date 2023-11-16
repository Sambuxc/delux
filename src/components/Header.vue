<script setup>
import Nav from "./Nav.vue";
import MenuIcon from "./icons/IconMenuAlt.vue"
import AccountIcon from "./icons/IconAccount.vue"
</script>

<template>
  <header>
    <div class="logo-wrapper">
      <button class="menu-icon"><MenuIcon /></button>

      <h1 class="primary-text">Logo</h1>
    </div>

    <Nav />

    <div>
      <button class="account-icon"><AccountIcon /></button>
    </div>
  </header>
</template>

<style lang="scss" scoped>

header {
  @extend .flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid $grey;
  padding: 13px 21px;
  align-items: center;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 13px;
}

.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 34px;
  width: 34px;
  border: 1px solid $grey;
  outline: 1px solid $grey-light;
  border-radius: 100%;
}

.account-icon {
  padding: 0;
  width: 25px;
  height: 25px;
}

</style>
