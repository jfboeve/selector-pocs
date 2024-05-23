import Blits from '@lightningjs/blits'

export default Blits.Component('Button', {
  props: ['w', 'h', 'focused', { key: 'radius', default: 5 }],
  template: `
    <Element w="$w" h="$h">
      <Element w="100%" h="100%" color="#808080" :alpha="+$focused" :effects="[$shader('radius', {radius: this.radius})]" />
      <Slot />
    </Element>
  `,
})
