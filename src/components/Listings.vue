<script setup>
import ListingTile from "./ListingTile.vue";
</script>

<template>
  <section class="listings">
    <ListingTile name="2014 (64) Mercedes-Benz" desc="CLA 250e Coupe Shooting Break" spec="32k miles, Hybrid, Manual, SUV" monthly_price="550.90" total_price="23,300" imgUrl="mercedes-car.jpeg" />
    <ListingTile name="2019 (19) Renault Zoe" desc="i R135 Rapid Charge ZE50" spec="325 miles,EV,Automatic,Hatchback" monthly_price="550.90" total_price="23,300" discount_price="23,300" imgUrl="mercedes-car.jpeg" />
  </section>
</template>

<style lang="scss">
.listings {
  padding: 20px 0;
}
</style>
