import { LumRadio } from '@lumina/core/src/components/form-components/radio-button/index.tsx'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/radio-button/index.tsx'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const Radio = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumRadio {...props} />
      </Form>
    </FormThemeProvider>
  )
}
