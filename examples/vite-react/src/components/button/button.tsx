import { EditorButtonsContainer } from '@lumina/core'
import { config } from './config'
import MUIButton, { type ButtonOwnProps } from '@mui/material/Button'

type TProps = {
  text?: string
  children: React.ReactNode
  id: string
} & ButtonOwnProps

export const Button = ({ id, text = 'button', children, ...rest }: TProps) => {
  console.log(rest)
  return (
    <div>
      <MUIButton {...rest}>
        {children}
        {text}
        <EditorButtonsContainer id={id} config={config} componentProps={{ text, ...rest }} />
      </MUIButton>
    </div>
  )
}
