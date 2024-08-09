import {
  LumSwitch,
  LumSwitchList,
} from '@lumina/core/src/components/form-components/switch/index.js'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/switch/index.js'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const SwitchList = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumSwitchList {...props} />
      </Form>
    </FormThemeProvider>
  )
}

export const Switch = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumSwitch {...props} />
      </Form>
    </FormThemeProvider>
  )
}
