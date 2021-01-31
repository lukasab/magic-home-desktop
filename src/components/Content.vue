<template>
  <div class="content" v-bind:class="{ 'content-scrollable': scrollable }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      scrollable: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    height: 433px;
    overflow-y: hidden;
    padding: 20px;

    &.content-scrollable {
      overflow-y: auto;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>
