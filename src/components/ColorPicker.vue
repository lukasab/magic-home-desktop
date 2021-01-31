<template>
  <div class="picker">
    <div id="color-picker"></div>
  </div>
</template>

<script>
  import iro from '@jaames/iro'

  export default {
    props: {
      width: {
        type: Number,
        default: 187
      },
      initialColor: {
        type: String,
        default: '#fff'
      }
    },
    data() {
      return {
        colorWheel: null
      }
    },
    mounted() {
      this.colorWheel = new iro.ColorPicker('#color-picker', {
        layout: [
          { 
            component: iro.ui.Wheel
          }
        ],
        width: this.width,
        color: this.initialColor
      })

      this.colorWheel.on('color:change', (color) => {
        this.$emit('input', {
          hex: color.hex,
          rgba: color.rgb
        })
      })
    }
  }
</script>
