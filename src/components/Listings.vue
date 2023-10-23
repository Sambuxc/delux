<script setup>
import ListingTile from "./ListingTile.vue";
import ListingTileAd from "./ListingTileAd.vue";
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
</template>

<style lang="scss">
.listings {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: calc($tile-width-tablet * 2) + $listings-gap-tablet;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: $listings-gap-tablet;
  }
}
</style>
