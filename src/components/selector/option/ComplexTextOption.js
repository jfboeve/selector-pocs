import Blits from '@lightningjs/blits'
import ItemBase from '../ItemBase'

/**
 * texts is a list of text that will be spaced evenly
 */
export default Blits.Component('ComplexTextOption', {
  template: `
    <Element>
      <Element w="$w" h="$h" color="#808080" :alpha="$hasFocus" :effects="[$shader('radius', {radius: 5})]" />
      <Text :for="(text, index) in $item.texts" content="$text" :x="$padding + $index * $spacing" />
    </Element>
  `,
  props: [
    'item',
    'w',
    'h',
    {
      key: 'spacing',
      default: 300,
    },
    {
      key: 'padding',
      default: 10,
    },
  ],
  ...ItemBase,
  // state() {
  //   return {
  //     alpha: 0,
  //   }
  // },
  // hooks: {
  //   focus() {
  //     this.$log.info('Got focus')
  //     this.alpha = 1
  //   },
  //   unfocus() {
  //     this.$log.info('Lost focus')
  //     this.alpha = 0
  //   },
  // },
  // input: {
  //   enter() {
  //     this.$log.info('Emitting option selected event')
  //     // this.$emit('ItemSelected', this.item.value)
  //     this.parent.itemSelected({ value: this.item.value })
  //   },
  // },
})
