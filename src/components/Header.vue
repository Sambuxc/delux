<script setup>
import { RouterLink, RouterView } from "vue-router";
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

      <div class="hidden md:flex items-center md:mr-15">
        <img src="@/assets/star-icon.svg" width="24" height="24" />
        <span class="md:ml-5">0</span>
      </div>

      <div class="hidden md:flex items-center">
        <img src="@/assets/time-icon.svg" timeh="24" height="24" />
        <span class="md:ml-5">0</span>
      </div>
    </div>

    <div class="flex lg:w-full">
      <nav class="nav-list">
        <RouterLink to="/" class="">Home</RouterLink>
        <RouterLink to="/" class="">Our cars</RouterLink>
        <RouterLink to="/" class="">Sell your car</RouterLink>
        <RouterLink to="/" class="">Apply for finance</RouterLink>
        <RouterLink to="/" class="">About us</RouterLink>
        <RouterLink to="/" class="">Blog</RouterLink>
        <RouterLink to="/" class="">Contact</RouterLink>
      </nav>

      <nav>
        <RouterLink to="/" class="btn-blue md:hidden">Contact</RouterLink>
        <a
          href="mailto:samwbru@gmail.com"
          class="btn-blue hidden md:flex order-1 lg:order-2"
          >Email</a
        >
        <RouterLink to="/" class="btn-blue hidden md:flex order-2 lg:order-1"
          >Call</RouterLink
        >
        <div class="flex lg:hidden">
          <a class="btn-menu">Menu</a>
          <img
            class="hidden md:flex"
            src="@/assets/menu-icon.svg"
            alt="menu icon"
            width="24"
            height="24" />
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">

header {
  @extend .flex;

  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid $border-color;
  padding: 10px 13px;
}

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 13px;
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;

  /*font-family: Overpass;*/
  line-height: 27px;
  font-size: 16px;
  font-weight: 600;
  color: black;
}

nav a:first-of-type {
  border: 0;
}

.btn-blue {
  padding: 11px 15px;
  height: 30px;
  background: #82f7ff;
  border-radius: 16px;
}

.btn-menu {
  margin: 0;
}

.nav-list {
  display: none;
}

@media (min-width: 768px) {
  header {
    height: 80px;
  }

  .btn-blue {
    padding: 12px 25px;
    height: 38px;
  }
  .btn-menu {
    margin-left: 30px;
    margin-right: 10px;
  }

  .logo {
    margin-right: 30px;
  }

  nav {
    gap: 10px;
  }
}

@media (min-width: 1024px) {

  header {
    padding: 30px 32px;
    height: 100px;
    display: flex;
    align-items: center;
  }

  .logo {
    margin: 0 32px 0 0;
    width: 200px;
  }

  nav {
    font-size: 100%;
  }

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}
</style>
