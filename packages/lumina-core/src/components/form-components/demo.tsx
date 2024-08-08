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
          className='lum__checkbox'
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
          className='lum__slider'
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
          className='lum__text-area'
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
          className='lum__radio-button'
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
          className='lum__input'
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
          className='lum__switch-list'
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
          className='lum__input'
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
