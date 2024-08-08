import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // brand and logo
  brandTitle: 'Lumina Storybook',
  brandUrl: 'https://www.merkle.com',
  brandImage: '../src/assets/logo-default-xl.svg',
  brandTarget: '_new',
  // colors
  colorPrimary: '#662F8F',
  colorSecondary: '#AF94C6',
})
