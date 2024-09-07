import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import MUIGrid, { type Grid2Props } from '@mui/material/Grid2'

type TProps = {
  children: React.ReactNode
  id: string
  noEditor?: boolean
} & Grid2Props

export const GridItem = ({ children, id, noEditor, ...rest }: TProps) => {
  return (
    <MUIGrid {...rest}>
      {children}
      {(!noEditor && (
        <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest } as any} />
      )) ||
        null}
    </MUIGrid>
  )
}
