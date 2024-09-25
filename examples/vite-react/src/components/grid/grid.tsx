import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import MUIGrid, { type Grid2Props } from '@mui/material/Grid2'
import Box from '@mui/material/Box'

type TProps = {
  children: React.ReactNode
  id: string
  noEditor?: boolean
} & Grid2Props

export const Grid = ({ children, id, noEditor, ...rest }: TProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIGrid container {...rest}>
        {children}
        {(!noEditor && (
          <EditorButtonsContainer id={id} config={config} componentProps={{ ...rest } as any} />
        )) ||
          null}
      </MUIGrid>
    </Box>
  )
}
