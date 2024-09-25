import { config } from './config'
import { EditorButtonsContainer } from '@lumina/core'
import Box from '@mui/material/Box'

type TProps = {
  size: number
  id: string
}

export const Spacer = ({ size, id }: TProps) => {
  return (
    <Box sx={{ marginBottom: size }}>
      <EditorButtonsContainer id={id} config={config} componentProps={{ size }} />
    </Box>
  )
}
