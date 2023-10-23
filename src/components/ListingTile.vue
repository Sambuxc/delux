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
      <img class="md:hidden" :src="imgUrl" :alt="name" />
      <img class="md:hidden" :src="imgUrl" :alt="name" />
      <img class="md:hidden" :src="imgUrl" :alt="name" />
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
          <p class="monthly-price">
            <span><strong>£{{ monthly_price }}</strong></span>
            <span class="unit">/mo (PCP)</span>
          </p>
          <p class="total-price" v-if="discount_price">
            <span class="text-red">£{{ discount_price }}</span>
            &nbsp;
            <span class="strikeout">£{{ total_price }}</span>
          </p>
          <p class="total-price" v-else>
            <span>£{{ total_price }}</span>
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.listings__tile {
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    overflow: hidden;
    width: $tile-width-tablet;
    border-radius: 16px;
    background: $text-white;
    box-shadow: 0px 6px 25px 0px rgba(0, 0, 0, 0.15);
  }

  &--details {
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media (min-width: 768px) {
      padding: 10px;
    }
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
      justify-content: center;
      padding: 1px 10px;
      height: fit-content;

      font-size: 12px;
      line-height: 20px;
      color: $text-white;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: $framework-dark-1;

      @media (min-width: 768px) {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 16px;
        height: 30px;
      }
    }

    &--caption {
      color: $text-grey;
      font-size: 12px;
      line-height: 12px;
    }
  }

  &--details__spec {
    @include flex-base;
    padding-top: 6px;

    > div {
      width: 50%;
      line-height: 18px;

      @media (min-width: 768px) {
        width: 100%;
      }
    }

    &--price {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
      }
      
      .monthly-price {
        font-size: 14px;

        @media (min-width: 768px) {
          padding: 10px 0 5px 0;
          font-size: 18px;
        }

        .unit {
          padding-left: 4px;
          font-size: 12px;
        }
      }

       .total-price {
        span:last-child::after {
          content: 'Calculate finance';
          padding-left: 8px;
          position: relative;
          display: inline-block;
          font-size: inherit;
          color: $brand-primary;
        }
       }
    }

    p {
      display: inline-block;
      color: $text-grey;
      font-size: 12px;
    }
  }

  &--details__spec--details {
    @media (min-width: 768px) {
      position: absolute;
      top: 60%;
      left: 10px;
      display: flex;
    }

    .line-group {
      @include flex-base;

      @media (min-width: 768px) {
        gap: 5px;
      }
    }

    .line-group:first-child {
      @media (min-width: 768px) {
        margin-right: 5px;
      }
    }

    p {
      @media (min-width: 768px) {
        padding: 1px 10px;
        color: $text-white;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background: $framework-dark-1;
      }
    }

    p + p {
      @include flex-base;
      gap: 4px;
    }

    p + p::before {
      content: '';
      display: block;
      position: relative;
      left: 0;
      margin-left: 4px;
      height: 10px;
      width: 1px;
      background-color: $framework-borders;

      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  &--gallery {
    padding: 0 13px;
    display: flex;
    gap: 5px;
    overflow-x: scroll;

    @media (min-width: 768px) {
      padding: 0;
      overflow: hidden;
    }

    img {
      width: 113px;
      height: 84px;
      border-radius: 16px;

      @media (min-width: 768px) {
        width: 100%;
        height: 250px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
}
</style>
