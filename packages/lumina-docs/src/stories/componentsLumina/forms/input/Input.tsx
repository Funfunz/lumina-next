import { LumInput } from '@lumina/core/src/components/form-components/input/index.js'
import type  { ControlLogicProps } from '@lumina/core/src/components/form-components/input/index.js'
import Form, { FormThemeProvider } from 'react-form-component'

export type  { ControlLogicProps }

// For Demonstration purposes, please call this Component on /packages/lumina-core/src/components/sidebar
// and apply it like this on line 34: panel: <DemoForm/>

export const Input = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test4']}>
        <LumInput {...props} />
      </Form>
    </FormThemeProvider>
  )
}
