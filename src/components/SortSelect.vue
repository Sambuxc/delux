<script setup>
import IconDown from "./icons/IconDown.vue";
</script>

<template>
  <div class="sort__select">
    <p>Lowest price</p>
    <IconDown />
  </div>
</template>

<style lang="scss">
.sort__select {
  @include flex-base;
  justify-content: flex-end;
  gap: 5px;
  order: 3;
  padding: 23px 13px 6px 0;
  width: 50%;
  background-color: $white;

  @media (min-width: 768px) {
    justify-content: center;
    padding: 13px 18px 13px 13px;
    height: 50px;
    width: fit-content;
    white-space: nowrap;
    border-radius: 16px;
    background: $framework-light;

    p {
      padding-right: 14px;
      color: $text-grey;
    }
  }
}
</style>