<template>
  <span class="mdi" v-bind:class="iconClass()" v-bind:style="{ color: color }"></span>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String
      },
      color: {
        type: String
      },
      classes: {
        type: String,
        default: ''
      },
      hoverAnimation: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      iconClass() {
        let classes = []

        classes.push(`mdi-${this.icon}`)

        this.classes.split(' ').forEach((value) => {
          classes.push(value)
        })

        if (this.hoverAnimation) {
          classes.push('mdi-hover-animation')
        }

        return classes
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mdi {
    color: var(--icon-color);
    transition: .3s;
    font-size: 1.5em;
    position: relative;
    top: 2px;

    &.mdi-hover-animation {
      &:hover {
        opacity: .7;
      }
    }
  }
</style>
