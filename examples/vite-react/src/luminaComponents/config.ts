import { LinkBox } from '../components/linkBox/linkBoxV3'
import { Grid } from '../components//grid/grid'
import { Image } from '../components/image/image'
import { Title } from '../components/title/title'
import { Text } from '../components/text/text'
import { Flex } from '../components/flex/flex'
import { config as configLinkBox } from '../components/linkBox/config'
import { config as configGrid } from '../components/grid/config'
import { config as configImage } from '../components/image/config'
import { config as configTitle } from '../components/title/config'
import { config as configText } from '../components/text/config'
import { config as configFlex } from '../components/flex/config'
import { TComponentConfig } from '@lumina/core'
import { Button } from '../components/button/button'
import { config as configButton } from '../components/button/config'

const luminaConfig: TComponentConfig = {
  linkBox: {
    component: LinkBox,
    config: configLinkBox
  },
  grid: {
    component: Grid,
    config: configGrid
  },
  image: {
    component: Image,
    config: configImage
  },
  title: {
    component: Title,
    config: configTitle
  },
  flex: {
    component: Flex,
    config: configFlex
  },
  button: {
    component: Button,
    config: configButton
  },
  text: {
    component: Text,
    config: configText
  },
}

export default luminaConfig
