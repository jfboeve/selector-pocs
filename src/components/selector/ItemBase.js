export default {
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    focus() {
      this.$log.info('Got focus')
    },
    unfocus() {
      this.$log.info('Lost focus')
    },
  },
  input: {
    enter() {
      this.$log.info('Emitting option selected event')
      // this.$emit('ItemSelected', this.value)
      this.parent.itemSelected({ value: this.item.value })
    },
  },
}
