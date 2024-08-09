import { LumTextArea } from '@lumina/core/src/components/form-components/textarea/index.js'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/textarea/index.js'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const TextArea = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumTextArea {...props} />
      </Form>
    </FormThemeProvider>
  )
}
