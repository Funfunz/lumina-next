import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import MUIGrid, { type Grid2Props } from '@mui/material/Grid2'
import Box from '@mui/material/Box'

type TProps = {
  children: React.ReactNode
  id: string
} & Grid2Props

export const Grid = ({ children, id, ...rest }: TProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIGrid container {...rest}>
        {children}
        <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest }} />
      </MUIGrid>
    </Box>
  )
}
