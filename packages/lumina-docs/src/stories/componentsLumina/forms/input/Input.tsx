import { LumInput } from '@lumina/core/src/components/form-components/input/index.js'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/input/index.js'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const Input = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumInput {...props} />
      </Form>
    </FormThemeProvider>
  )
}
