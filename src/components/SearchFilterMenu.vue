<script setup>
import IconFilter from "./icons/IconFilter.vue";
import SearchFilterItem from "./SearchFilterItem.vue";
</script>

<template>
  <div class="search-filter-menu">
    <div class="search-filter-menu__header">
      <h2>Search filters</h2>
      <button class="btn-red">Reset</button>
      <button class="btn-base">Cancel</button>
    </div>

    <div class="search-filter-menu__body">
      <h2>Brand</h2>

      <SearchFilterItem title="Make"/>
      <SearchFilterItem title="Model" disabled/>
    </div>

    <div class="search-filter-menu__control">
      <div class="search-filter-menu__control--button">
        <IconFilter />
        <p>Update (399)</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-filter-menu {
  overflow-y: scroll;
  position: absolute;
  top: $header-height;
  width: 100%;
  height: calc(100% - $header-height);
  background-color: white;
  display: flex;
  flex-direction: column;

  &__header {
    @include flex-base;
    gap: 15px;
    height: fit-content;
    width: 100%;
    padding: 20px 12px;

    h2 {
      flex-grow: 1;
      font-size: 18px;
      color: black;
      font-weight: 700;
      line-height: 24px;
    }
  }

  &__body {
    padding: 0 13px;

    display: flex;
    flex-direction: column;

    h2 {
      margin: 20px 0;

      color: $grey-dark;
      font-variation-settings: "wght" 900;
      font-size: 12px;
      line-height: 18px; /* 150% */
      letter-spacing: 1.8px;
      text-transform: uppercase;
    }
  }

  &__control {
    position: fixed;
    bottom: 0;
    display: inline-flex;
    height: 70px;
    padding: 10px 98px 10px 97px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);

    &--button {
      @include flex-base;
      justify-content: center;
      gap: 10px;
      padding: 12px 25px;
      height: 50px;
      width: fit-content;

      border-radius: 16px;
      border: 1px solid var(--framework-borders, #D1D6E0);
      background: var(--framework-light, #F6F7FB);

      p {
        height: fit-content;
        color: $text-black;
        text-align: center;
        /* All/Headings/Buttons */
        font-family: 'Overpass-variable';
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        text-wrap: nowrap;
      }
    }
  }
}
</style>
