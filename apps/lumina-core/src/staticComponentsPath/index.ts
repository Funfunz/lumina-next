import { LinkBox } from '@/client-components/linkBox/linkBoxV3'
import { Grid } from '@/client-components/grid/grid'
import { Image } from '@/client-components/image/image'
import { TitleText } from '@/client-components/titleText/titleText'
import { Flex } from '@/client-components/flex/flex'
import { config as configLinkBox } from '@/client-components/linkBox/config'
import { config as configGrid } from '@/client-components/grid/config'
import { config as configImage } from '@/client-components/image/config'
import { config as configTitleText } from '@/client-components/titleText/config'
import { config as configFlex } from '@/client-components/flex/config'
import { TConfig } from '@/models/editor-buttonModel'
import { Button } from '@/client-components/button/button'
import { config as configButton } from '@/client-components/button/config'

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid,
  image: Image,
  titleText: TitleText,
  flex: Flex,
  button: Button,
}

export default paths

export const configs: {
  [key: string]: TConfig
} = {
  linkBox: configLinkBox,
  grid: configGrid,
  image: configImage,
  titleText: configTitleText,
  flex: configFlex,
  button: configButton,
}
