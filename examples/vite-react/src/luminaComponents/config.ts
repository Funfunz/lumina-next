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

import { TComponentConfig } from '@lumina/core'
import { Button } from '../components/button/button'
import { config as configButton } from '../components/button/config'

const luminaConfig: TComponentConfig = {
  linkbox: {
    component: LinkBox,
    config: configLinkBox,
  },
  gridContainer: {
    component: Grid,
    config: configGrid,
  },
  gridItem: {
    component: GridItem,
    config: configGridItem,
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
}

export default luminaConfig
