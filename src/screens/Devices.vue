<template>
  <magic-container>
    <magic-header></magic-header>
    <magic-page-title title="Devices">
      <magic-button v-on:click="discoverDevices">
        Discover devices
      </magic-button>
    </magic-page-title>
    <magic-content :scrollable="true">
      <magic-block v-if="discovering" :inline="true" :verticalCenter="true" :horizontalCenter="true" :fadeIn="true" height="100%">
        <magic-icon icon="lightbulb" classes="color-pulse"></magic-icon>
        <magic-text>Discovering devices...</magic-text>
      </magic-block>
      <magic-list v-else>
        <magic-list-item>
          <magic-button :boxy="true" color="#E200FF">
            <magic-icon icon="power" color="#fff"></magic-icon>
          </magic-button>
          <magic-input :invisible="true" :large="true" :defaultValue="'AK001-ZJ210'" @input="changeDeviceName"></magic-input>

          <template v-slot:right>
            <magic-button type="secondary" :boxy="true" :spacerRight="true" v-on:click="$router.push({ name: 'color-picker' })">
              <magic-icon icon="palette"></magic-icon>
            </magic-button>
            <magic-button type="secondary" :boxy="true" v-on:click="$router.push({ name: 'keybind-picker' })">
              <magic-icon icon="keyboard"></magic-icon>
            </magic-button>
          </template>
        </magic-list-item>
        <magic-list-item :lastItem="true">
          <magic-button :boxy="true" color="rgba(196, 201, 33, .2)">
            <magic-icon icon="power" color="#fff"></magic-icon>
          </magic-button>
          <magic-input :invisible="true" :large="true" :defaultValue="'Living Room'" @input="changeDeviceName"></magic-input>

          <template v-slot:right>
            <magic-button type="secondary" :boxy="true" :spacerRight="true">
              <magic-icon icon="palette"></magic-icon>
            </magic-button>
            <magic-button type="secondary" :boxy="true">
              <magic-icon icon="keyboard"></magic-icon>
            </magic-button>
          </template>
        </magic-list-item>
      </magic-list>
    </magic-content>
  </magic-container>
</template>

<script>
  export default {
    data() {
      return {
        discovering: false
      }
    },
    methods: {
      discoverDevices() {
        this.discovering = true

        setTimeout(() => {
          this.discovering = false
        }, 3000)
      },
      changeDeviceName(name) {
        console.log(name)
      }
    }
  }
</script>

<style lang="scss">
  .color-pulse {
    animation: color-pulse 2s infinite alternate;
  }

  @keyframes color-pulse {
    0% {color: #4CA0E0;}
    25% {color: #FFB802;}
    50% {color: #D9442F;}
    75% {color: #3BC492;}
    100% {color: #e5e5e5;}
  }
</style>
