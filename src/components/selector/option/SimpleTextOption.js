import Blits from '@lightningjs/blits'
import ItemBase from '../ItemBase'
import Button from '../../Button'

export default Blits.Component('SimpleTextOption', {
  components: { Button },
  template: `
    <Element>
      <!-- <Button y="40" w="$w" h="$h">
                <Element w="30" h="30" color="00ff00" />
                <Text :content="$item.text" mount="{x: 0.5}" :x="$w/2" />
              </Button> -->
      <Element w="$w" h="$h" color="#808080" :alpha="$hasFocus" :effects="[$shader('radius', {radius: 5})]" />
      <Text :content="$item.text" mount="{x: 0.5}" :x="$w/2" />
    </Element>
  `,
  props: ['item', 'w', 'h'],
  // ...ItemBase,
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    focus() {
      this.$log.info('Got focus')
      this.$emit('optionHighlighted', this.value)
    },
    unfocus() {
      this.$log.info('Lost focus')
    },
  },
  input: {
    enter() {
      this.$log.info('Emitting option selected event')
      // this.$emit('SimpleTextOptionSelected', this.item.value)
      this.parent.itemSelected({ value: this.item.value })
    },
  },
})
