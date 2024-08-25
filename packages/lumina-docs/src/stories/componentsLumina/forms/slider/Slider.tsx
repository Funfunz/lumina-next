import { LumSlider } from '@lumina/core/src/components/form-components/slider/index.tsx'
import type { ControlLogicProps } from '@lumina/core/src/components/form-components/slider/index.tsx'
import Form, { FormThemeProvider } from 'react-form-component'

export type { ControlLogicProps }

export const Slider = (props: ControlLogicProps) => {
  return (
    <FormThemeProvider theme={{ colors: { success: 'none' } }}>
      <Form fields={['test']}>
        <LumSlider {...props} />
      </Form>
    </FormThemeProvider>
  )
}
