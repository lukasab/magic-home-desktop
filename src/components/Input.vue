<template>
  <input :type="type" class="input" v-bind:class="{ 'input-invisible': invisible, 'input-large': large, 'input-full-width': fullWidth }" :spellcheck="checkSpelling" :placeholder="placeholder" v-model="inputContent">
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String
      },
      defaultValue: {
        type: String
      },
      invisible: {
        type: Boolean,
        default: false
      },
      checkSpelling: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputContent: this.defaultValue
      }
    },
    watch: {
      defaultValue: function (value) {
        this.inputContent = value
      },
      inputContent: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    background-color: transparent;
    border: 1px solid var(--secondary-color);
    color: var(--text-color);
    font-size: 0.75em;
    padding: 4px 10px;
    font-family: 'Axiforma';
    font-weight: 600;

    &::placeholder {
      color: var(--text-color);
    }

    &.input-invisible {
      border-color: transparent;
      color: var(--heading-color);
    }

    &.input-large {
      font-size: 1em;
    }

    &.input-full-width {
      width: 100%;
    }

    &:focus {
      outline: 0;
    }
  }
</style>
