import { LinkBox } from '@/components/linkBox/linkBoxV3'
import { Grid } from '@/components/grid/grid'
import { Image } from '@/components/image/image'
import { TitleText } from '@/components/titleText/titleText'
import { Flex } from '@/components/flex/flex'

import { config as configLinkBox, editorConfig as editorConfigLinkBox} from '@/components/linkBox/config'
import { config as configImage, editorConfig as editorConfigImage} from '@/components/image/config'
import { config as configTitleText, editorConfig as editorConfigTitleText} from '@/components/titleText/config'
import { TConfigItemValue, TConfigItemSelect } from '@/components/showEdit/showEdit'
import { TEditorConfig } from '@/components/editor/editor'
import { editorConfig as editorConfigGrid } from '@/components/grid/config'
import { editorConfig as editorConfigFlex } from '@/components/flex/config'

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid,
  image: Image,
  titleText: TitleText,
  flex: Flex
}

export default paths

export const configs: {
  [key: string]: (TConfigItemValue | TConfigItemSelect)[]
} = {
  linkBox: configLinkBox,
  image: configImage,
  titleText: configTitleText
}

export const editorConfigs: {
  [key: string]: TEditorConfig
} = {
  linkBox: editorConfigLinkBox,
  image: editorConfigImage,
  titleText: editorConfigTitleText,
  grid: editorConfigGrid,
  flex: editorConfigFlex
}
