<template>
  <magic-container>
    <magic-header></magic-header>
    <magic-page-title title="Changing color for AK001-ZJ210"></magic-page-title>
    <magic-content>
      <magic-block :inline="true" :horizontalCenter="true" :fadeIn="true">
        <magic-color-picker></magic-color-picker>
      </magic-block>
      <magic-block :verticalCenter="true" height="151px">
        <magic-text type="smaller">Brightness:</magic-text>
        <magic-input-range></magic-input-range>
      </magic-block>
      <magic-block>
        <magic-text type="smaller">Presets:</magic-text>
        <magic-block :inline="true">
          <magic-button :boxy="true" color="#E200FF" :spacerRight="true"></magic-button>
          <magic-button :boxy="true" color="transparent">
            <magic-icon icon="plus"></magic-icon>
          </magic-button>
        </magic-block>
      </magic-block>
    </magic-content>
  </magic-container>
</template>

<script>
  export default {
  }
</script>
