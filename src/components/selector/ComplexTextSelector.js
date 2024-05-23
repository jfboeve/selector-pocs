import Blits from '@lightningjs/blits'
import ComplexTextOption from './option/ComplexTextOption'

// look at the possibility of 'extending' a selector 'class'
/**
 * Accepts a number of options allowing the user to select between them
 * @emits optionSelected - components that use this component must
 * listen for this event and act on the event accordingly
 */
export default Blits.Component('ComplexTextSelector', {
  components: { ComplexTextOption },
  template: `
    <Element w="$optionWidth" :h="$optionHeight * $viewableOptions" mount="0.5">
      <Element
        src="assets/images/navigationIcons/upArrow.png"
        w="36"
        h="21"
        x="50%"
        y="-21"
        mount="0.5"
        :alpha="$alphaUpArrow"
      />
      <Element w="$optionWidth" :h="$optionHeight * $viewableOptions" clipping="true">
        <Element :y.transition="$optionsY">
          <ComplexTextOption
            :for="(option,index) in $options"
            :texts="$option.texts"
            w="$optionWidth"
            spacing="$spacing"
            h="$optionHeight"
            :y="($optionHeight * $index)"
            :ref="'option' + ($index + 1)"
            value="$option.value"
          />
        </Element>
      </Element>
      <Element
        src="assets/images/navigationIcons/downArrow.png"
        w="36"
        h="21"
        :y="($optionHeight * $viewableOptions) + 21"
        x="50%"
        mount="0.5"
        :alpha="$alphaDownArrow"
      />
    </Element>
  `,
  hooks: {
    init() {
      this.$listen('ComplexTextOptionSelected', (value) => {
        this.$emit(`${this.ref}`, value)
      })
    },
    focus() {
      this.selectedOption = 1
      if (this.options.length > this.viewableOptions) {
        this.alphaDownArrow = 1
      }
    },
  },
  props: [
    'options',
    'optionWidth',
    'optionHeight',
    'spacing',
    {
      key: 'viewableOptions',
      default: 3,
    },
  ],
  state() {
    return {
      selectedOption: 0,
      optionsY: 0,
      alphaUpArrow: 0,
      alphaDownArrow: 0,
    }
  },
  watch: {
    selectedOption(v) {
      const option = this.select(`option${v}`)
      if (option) option.focus()
    },
  },
  input: {
    up() {
      if (this.selectedOption > 1) {
        this.selectedOption = this.selectedOption - 1
        if (this.selectedOption % this.viewableOptions == 0) {
          this.scroll('up')
        }
      }
    },
    down() {
      if (this.selectedOption != this.options.length) {
        this.selectedOption = this.selectedOption + 1
        if ((this.selectedOption - 1) % this.viewableOptions == 0) {
          this.scroll('down')
        }
      }
    },
  },
  methods: {
    scroll(direction) {
      this.toggleArrows()
      switch (direction) {
        case 'down':
          this.optionsY = this.optionsY - this.optionHeight * this.viewableOptions
          break
        case 'up':
          this.optionsY = this.optionsY + this.optionHeight * this.viewableOptions
          break
      }
    },
    toggleArrows() {
      if (this.options.length <= this.selectedOption - 1 + this.viewableOptions) {
        this.alphaDownArrow = 0
      } else {
        this.alphaDownArrow = 1
      }

      if (this.selectedOption > this.viewableOptions) {
        this.alphaUpArrow = 1
      } else {
        this.alphaUpArrow = 0
      }
    },
  },
})
