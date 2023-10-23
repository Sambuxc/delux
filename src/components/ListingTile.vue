<script setup>
import IconStar from "./icons/IconStar.vue";

const props = defineProps(['name', 'desc', 'spec', 'total_price', 'discount_price', 'monthly_price', 'imgUrl'])

const specArr = props.spec.split(',');

/**
 * Group strings into pairs from an array.
 *
 * @param {Array} specArr - The input array of strings to be grouped.
 * @returns {Array} An array containing sub-arrays with pairs of strings.
 */
function groupedStrings() {
  // an array to store the groups of strings.
  const groups = [];
  for (let i = 0; i < this.specArr.length; i += 2) {
    // Slice the input array to create a group of 2 strings.
    const group = this.specArr.slice(i, i + 2);
    groups.push(group);
  }
  return groups;
}
</script>

<template>
  <div class="listings__tile">
    <div class="listings__tile--gallery">
      <img :src="imgUrl" :alt="name" />
      <img :src="imgUrl" :alt="name" />
      <img :src="imgUrl" :alt="name" />
      <img :src="imgUrl" :alt="name" />
    </div>
    <div class="listings__tile--details">
      <div class="listings__tile--details__heading">
        <h3>
          <span class="text">{{ name }}</span>
          <span class="button__tag">New</span>
          <IconStar />
        </h3>
        <p class="listings__tile--details__heading--caption">
          {{ desc }}
        </p>
      </div>

      <div class="listings__tile--details__spec">
        <div class="listings__tile--details__spec--details">
          <div class="line-group" v-for="(group, index) in groupedStrings()" :key="index">
            <p v-for="(string, i) in group" :key="i">{{ string }}</p>
          </div>
        </div>
        <div class="listings__tile--details__spec--price">
          <p>
            <strong>£{{ monthly_price }}</strong> /mo (PCP)
          </p>
          <p>£{{ total_price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.listings__tile {
  display: flex;
  flex-direction: column;

  &--details {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  &--details__heading {
    display: flex;
    flex-direction: column;

    h3 {
      @include flex-base;
      width: 100%;
      gap: 10px;
      font-size: 14px;

      .text {
        flex-grow: 1;
      }
    }

    .button__tag {
      @include flex-base;
      padding: 1px 10px;
      height: fit-content;

      font-size: 12px;
      color: $text-white;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: $framework-dark-1;
      backdrop-filter: blur(5px);
    }

    &--caption {
      color: $text-grey;
      font-size: 12px;
    }
  }

  &--details__spec {
    @include flex-base;
    padding-top: 6px;

    > div {
      width: 50%;
    }

    &--price p:first-child {
      font-size: 14px;
    }

    p {
      display: inline-block;
      color: $text-grey;
      font-size: 12px;
    }
  }

  &--details__spec--details {
    .line-group {
      line-height: 18px;
    }

    p + p {
      margin-left: 5px;
      padding-left: 5px;
      border-left: 1px solid $framework-borders;
    }
  }

  &--gallery {
    padding: 0 13px;
    display: flex;
    gap: 5px;
    overflow-x: scroll;
  }

  &--gallery img {
    width: 113px;
    height: 84px;
    border-radius: 16px;
  }
}
</style>
