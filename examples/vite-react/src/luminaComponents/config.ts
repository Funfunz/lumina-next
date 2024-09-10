import { TComponentConfig } from '@lumina/core'

import {
  Button,
  LinkBox,
  Grid,
  Image,
  Title,
  Text,
  Flex,
  Product,
  configLinkBox,
  configGrid,
  configImage,
  configTitle,
  configText,
  configFlex,
  configProduct,
  configButton,
} from '../components'

const luminaConfig: TComponentConfig = {
  linkbox: {
    component: LinkBox,
    config: configLinkBox,
  },
  grid: {
    component: Grid,
    config: configGrid,
  },
  image: {
    component: Image,
    config: configImage,
  },
  title: {
    component: Title,
    config: configTitle,
  },
  flex: {
    component: Flex,
    config: configFlex,
  },
  button: {
    component: Button,
    config: configButton,
  },
  text: {
    component: Text,
    config: configText,
  },

  product: {
    component: Product,
    config: configProduct,
  },
}

export default luminaConfig
