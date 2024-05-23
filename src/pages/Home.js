import Blits from '@lightningjs/blits'
import Loader from '../components/Loader.js'
import Selector from '../components/selector/Selector.js'

export default Blits.Component('Home', {
  components: {
    Loader,
    Selector,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Selector
        x="1000"
        y="100"
        items="$complexTextSelectorOptions"
        itemWidth="600"
        itemHeight="50"
        itemComponent="ComplexTextOption"
        spacing="300"
        ref="complexTextSelector"
      />
      <Selector
        x="1000"
        y="50%"
        items="$simpleTextOptions"
        itemWidth="300"
        itemHeight="50"
        itemComponent="SimpleTextOption"
        ref="simpleTextSelector"
      />
      <Selector
        x="1000"
        y="75%"
        itemWidth="400"
        itemHeight="60"
        items="$textAndImageOptions"
        itemComponent="TextAndImageOption"
        ref="textAndImageSelector"
      />
    </Element>
  `,
  state() {
    return {
      simpleTextOptions: [
        { text: 'Simple a', value: 'SIM a' },
        { text: 'Simple b', value: 'SIM b' },
        { text: 'Simple c', value: 'SIM c' },
        { text: 'Simple d', value: 'SIM d' },
        { text: 'Simple e', value: 'SIM e' },
        { text: 'Simple f', value: 'SIM f' },
        { text: 'Simple g', value: 'SIM g' },
        { text: 'Simple h', value: 'SIM h' },
        { text: 'Simple i', value: 'SIM i' },
        { text: 'Simple j', value: 'SIM j' },
        { text: 'Simple k', value: 'SIM k' },
      ],
      complexTextSelectorOptions: [
        { texts: ['Complex Text A', '(additional text)'], value: 'A' },
        { texts: ['Complex Text B', '(additional text)'], value: 'B' },
        { texts: ['Complex Text C', '(additional text)'], value: 'C' },
        { texts: ['Complex Text D', '(additional text)'], value: 'D' },
        { texts: ['Complex Text E', '(additional text)'], value: 'E' },
        { texts: ['Complex Text F', '(additional text)'], value: 'F' },
        { texts: ['Complex Text G', '(additional text)'], value: 'G' },
        { texts: ['Complex Text H', '(additional text)'], value: 'H' },
        { texts: ['Complex Text I', '(additional text)'], value: 'I' },
        { texts: ['Complex Text J', '(additional text)'], value: 'J' },
        { texts: ['Complex Text K', '(additional text)'], value: 'K' },
      ],
      textAndImageOptions: [
        {
          text: 'text and image 1',
          value: 'TXT&IMG 1',
          imageSrc: 'assets/images/icon-wi-fi-tv-2-bars.png',
          imageW: '45',
          imageH: '46',
        },
        {
          text: 'text and image 2',
          value: 'TXT&IMG 2',
          imageSrc: 'assets/images/icon-wi-fi-tv-full.png',
          imageW: '45',
          imageH: '46',
        },
        {
          text: 'text and image 3',
          value: 'TXT&IMG 3',
          imageSrc: 'assets/images/icon-wi-fi-tv-2-bars.png',
          imageW: '45',
          imageH: '46',
        },
      ],
    }
  },
  hooks: {
    focus() {
      this.select('complexTextSelector').focus()
    },
    init() {
      // this.$listen('SimpleTextOptionSelected', (value) => {
      //   console.log('SimpleTextOptionSelected', value)
      // })

      this.$listen('complexTextSelector', (value) => {
        this.select('simpleTextSelector').focus()
      })

      this.$listen('simpleTextSelector', (value) => {
        this.select('textAndImageSelector').focus()
      })

      this.$listen('textAndImageSelector', (value) => {
        this.select('complexTextSelector').focus()
      })
    },
  },
})
