import {
  LumCheckbox,
  LumCheckboxList,
} from '@lumina/core/src/components/form-components/checkbox/index.js'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/checkbox/index.js'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const Checkbox = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumCheckbox {...props} />
      </Form>
    </FormThemeProvider>
  )
}

export const CheckboxList = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumCheckboxList {...props} />
      </Form>
    </FormThemeProvider>
  )
}
