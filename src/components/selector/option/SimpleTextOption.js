import Blits from '@lightningjs/blits'

export default Blits.Component('SimpleTextOption', {
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
    		mount="{x: 0.5}"
    		:x="$w/2"
    	/>
    </Element>
  `,
  props: ['text', 'w', 'h', 'value'],
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    focus() {
      this.$log.info('Got focus')
      this.alpha = 1
      this.$emit('optionHighlighted', this.value)
    },
    unfocus() {
      this.$log.info('Lost focus')
      this.alpha = 0
    },
  },
  input: {
    enter() {
      this.$log.info('Emitting option selected event')
      this.$emit('SimpleTextOptionSelected', this.value)
    },
  },
})
