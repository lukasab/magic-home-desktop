<template>
  <div class="input-select">
    <div class="input-select-option input-select-placeholder" v-on:click="toggleListState">
      <template v-if="selectedItem != null">
        {{ options[selectedItem].value }}
      </template>
      <template v-else>
        {{ placeholder }}
      </template>
    </div>
    <div v-if="!listHidden" class="input-select-options">
      <div class="input-select-option" v-for="(option, index) in options" v-bind:key="option.key" v-on:click="selectItem(index)">
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Select'
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        listHidden: true,
        selectedItem: null
      }
    },
    methods: {
      toggleListState() {
        this.listHidden = !this.listHidden
      },
      selectItem(index) {
        this.listHidden = true
        this.selectedItem = index

        this.$emit('input', this.options[index].key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $cellHeight: 28px;

  .input-select {
    .input-select-options {
      position: relative;
      bottom: 0;
      width: 100%;
      animation: fadeInTop .3s ease-in both;

      .input-select-option {
        border-top: 1px solid var(--primary-color);
      }
    }

    .input-select-option {
      height: $cellHeight;
      width: 100%;
      background-color: var(--secondary-color);
      color: var(--text-color);
      line-height: $cellHeight;
      font-size: 0.8em;
      padding: 0 10px;
      font-weight: 600;
      cursor: pointer;

      &.input-select-placeholder {
        &:after {
          content: '\F0140';
          font-family: 'Material Design Icons';
          font-size: 1.5em;
          position: absolute;
          right: 10px;
          color: var(--heading-color);
        }
      }
    }
  }

  @keyframes fadeInTop {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
