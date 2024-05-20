import Blits from '@lightningjs/blits'

/**
 * texts is a list of text that will be spaced evenly
 */
export default Blits.Component('ComplexTextOption', {
  template: `
    <Element>
    	<Element
    		w="$w"
    		h="$h"
    		color="#808080"
    		:alpha="$alpha"
    		:effects="[$shader('radius', {radius: 5})]"
    	/>
    	<Text
    		:for="(text, index) in $texts"
    		content="$text"
    		:x="$padding + $index * $spacing"
    	/>
    </Element>
  `,
  props: [
    'texts',
    'w',
    'h',
    'value',
    {
      key: 'spacing',
      default: 50,
    },
    {
      key: 'padding',
      default: 10,
    },
  ],
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    init() {
      console.log('Complex text option')
    },
    focus() {
      this.$log.info('Got focus')
      this.alpha = 1
    },
    unfocus() {
      this.$log.info('Lost focus')
      this.alpha = 0
    },
  },
  input: {
    enter() {
      this.$log.info('Emitting option selected event')
      this.$emit('ComplexTextOptionSelected', this.value)
    },
  },
})
