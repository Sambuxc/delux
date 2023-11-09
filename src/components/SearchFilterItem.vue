<script setup>
import ButtonControlSwitch from './ButtonControlSwitch.vue'
import FiltersItem from './SearchFilterItem__FiltersItem.vue'

defineProps(['title'])
</script>

<template>
  <div class="search-filter-item">
    <div class="search-filter-item__header">
      <h3>{{ title }}</h3>

      <ButtonControlSwitch />
    </div>

    <div class="search-filter-item__filters">
      <FiltersItem filter-item-name="Abarth" />
      <FiltersItem filter-item-name="Alfa Romeo" />
      <FiltersItem filter-item-name="Audi" />
      <FiltersItem filter-item-name="BMW" />
      <FiltersItem filter-item-name="Citroën" />
      <FiltersItem filter-item-name="BS" />
      <FiltersItem filter-item-name="Abarth" />
      <FiltersItem filter-item-name="Alfa Romeo" />
      <FiltersItem filter-item-name="Audi" />
      <FiltersItem filter-item-name="BMW" />
      <FiltersItem filter-item-name="Citroën" />
      <FiltersItem filter-item-name="BS" />
      <FiltersItem filter-item-name="Abarth" />
      <FiltersItem filter-item-name="Alfa Romeo" />
      <FiltersItem filter-item-name="Audi" />
      <FiltersItem filter-item-name="BMW" />
      <FiltersItem filter-item-name="Citroën" />
      <FiltersItem filter-item-name="BS" />
      <FiltersItem filter-item-name="Abarth" />
      <FiltersItem filter-item-name="Alfa Romeo" />
      <FiltersItem filter-item-name="Audi" />
      <FiltersItem filter-item-name="BMW" />
      <FiltersItem filter-item-name="Citroën" />
      <FiltersItem filter-item-name="BS" />
      <FiltersItem filter-item-name="Abarth" />
      <FiltersItem filter-item-name="Alfa Romeo" />
      <FiltersItem filter-item-name="Audi" />
      <FiltersItem filter-item-name="BMW" />
      <FiltersItem filter-item-name="Citroën" />
      <FiltersItem filter-item-name="BS" />
    </div>
  </div>
</template>

<style lang="scss">
.search-filter-item {
  display: flex;
  flex-direction: column;
  padding: 0 13px;
  height: fit-content;

  border-radius: 16px;

  &__header {
    @include flex-base;
    justify-content: space-between;
    padding: 13px 0;
  }

  &__filters {
    display: none;
    flex-wrap: wrap;
    gap: 10px;
    padding: 13px 0;
  }

  &__header.open + &__filters {
    display: inline-flex;
  }

  h3 {
    font-family:
      'SF Pro Text',
      -apple-system,
      BlinkMacSystemFont,
      Roboto,
      'Segoe UI',
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    color: black;
  }
}
.search-filter-item[disabled] {
  opacity: 0.4;
}
/*
for when filters have been selected
.search-filter-item.active {
  border: 1px solid $framework-borders;
}*/
</style>
