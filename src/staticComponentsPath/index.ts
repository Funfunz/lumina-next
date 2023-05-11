import { LinkBox } from '@/components/linkBox/linkBox'
import { Grid } from '@/components/grid/grid'

const paths: {
  [key: string]: (data: any) => React.JSX.Element | null
} = {
  linkBox: LinkBox,
  grid: Grid
}

export default paths