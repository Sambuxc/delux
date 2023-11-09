<script setup>
import ButtonLink from "@/components/ButtonLink.vue"
</script>

<template>
  <div class="listings__tile--ad">
    <h3>Value your car</h3>
    <p>Find out the value of your car in just a few minutes.</p>
    <form action="">
      <div class="form-input">
        <label for="vrm" aria-required="true">VRM</label>
        <input id="vrm" type="text" name="vrm" placeholder="Enter VRM" />
      </div>
      <div class="form-input">
        <label for="mileage" aria-required="true">Mileage</label>
        <input id="mileage" type="text" name="mileage" placeholder="Enter mileage" />
      </div>

      <button-link buttonType="input" text="Value my car"></button-link>
    </form>
  </div>
</template>

<style lang="scss">
.listings__tile--ad {
  display: none;

  @media (min-width: 768px) {
    @include flex-base;
    flex-direction: column;
    padding: 30px;
    width: $tile-width-tablet;
    border-radius: 16px;
    border: 1px solid $framework-borders;
    background: $framework-light;
  }

  p {
    font-size: 16px;
    text-align: center;
  }


  form {
    @include flex-base;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    .form-input {
      width: 100%;
      display: flex;
      flex-direction: column
    }

    label {
      position: relative;
      top: 10px;
      left: 7px;
      padding: 0 6px;
      width: fit-content;
      font-size: 12px;
      border-radius: 12px;
      background-color: $framework-light;
    }

    label[aria-required=true]::after {
      content: '*';
      padding-left: 2px;
      color: red;
    }

    input[type=text] {
      padding: 13px;
      height: 50px;
      border: 0;
      border-radius: 16px;
      background-color: $text-white;
    }
  }
}
</style>
