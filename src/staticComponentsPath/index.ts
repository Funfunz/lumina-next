import { LinkBox } from '@/components/linkBox/linkBox'
import { Grid } from '@/components/grid/grid'
import { Image } from '@/components/image/image'

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid,
  image: Image,
}

export default paths