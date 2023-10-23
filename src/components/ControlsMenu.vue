<script setup>
import IconDown from "./icons/IconDown.vue"
</script>
<template>
    <div class="controls-menu">
      <div class="controls-menu__button active">
        <h3>All</h3>
      </div>
      <div class="controls-menu__button">
        <h3>Used</h3>
      </div>
      <div class="controls-menu__button">
        <h3>New</h3>
      </div>
      <div class="controls-menu__button">
        <h3>Offers</h3>
      </div>
    </div>

    <div class="sort">
      <p class="sort__text">Showing 24 of 339 cars</p>

      <div class="sort__select">
        <p>Lowest price</p>
        <IconDown />
      </div>
    </div>
</template>

<style lang="scss">
.controls-menu::after {
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100%;
  height: 20px;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, $framework-borders 100%);
  z-index: -1;
}

.controls-menu {
  @include flex-base;
  justify-content: space-evenly;
  position: relative;
  margin-top: 15px;
  padding-bottom: 1px;
  width: 100%;
  background-color: $white;

  h3 {
    font-size: 14px;
  }

  &__button {
    padding: 8px 0;
    width: 25%;
    text-align: center;
    color: $text-grey;
    
    font-family: SF Pro Text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  &__button.active {
    border-bottom: 3px solid $brand-primary;
    color: $text-black;

  }
}

.sort {
  @include flex-base;
  justify-content: space-between;
  padding: 23px 13px 6px 13px;
  width: 100%;
  background-color: $white;
  display: none;

  &__select {
    @include flex-base;
    gap: 5px;
  }
}
</style>