<template>
  <main>
    <transition :name="transition">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        transition: ''
      }
    },
    watch: {
      $route(to) {
        this.transition = (to.name == 'devices') ? 'prev' : 'next';
      }
    }
  }
</script>

<style lang="scss">
  $mdi-font-path: '~@mdi/font/fonts';

  @import '~@mdi/font/scss/materialdesignicons';

  @font-face {
    font-family: 'Avenir Next';
    font-weight: bold;
    src: url('assets/fonts/Avenir Next Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Axiforma';
    src: url('assets/fonts/Axiforma Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Axiforma';
    font-weight: 600;
    src: url('assets/fonts/Axiforma SemiBold.otf') format('opentype');
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    overflow: hidden;
    font-family: 'Axiforma';
    user-select: none;

    --accent-color: #0076fe;
    --accent-text-color: #fff;
    --primary-color: #1E1F24;
    --secondary-color: #25252D;
    --heading-color: #fff;
    --text-color: #8e8e90;
    --icon-color: #fff;
    --button-text-color: #fff;
    --toggle-background-color: var(--secondary-color);
    --toggle-icon-color: var(--text-color);

    &.light-theme {
      --primary-color: #F9F9F9;
      --secondary-color: #fff;
      --heading-color: #2E395F;
      --text-color: #CED1DA;
      --icon-color: #2E395F;
      --button-text-color: #2E395F;
      --toggle-background-color: #CED1DA;
      --toggle-icon-color: #8E8E90;
    }
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  main {
    min-height: 100%;
    display: grid;
    grid-template: 'main';
    flex: 1;
    position: relative;
    z-index: 0;
    overflow-x: hidden;

    & > :first-child {
      z-index: 1001;
    }

    * {
      grid-area: main;
      position: relative;
    }
  }

  /* Transitions */

  .next-leave-to {
    animation: leaveToLeft 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1000;
  }

  .next-enter-to {
    animation: enterFromRight 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1001;
  }

  .prev-leave-to {
    animation: leaveToRight 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1001;
  }

  .prev-enter-to {
    animation: enterFromLeft 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 1000;
  }

  @keyframes leaveToLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-25%);
      filter: brightness(0.1);
    }
  }

  @keyframes enterFromLeft {
    from {
      transform: translateX(-25%);
      filter: brightness(0.5);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes leaveToRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes enterFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
