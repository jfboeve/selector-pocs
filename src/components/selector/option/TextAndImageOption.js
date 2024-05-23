import Blits from '@lightningjs/blits'
import ItemBase from '../ItemBase'
/**
 * texts is a list of text that will be spaced evenly
 */
export default Blits.Component('TextAndImageOption', {
  template: `
    <Element>
      <Element w="$w" h="$h" color="#808080" :alpha="$hasFocus" :effects="[$shader('radius', {radius: 5})]" />
      <Text content="$item.text" x="$padding" />
      <Element :src="$item.imageSrc" w="$item.imageW" h="$item.imageH" :x="$w - $imageW" mount="{x: 0.5}" />
    </Element>
  `,
  props: [
    'item',
    'w',
    'h',
    {
      key: 'spacing',
      default: 50,
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
