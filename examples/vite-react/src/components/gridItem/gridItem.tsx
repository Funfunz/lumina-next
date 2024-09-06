import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import MUIGrid, { type Grid2Props } from '@mui/material/Grid2'

type TProps = {
  children: React.ReactNode
  id: string
} & Grid2Props

export const GridItem = ({ children, id, ...rest }: TProps) => {
  return (
    <MUIGrid {...rest}>
      {children}
      <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest }} />
    </MUIGrid>
  )
}
