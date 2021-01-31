<template>
  <input type="range" class="input-range" :min="min" :max="max" :step="step" v-model="value">
</template>

<script>
  export default {
    props: {
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      defaultValue: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        element: null,
        isChanging: false,
        value: this.defaultValue
      }
    },
    watch: {
      value: function(value) {
        this.$emit('input', value)
      }
    },
    mounted() {
      this.element = document.querySelector('.input-range')
      
      this.element.addEventListener('mousemove', this.handleMove)
      this.element.addEventListener('mousedown', this.handleDown)
      this.element.addEventListener('mouseup', this.handleUpAndLeave)
      this.element.addEventListener('mouseleave', this.handleUpAndLeave)
      this.element.addEventListener('click', this.setCssProperty)

      this.setCssProperty()
    },
    methods: {
      setCssProperty() {
        const percent =
          ((this.element.value - this.element.min) /
          (this.element.max - this.element.min)) *
          100

        this.element.style.setProperty("--webkitProgressPercent", `${percent}%`)
      },
      handleMove() {
        if (!this.isChanging) return

        this.setCssProperty()
      },
      handleUpAndLeave() {
        this.isChanging = false
      },
      handleDown() {
        this.isChanging = true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input-range {
    appearance: none;
    width: 100%;
    border-radius: 11px;
    --webkitProgressPercent: 0%;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      border-radius: 10px;
      background-image: linear-gradient(
        90deg,
        var(--accent-color) var(--webkitProgressPercent),
        var(--text-color) var(--webkitProgressPercent)
      );
    }

    &::-webkit-slider-thumb {
      box-shadow: 0 0 6px rgba(0, 0, 0, .8);
      border-radius: 100px;
      background-color: var(--accent-color);
      width: 10px;
      height: 10px;
      cursor: pointer;
      appearance: none;
      margin-top: -2px;
    }

    &:focus {
      outline: 0;
    }
  }
</style>
