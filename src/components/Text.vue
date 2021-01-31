<template>
  <p v-bind:class="type">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    props: {
      type: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-weight: 600;
    color: var(--text-color);
    margin: 0;

    &.heading {
      font-size: 0.9em;
      color: var(--heading-color);
    }

    &.smaller {
      font-size: 0.9em;
    }

    &.small {
      font-weight: normal;
      font-size: 0.8em;
    }
  }
</style>
