<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex lg:w-full">
    <nav>
      <div class="menu-wrapper">
        <RouterLink to="/" class="nav-item-text">Home</RouterLink>
        <RouterLink to="/our-cars" class="nav-item-text">Our cars</RouterLink>
        <RouterLink to="/sell" class="nav-item-text">Sell your car</RouterLink>
        <RouterLink to="/apply" class="nav-item-text">Apply for finance</RouterLink>
        <RouterLink to="/about" class="nav-item-text">About us</RouterLink>
        <RouterLink to="/blog" class="nav-item-text">Blog</RouterLink>
        <RouterLink to="/contact" class="nav-item-text">Contact</RouterLink>
      </div>

      <RouterLink to="/contact" class="btn-blue md:hidden">Contact</RouterLink>
      <RouterLink to="mailto:samwbru@gmail.com" class="order-1 hidden btn-blue md:flex lg:order-2">Email</RouterLink>
      <RouterLink to="/call" class="order-2 hidden btn-blue md:flex lg:order-1">Call</RouterLink>
      
      <div class="flex lg:hidden">
        <a class="nav-item-btn">Menu</a>
        <img
          class="hidden md:flex"
          src="@/assets/menu-icon.svg"
          alt="menu icon"
          width="24"
          height="24" />
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.logo {
  height: fit-content;
  @media (min-width: 768px) {
    margin-right: 32px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
}

nav {
  @include flex-base;
  justify-content: flex-end;
  width: 100%;
  text-align: center;
  gap: 15px;

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 100%;
  }

  // Nested nav elements

  .menu-wrapper {
    display: none;

    @media (min-width: 1340px) {
      @include flex-base;
      justify-content: flex-end;
      margin-right: 50px;
      width: 100%;
      gap: 30px;
    }
  }

  /*
    Generic menu items
  */

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    /*font-family: Overpass;*/
    line-height: 27px;
    font-size: 16px;
    color: black;
  }

  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active::before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 5px;
    height: 24px;
    border-radius: 0px 0px 100px 100px;
    background-color: #7572FF;
  }

  /*
    Specific menu items
  */

  .nav-item-text {
    color: grey;
  }

  .nav-item-btn {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: 30px;
      margin-right: 10px;
    }
  }
}
</style>
