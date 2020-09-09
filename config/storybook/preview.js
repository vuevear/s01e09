import { addDecorator } from '@storybook/vue'
import '../../src/assets/tailwind.css'

addDecorator(() => '<section class="bg-red-100 p-5"><story/></section>')

// .storybook/preview.js

export const parameters = {
  layout: 'centered',

  backgrounds: {
    default: 'twitter',
    values: [
        {
            name: 'twitter',
            value: '#00aced'
        },
        {
            name: 'facebook',
            value: '#3b5998'
        },
      ],
  }
};