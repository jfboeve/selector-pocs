import Blits from '@lightningjs/blits'

/**
 * texts is a list of text that will be spaced evenly
 */
export default Blits.Component('TextAndImageOption', {
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
    		content="$text"
    		x="$padding"
    	/>
    	<Element
    		src="$imageSrc"
    		w="$imageW"
    		h="$imageH"
    		:x="$w - $imageW"
    		mount="{x: 0.5}"
    	/>
    </Element>
  `,
  props: [
    'imageSrc',
    'text',
    'imageW',
    'imageH',
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
      console.log('TextAndImage option')
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
      this.$emit('TextAndImageOptionSelected', this.value)
    },
  },
})
