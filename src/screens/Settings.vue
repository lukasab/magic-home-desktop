<template>
  <magic-container>
    <magic-header></magic-header>
    <magic-page-title title="Settings"></magic-page-title>
    <magic-content :scrollable="true">
      <magic-list>
        <magic-list-item>
          <magic-block width="80%">
            <magic-text type="heading">Enable light theme</magic-text>
          </magic-block>

          <template v-slot:right>
            <magic-toggle @input="changeValue"></magic-toggle>
          </template>
        </magic-list-item>
        <magic-list-item>
          <magic-block width="80%">
            <magic-text type="heading">Color preset syncing</magic-text>
            <magic-text type="small">Save yourself a few clicks and let the app change color across all devices.</magic-text>
          </magic-block>

          <template v-slot:right>
            <magic-toggle></magic-toggle>
          </template>
        </magic-list-item>
      </magic-list>
    </magic-content>
  </magic-container>
</template>

<script>
  export default {
    methods: {
      changeValue(value) {
        if (value) {
          document.body.classList.remove('dark-theme')
          document.body.classList.add('light-theme')
        } else {
          document.body.classList.remove('light-theme')
          document.body.classList.add('dark-theme')
        }
      }
    }
  }
</script>
