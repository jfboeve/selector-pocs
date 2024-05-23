import Blits from '@lightningjs/blits'
import ComplexTextOption from './option/ComplexTextOption'
import SimpleTextOption from './option/SimpleTextOption'
import TextAndImageOption from './option/TextAndImageOption'

// look at the possibility of 'extending' a selector 'class'
/**
 * Accepts a number of options allowing the user to select between them
 * @emits optionSelected - components that use this component must
 * listen for this event and act on the event accordingly
 */
export default Blits.Component('Selector', {
  components: { ComplexTextOption, SimpleTextOption, TextAndImageOption },
  template: `
    <Element w="$itemWidth" :h="$itemHeight * $viewableItems" mount="0.5">
      <Element
        src="assets/images/navigationIcons/upArrow.png"
        w="36"
        h="21"
        x="50%"
        y="-21"
        mount="0.5"
        :alpha="$alphaUpArrow"
      />
      <Element w="$itemWidth" :h="$itemHeight * $viewableItems" clipping="true">
        <Element :y.transition="$itemWrapperY">
          <Component
            is="$itemComponent"
            :for="(item,index) in $items"
            :item="$item"
            :w="$itemWidth"
            :h="$itemHeight"
            :y="($itemHeight * $index)"
            :ref="'item' + $index"
          />
        </Element>
      </Element>
      <Element
        src="assets/images/navigationIcons/downArrow.png"
        w="36"
        h="21"
        :y="($itemHeight * $viewableItems) + 21"
        x="50%"
        mount="0.5"
        :alpha="$alphaDownArrow"
      />
    </Element>
  `,
  props: [
    'itemComponent',
    'items',
    'itemWidth',
    'itemHeight',
    { key: 'viewableItems', default: 3 },
  ],
  state() {
    return {
      selectedItem: 0,
      itemWrapperY: 0,
      alphaUpArrow: 0,
      alphaDownArrow: 0,
    }
  },
  watch: {
    selectedItem(v) {
      const target = this.select(`item${v}`)
      if (target) target.focus()
    },
  },
  hooks: {
    init() {
      this.$listen('ItemSelected', (value) => {
        this.$emit(`${this.ref}`, value)
      })
    },
    focus() {
      this.$trigger('selectedItem')
      this.toggleArrows()
    },
  },
  input: {
    up() {
      if (this.selectedItem > 0) {
        this.selectedItem = this.selectedItem - 1
        this.scroll()
      }
    },
    down() {
      if (this.selectedItem < this.items.length - 1) {
        this.selectedItem = this.selectedItem + 1
        this.scroll()
      }
    },
  },
  methods: {
    itemSelected(e) {
      console.log('itemSelected', e)
      this.$emit(`${this.ref}`, e.value)
    },
    scroll() {
      this.toggleArrows()
      this.itemWrapperY = -(
        ((this.selectedItem - (this.selectedItem % this.viewableItems)) / this.viewableItems) *
        (this.itemHeight * this.viewableItems)
      )
    },
    toggleArrows() {
      if (this.items.length <= this.selectedItem + this.viewableItems) {
        this.alphaDownArrow = 0
      } else {
        this.alphaDownArrow = 1
      }

      if (this.selectedItem > this.viewableItems) {
        this.alphaUpArrow = 1
      } else {
        this.alphaUpArrow = 0
      }
    },
  },
})
