<template>
  <div class="relative flex lg:w-full">
    <i class="marker"></i>
    <nav>
      <div class="menu-wrapper">
        <RouterLink to="/" class="nav-item-text" @focus="">Home</RouterLink>
        <RouterLink to="/our-cars" class="nav-item-text">Our cars</RouterLink>
        <RouterLink to="/sell" class="nav-item-text">Sell your car</RouterLink>
        <RouterLink to="/apply" class="nav-item-text">Apply for finance</RouterLink>
        <RouterLink to="/about" class="nav-item-text">About us</RouterLink>
        <RouterLink to="/blog" class="nav-item-text">Blog</RouterLink>
        <RouterLink to="/contact" class="nav-item-text">Contact</RouterLink>
      </div>

      <RouterLink to="/contact" class="btn-blue md:hidden">Contact</RouterLink>
      <RouterLink to="mailto:samwbru@gmail.com" class="order-1 hidden btn-blue md:flex lg:order-2"
        >Email</RouterLink
      >
      <RouterLink to="/call" class="order-2 hidden btn-blue md:flex lg:order-1">Call</RouterLink>

      <div class="flex lg:hidden">
        <a class="nav-item-btn">Menu</a>
        <img
          class="hidden md:flex"
          src="@/assets/menu-icon.svg"
          alt="menu icon"
          width="24"
          height="24"
        />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const marker = document.querySelector('.marker')
  const firstItemValues = document.querySelector('nav a:first-child').getBoundingClientRect()
  /**
   * Set the left position correctly
   * */
  // the left value of the nav item minus the marker's left value because when setting the style left pos to equal firstItemValues.left it adds to its original value.
  // centerPos - markerWidth to positioning it in the center of nav item.
  let centerPos = firstItemValues.width / 2
  let markerWidth = 2.5
  let leftPos = (firstItemValues.left - marker.getBoundingClientRect().left) + (centerPos - markerWidth)
  marker.style.left = leftPos + 'px'


})
</script>

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
  position: relative;

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

  // a.router-link-exact-active::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   display: block;
  //   width: 5px;
  //   height: 24px;
  //   border-radius: 0px 0px 100px 100px;
  //   background-color: #7572ff;
  // }

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

.marker {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 5px;
  height: 24px;
  border-radius: 0px 0px 100px 100px;
  background-color: #7572ff;
  transition: .5s left ease;
}
</style>
