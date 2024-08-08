import Form from 'react-form-component'
import { LumCheckbox } from './checkbox'
import { LumSlider } from './slider'
import { LumTextArea } from './textarea'
import { LumRadio } from './radio-button'
import { LumInput } from './input'
import { LumSwitchList } from './switch-list'

// For Demonstration purposes, please call this Component on /packages/lumina-core/src/components/sidebar
// and apply it like this on line 34: panel: <DemoForm/>

export const DemoForm = () => {
  return (
    <>
      <Form fields={['test0']}>
        <LumCheckbox
          className=''
          name='test0'
          mandatory
          label='Field Label'
          text='Checkbox Test'
          help='This is the optional help text for this field'
        />
      </Form>
      <br />
      <hr />
      <br />
      <Form fields={['test1']}>
        <LumSlider
          className=''
          name='test1'
          mandatory
          label='Field Label'
          type='text'
          help='This is the optional help text for this field'
        />
      </Form>
      <br />
      <hr />
      <br />
      <Form fields={['test2']}>
        <LumTextArea
          className=''
          name='test2'
          mandatory
          label='Field Label'
          type='text'
          help='This is the optional help text for this field'
          placeholder='Type something'
        />
      </Form>
      <br />
      <hr />
      <br />
      <Form fields={['test3']}>
        <LumRadio
          className=''
          name='test3'
          mandatory
          label='Field Label'
          type='text'
          help='This is the optional help text for this field'
          options={['Radio Test 1', 'Radio Test 2']}
        />
        <br />
        <hr />
        <br />
      </Form>
      <Form fields={['test4']}>
        <LumInput
          className=''
          name='test4'
          mandatory
          placeholder='Type something'
          label='Field Label'
          type='text'
          help='This is the optional help text for this field'
        />
      </Form>
      <br />
      <hr />
      <br />
      <Form fields={['test5']}>
        <LumSwitchList
          className=''
          name='test5'
          mandatory
          label='Field Label'
          type='text'
          help='This is the optional help text for this field'
          options={['Switch-List test']}
        />
      </Form>
      <br />
      <hr />
      <br />
      <Form fields={['test5']}>
        <LumInput
          className=''
          name='test5'
          mandatory
          placeholder='pick a password'
          label='Validation Test'
          type='password'
          help='To validate, enter a password with a minimum 8 characters.'
          min={8}
        />
      </Form>
    </>
  )
}
