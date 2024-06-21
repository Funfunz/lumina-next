import { LinkBox } from "@/components/linkBox/linkBoxV3"
import { Grid } from "@/components/grid/grid"
import { Image } from "@/components/image/image"
import { TitleText } from "@/components/titleText/titleText"
import { Flex } from "@/components/flex/flex"

import { config as configLinkBox } from "@/components/linkBox/config"
import { config as configGrid } from "@/components/grid/config"
import { config as configImage } from "@/components/image/config"
import { config as configTitleText } from "@/components/titleText/config"
import { config as configFlex } from "@/components/flex/config"

import type { TConfig } from "@/components/showEdit/showEdit"

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid,
  image: Image,
  titleText: TitleText,
  flex: Flex,
}

export default paths

export const configs: {
  [key: string]: TConfig
} = {
  linkBox: configLinkBox,
  grid: configGrid,
  image: configImage,
  titleText: configTitleText,
  flex: configFlex
}
