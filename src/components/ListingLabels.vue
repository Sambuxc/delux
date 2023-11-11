<template>
  <div class="listings__tile--gallery__labels">
    <div v-for="(group, index) in groupedStrings()" :key="index" class="line-group">
      <p v-for="(string, i) in group" :key="i">{{ string }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: String,
    required: true
  }
})

const labelsArr = props.labels.split(',');


/**
 * Group strings into line group pairs from an array.
 *
 * @param {Array} specArr - The input array of strings to be grouped.
 * @returns {Array} An array containing sub-arrays with pairs of strings.
 */
function groupedStrings() {
  // an array to store the groups of strings.
  const groups = [];
  for (let i = 0; i < this.labelsArr.length; i += 2) {
    // Slice the input array to create a group of 2 strings.
    const group = this.labelsArr.slice(i, i + 2);
    groups.push(group);
  }
  return groups;
}
</script>

<style scoped lang="scss">

</style>
