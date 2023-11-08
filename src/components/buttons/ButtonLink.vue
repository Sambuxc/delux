<template>
  <button v-if="buttonType === 'input'" :type="buttonType" class="btn">{{ text }}</button>
  <a v-else :href="url" class="btn" target="_blank">{{ text }}</a>
</template>

<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
    default: 'Button component'
  },
  url: String
})
</script>

<style lang="scss">
.btn {
  @include flex-base;
  justify-content: center;
  appearance: none;
  padding: 12px 25px;
  width: 100%;
  height: fit-content;
  border: 0;
  border-radius: 16px;
  background: $brand-primary;
  font-family: 'Overpass-variable';
  color: $text-white;
  font-size: 15px;
  line-height: 1.6;

  // @container (max-width:50px)
}
</style>
