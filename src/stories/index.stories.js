import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import MyButton from '../components/MyButton.vue'

export default {
  component: MyButton,
  title: 'Form/Button',
  decorators: [() => '<section class="bg-blue-100 p-5"><story/></section>', withKnobs],
}

export const withText = () => ({
  props: {
    text: { default: text('Button Text', 'Botoncito')},
    isLoading: { default: boolean('Is Loading?', true) }
  },

  render() {
    return <MyButton onClick={action("On click!")} text={this.text} isLoading={this.isLoading}></MyButton>;
  }
})


export const withSlot = () => ({
  render() {
    return <MyButton><span className="text-xl">Slot</span></MyButton>;
  }
})

withText.story = {
  decorators: [() => '<section class="bg-yellow-100 p-5"><story/></section>'],
  argTypes: {
    text: { control: { type: 'range', min: 0, max: 20 } },
    isLoading: { control: { type: 'boolean', min: 0, max: 20 } }
  }
}
