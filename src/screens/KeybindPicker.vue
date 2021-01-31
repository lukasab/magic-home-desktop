<template>
  <magic-container>
    <magic-header></magic-header>
    <magic-page-title title="Changing keybind for AK001-ZJ210"></magic-page-title>
    <magic-content>
      <magic-block :inline="true">
        <magic-button :fullWidth="true" :spacerRight="true" :disabled="isSelecting" v-on:click="toggleRecordingState">
          {{ recordText }}
        </magic-button>
        <magic-button :fullWidth="true" :disabled="isRecording" v-on:click="toggleSelectingState">
          {{ selectText }}
        </magic-button>
      </magic-block>
      <magic-block height="310px">
        <magic-block v-show="isRecording" :spacerTop="true" :fadeIn="true">
          <magic-input placeholder="Give it a name!" :fullWidth="true" :defaultValue="keybindName" v-model="keybindName"></magic-input>
          <magic-block :spacerTop="true" :inline="true">
            <magic-block :inline="true" width="auto" v-for="(key, index) in keybind" v-bind:key="index">
              <magic-button type="secondary" :decorative="true">
                {{ key }}
              </magic-button>
              <magic-button v-if="keybind.length - 1 != index" :boxy="true" color="transparent" :decorative="true">
                <magic-icon icon="plus" :hoverAnimation="false"></magic-icon>
              </magic-button>
            </magic-block>
          </magic-block>
        </magic-block>
        <magic-block v-if="isSelecting" :spacerTop="true" :fadeIn="true">
          <magic-input-select :options="[{key: 'test', value: 'Living Room Toggler'}]" v-model="selectedKeybind"></magic-input-select>
        </magic-block>
      </magic-block>
      <magic-block>
        <magic-text type="smaller">Current keybind:</magic-text>
        <magic-block :inline="true">
          <magic-button type="secondary" :decorative="true">
            Ctrl
          </magic-button>
          <magic-button :boxy="true" color="transparent" :decorative="true">
            <magic-icon icon="plus" :hoverAnimation="false"></magic-icon>
          </magic-button>
          <magic-button type="secondary" :decorative="true">
            F1
          </magic-button>
        </magic-block>
      </magic-block>
    </magic-content>
  </magic-container>
</template>

<script>
  export default {
    data() {
      return {
        isRecording: false,
        isSelecting: false,
        keybindName: null,
        keybind: ['Ctrl', '`'],
        selectedKeybind: null
      }
    },
    computed: {
      recordText: function () {
        if (this.keybind.length > 0 && this.keybindName && this.isRecording) {
          return 'Save keybind'
        } else if (this.isRecording) {
          return 'Stop recording'
        }

        return 'Record keybind'
      },
      selectText: function () {
        if (this.selectedKeybind && this.isSelecting) {
          return 'Save keybind'
        } else if (this.isSelecting) {
          return 'Create keybind'
        }

        return 'Use existing keybind'
      }
    },
    methods: {
      toggleRecordingState() {
        this.isRecording = !this.isRecording

        this.keybind = []
        this.keybindName = null

        if (this.keybind.length > 0 && this.keybindName && this.isRecording) {
          //
        }
      },
      toggleSelectingState() {
        this.isSelecting = !this.isSelecting

        this.selectedKeybind = null

        if (this.isSelecting && this.selectedKeybind) {
          //
        }
      }
    }
  }
</script>
