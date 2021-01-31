<script>
  export default {
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    render(h) {
      let heading = `h${this.type}`

      return h(heading, this.$slots.default);
    }
  }
</script>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5 {
    font-family: 'Avenir Next';
    font-weight: 700;
    color: var(--heading-color);
    margin: 0;
  }
</style>
