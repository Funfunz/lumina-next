import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import MUIGrid from '@mui/material/Grid2'

type TProps = {
  children: React.ReactNode
  id: string
}

export const GridItem = ({ children, id, ...rest }: TProps) => {
  console.log({ rest })
  return (
    <MUIGrid {...rest}>
      {children}
      <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest }} />
    </MUIGrid>
  )
}
