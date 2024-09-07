import Box from '@mui/material/Box'

type TProps = {
  children: React.ReactNode
  id: string
}

export const Container = ({ children }: TProps) => {
  return <Box sx={{ p: 4 }}>{children}</Box>
}
