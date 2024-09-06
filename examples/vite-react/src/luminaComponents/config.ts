import { LinkBox } from '../components/linkBox/linkBoxV3'
import { config as configLinkBox } from '../components/linkBox/config'

import { Grid } from '../components//grid/grid'
import { config as configGrid } from '../components/grid/config'

import { GridItem } from '../components//gridItem/gridItem'
import { config as configGridItem } from '../components/gridItem/config'

import { Image } from '../components/image/image'
import { config as configImage } from '../components/image/config'

import { Title } from '../components/title/title'
import { config as configTitle } from '../components/title/config'

import { Text } from '../components/text/text'
import { config as configText } from '../components/text/config'

import { Flex } from '../components/flex/flex'
import { config as configFlex } from '../components/flex/config'

import { Menu } from '../components/menu/menu'
import { config as configMenu } from '../components/menu/config'

import { Button } from '../components/button/button'
import { config as configButton } from '../components/button/config'

import { AddToCart } from '../components/addToCart/addToCart'
import { config as configAddToCart } from '../components/addToCart/config'

import { Spacer } from '../components/spacer/spacer'
import { config as configSpacer } from '../components/spacer/config'

import { Product } from '../components/product/product'
import { config as configProduct } from '../components/product/config'

import { TComponentConfig } from '@lumina/core'

const luminaConfig: TComponentConfig = {
  [configLinkBox.type]: {
    component: LinkBox,
    config: configLinkBox,
  },
  [configGrid.type]: {
    component: Grid,
    config: configGrid,
  },
  [configGridItem.type]: {
    component: GridItem,
    config: configGridItem,
  },
  [configImage.type]: {
    component: Image,
    config: configImage,
  },
  [configTitle.type]: {
    component: Title,
    config: configTitle,
  },
  [configFlex.type]: {
    component: Flex,
    config: configFlex,
  },
  [configButton.type]: {
    component: Button,
    config: configButton,
  },
  [configAddToCart.type]: {
    component: AddToCart,
    config: configAddToCart,
  },
  [configText.type]: {
    component: Text,
    config: configText,
  },
  [configMenu.type]: {
    component: Menu,
    config: configMenu,
  },
  [configSpacer.type]: {
    component: Spacer,
    config: configSpacer,
  },

  [configProduct.type]: {
    component: Product,
    config: configProduct,
  },
}

export default luminaConfig
