<script setup>
import IconFilter from "./icons/IconFilter.vue";
import ButtonControlSwitch from "./ButtonControlSwitch.vue";
import SearchFilterMenu__item from "./SearchFilterMenu__item.vue";
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

      <div class="search-filter-item__container">
        <div class="search-filter-item__header">
          <h3>Make</h3>

          <ButtonControlSwitch />
        </div>

        <div class="search-filters">
          <SearchFilterMenu__item filterItemName="Abarth" />
          <SearchFilterMenu__item filterItemName="Alfa Romeo" />
          <SearchFilterMenu__item filterItemName="Audi" />
          <SearchFilterMenu__item filterItemName="BMW" />
          <SearchFilterMenu__item filterItemName="Citroën" />
          <SearchFilterMenu__item filterItemName="BS" />
          <SearchFilterMenu__item filterItemName="Abarth" />
          <SearchFilterMenu__item filterItemName="Alfa Romeo" />
          <SearchFilterMenu__item filterItemName="Audi" />
          <SearchFilterMenu__item filterItemName="BMW" />
          <SearchFilterMenu__item filterItemName="Citroën" />
          <SearchFilterMenu__item filterItemName="BS" />
          <SearchFilterMenu__item filterItemName="Abarth" />
          <SearchFilterMenu__item filterItemName="Alfa Romeo" />
          <SearchFilterMenu__item filterItemName="Audi" />
          <SearchFilterMenu__item filterItemName="BMW" />
          <SearchFilterMenu__item filterItemName="Citroën" />
          <SearchFilterMenu__item filterItemName="BS" />
          <SearchFilterMenu__item filterItemName="Abarth" />
          <SearchFilterMenu__item filterItemName="Alfa Romeo" />
          <SearchFilterMenu__item filterItemName="Audi" />
          <SearchFilterMenu__item filterItemName="BMW" />
          <SearchFilterMenu__item filterItemName="Citroën" />
          <SearchFilterMenu__item filterItemName="BS" />
          <SearchFilterMenu__item filterItemName="Abarth" />
          <SearchFilterMenu__item filterItemName="Alfa Romeo" />
          <SearchFilterMenu__item filterItemName="Audi" />
          <SearchFilterMenu__item filterItemName="BMW" />
          <SearchFilterMenu__item filterItemName="Citroën" />
          <SearchFilterMenu__item filterItemName="BS" />
        </div>
      </div>
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

    .search-filter-item__container {
      display: flex;
      flex-direction: column;
      padding: 13px;
      height: fit-content;

      border-radius: 16px;

      .search-filter-item__header {
        @include flex-base;
        justify-content: space-between;
        padding: 13px 0;
      }

      .search-filter-item__header.open + .search-filters {
        display: inline-flex;
      }

      h3 {
        font-family: sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        color: black;
      }
    }
    .search-filter-item__container.active {
      border: 1px solid $framework-borders;
    }

    .search-filters {
      display: none;
      flex-wrap: wrap;
      gap: 10px;
      padding: 13px 0;
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
