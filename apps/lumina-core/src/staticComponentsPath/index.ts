import { LinkBox } from '@/client-components/linkBox/linkBoxV3'
import { Grid } from '@/client-components/grid/grid'
import { Image } from '@/client-components/image/image'
import { Title } from '@/client-components/title/title'
import { Text } from '@/client-components/text/text'
import { Flex } from '@/client-components/flex/flex'
import { config as configLinkBox } from '@/client-components/linkBox/config'
import { config as configGrid } from '@/client-components/grid/config'
import { config as configImage } from '@/client-components/image/config'
import { config as configTitle } from '@/client-components/title/config'
import { config as configText } from '@/client-components/text/config'
import { config as configFlex } from '@/client-components/flex/config'
import { TConfig } from '@/models/editor-buttonModel'

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid,
  image: Image,
  title: Title,
  flex: Flex,
  text: Text,
}

export default paths

export const configs: {
  [key: string]: TConfig
} = {
  linkBox: configLinkBox,
  grid: configGrid,
  image: configImage,
  title: configTitle,
  flex: configFlex,
  text: configText,
}
