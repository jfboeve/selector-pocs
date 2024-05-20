import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'
import ComplexTextSelector from '../components/selector/ComplexTextSelector.js'
import SimpleTextSelector from '../components/selector/SimpleTextSelector.js'
import TextAndImageSelector from '../components/selector/TextAndImageSelector.js'

export default Blits.Component('Home', {
  components: {
    Loader,
    ComplexTextSelector,
    SimpleTextSelector,
    TextAndImageSelector,
  },
  template: `
    <Element
    	w="1920"
    	h="1080"
    	color="#1e293b"
    >
    	<ComplexTextSelector
    		x="1000"
    		y="150"
    		options="$complexTextSelectorOptions"
    		optionWidth="600"
    		optionHeight="50"
    		spacing="300"
    		ref="complexTextSelector"
    	/>
    
    	<SimpleTextSelector
    		x="1000"
    		y="50%"
    		optionWidth="300"
    		optionHeight="50"
    		options="$simpleTextOptions"
    		ref="simpleTextSelector"
    	/>
    
    	<TextAndImageSelector
    		x="1000"
    		y="75%"
    		optionWidth="400"
    		optionHeight="60"
    		options="$textAndImageOptions"
    		ref="textAndImageSelector"
    	/>
    </Element>
  `,
  state() {
    return {
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
      simpleTextOptions: [
        { text: 'Simple A', value: 'SIM A' },
        { text: 'Simple B', value: 'SIM B' },
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
      this.select("complexTextSelector").focus()
    },
    init() {
      this.$listen('complexTextSelector', (value) => {
        console.log('complexTextSelector', value)
        this.select('simpleTextSelector').focus()
      })

      this.$listen('simpleTextSelector', (value) => {
        console.log('simpleTextSelector', value)
        this.select('textAndImageSelector').focus()
      })

      this.$listen('textAndImageSelector', (value) => {
        console.log('textAndImageSelector', value)
        this.select('complexTextSelector').focus()
      })
    },
  },
})
