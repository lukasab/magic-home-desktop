<template>
  <div class="block" v-bind:class="blockClass()" v-bind:style="{ width: (width) ? width : '100%', height: (height) ? height : 'auto' }">
    <div v-if="!inline && (verticalCenter || horizontalCenter)" class="block-inner">
      <slot></slot>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String
      },
      height: {
        type: String
      },
      inline: {
        type: Boolean,
        default: false
      },
      verticalCenter: {
        type: Boolean,
        default: false
      },
      horizontalCenter: {
        type: Boolean,
        default: false
      },
      fadeIn: {
        type: Boolean,
        default: false
      },
      spacerTop: {
        type: Boolean,
        default: false
      },
      spacerBottom: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      blockClass() {
        let classes = []

        if (this.inline) {
          classes.push('block-inline')
        }

        if (this.verticalCenter) {
          classes.push('block-vertical-center')
        }

        if (this.horizontalCenter) {
          classes.push('block-horizontal-center')
        }

        if (this.fadeIn) {
          classes.push('block-fade-in')
        }

        if (this.spacerTop) {
          classes.push('block-spacer-top')
        }

        if (this.spacerBottom) {
          classes.push('block-spacer-bottom')
        }

        return classes
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    display: block;

    &.block-fade-in {
      animation: fade-in 2s;
    }

    &.block-spacer-top {
      padding-top: 10px;
    }

    &.block-spacer-bottom {
      padding-bottom: 10px;
    }

    &:not(.block-inline) {
      &.block-vertical-center {
        .block-inner {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &.block-horizontal-center {
        .block-inner {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    &.block-inline {
      display: flex;

      &.block-vertical-center {
        align-items: center;
      }

      &.block-horizontal-center {
        justify-content: center;
      }
    }
  }

  @keyframes fade-in {
    from { 
      opacity: 0; 
    }

    to {
      opacity: 1; 
    }
  }
</style>
