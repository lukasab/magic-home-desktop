<template>
  <div class="header">
    <div v-if="$route.name != 'devices'" v-on:click="$router.push({ name: 'devices' })" class="header-left">
      <magic-icon icon="arrow-left"></magic-icon>
    </div>
    <magic-heading :type="2">Magic Control</magic-heading>
    <div v-if="$route.name == 'devices'" v-on:click="$router.push({ name: 'settings' })" class="header-right">
      <magic-icon icon="cog"></magic-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background-color: var(--secondary-color);
    height: 61px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    .header-left {
      margin-right: 10px;
      cursor: pointer;
    }

    .header-right {
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
