<script setup>
import ListingTile from "./ListingTile.vue";
import ListingTileAd from "./ListingTileAd.vue";
import Pagination from "./Pagination.vue";
import SortSelect from "./SortSelect.vue";
</script>

<template>
  <section class="listings">
    <ListingTile name="2014 (64) Mercedes-Benz" desc="CLA 250e Coupe Shooting Break" spec="32k miles,Hybrid,Manual,SUV" monthly_price="550.90" total_price="23,300" imgUrl="mercedes-car.jpeg" />
    <ListingTile name="2019 (19) Renault Zoe" desc="i R135 Rapid Charge ZE50" spec="325 miles,EV,Automatic,Hatchback" monthly_price="550.90" total_price="23,300" discount_price="22,300" imgUrl="renault.jpeg" />
    <ListingTile name="2020 (20) Peugeot 208" desc="1.2 PureTech 100 GT-Line" spec="Petrol,Automatic,Hatchback" monthly_price="550.90" total_price="23,300" discount_price="22,300" imgUrl="peugeot.jpeg" />
    <ListingTileAd />
    <ListingTile name="2014 (64) Mercedes-Benz" desc="CLA 250e Coupe Shooting Break" spec="32k miles,Hybrid,Manual,SUV" monthly_price="550.90" total_price="23,300" imgUrl="mercedes-car.jpeg" />
    <ListingTile name="2019 (19) Renault Zoe" desc="i R135 Rapid Charge ZE50" spec="325 miles,EV,Automatic,Hatchback" monthly_price="550.90" total_price="23,300" discount_price="22,300" imgUrl="renault.jpeg" />
    <ListingTile name="2020 (20) Peugeot 208" desc="1.2 PureTech 100 GT-Line" spec="Petrol,Automatic,Hatchback" monthly_price="550.90" total_price="23,300" discount_price="22,300" imgUrl="peugeot.jpeg" />
  </section>

  <div class="listings-footer">
    <Pagination />
    <a href="#">Back to top</a>
    <SortSelect />
  </div>
</template>

<style lang="scss">
.listings {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  
  @media (min-width: 490px) {
    gap: $listings-gap-tablet;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 0 0 50px;
    width: calc($tile-width-tablet * 2) + $listings-gap-tablet;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.listings-footer {
  @include flex-base;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: calc($tile-width-tablet * 2) + $listings-gap-tablet;
  }

  a {
    order: 2;
    margin: 0 auto;
    display: block;
    width: fit-content;
    text-align: center;
    color: $text-grey;
    font-size: 16px;

    @media (min-width: 768px) {
      order: 1;
      margin: 0 auto 0 0;
    }

    &::after {
      content: '';
      position: relative;
      top: -4px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: $text-grey;
    }
  }

  .sort__select {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      order: 3;
    }
  }
}
</style>
