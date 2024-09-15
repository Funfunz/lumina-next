import { Button } from '@/components/button'
import { ChangeEventHandler, useCallback, useState } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useLuminaContext } from '@/context/contextProvider'
import { Form } from '@/components/editor-buttons-container/inputRenderer'
import { Input } from '@/components/form-components/input'
import { Modal } from '../utils/modal'
import { CancelButton } from '../utils/cancelButton'
import { generateId } from '../utils'

export const AddPageModal = () => {
  const { handleCloseModal } = useToggleModalContext()
  const { dispatch } = useLuminaContext()

  const [formData, setFormData] = useState<Record<string, string>>({})

  /**
   * Updates a value of a property of a component
   * Used in both edit and add modal
   * @param key defines the name of the property, this is given by the configuration of the component
   * @param value
   */
  const handleOnChangeFormData = useCallback(
    (key: string): ChangeEventHandler<HTMLInputElement> =>
      event => {
        setFormData({
          ...formData,
          [key]: event.target.value,
        })
      },
    [formData]
  )

  /**
   * Adds a new page
   */
  const handleClickAddComponent = useCallback(() => {
    dispatch({
      type: 'createPage',
      data: {
        friendlyName: 'stringBueFixe',
        description: 'descricao bue nice',
        urlParams: ['param1', 'param2'],
        id: 'page_' + generateId(),
      },
    })

    handleCloseModal()
  }, [dispatch, formData])

  return (
    <Modal
      title='Add Page'
      titleIcon='lum-icon-component'
      contentLabel='Add a page Modal'
      content={
        <div className='add-modal-content'>
          <div className='add-modal-content__cmp-config'>
            <Form>
              <tr>
                <td className='formTableCell formTableLabel'>
                  <label htmlFor='friendlyName'>Friendly name</label>
                </td>
                <td className='formTableCell' style={{ width: '100%' }}>
                  <Input
                    className='inputField'
                    type='text'
                    value={formData.friendlyName}
                    id='friendlyName'
                    name='friendlyName'
                    onChange={handleOnChangeFormData('friendlyName')}
                  ></Input>
                </td>
              </tr>
              <tr>
                <td className='formTableCell formTableLabel'>
                  <label htmlFor='description'>Description</label>
                </td>
                <td className='formTableCell' style={{ width: '100%' }}>
                  <Input
                    className='inputField'
                    type='text'
                    value={formData.description}
                    id='description'
                    name='description'
                    onChange={handleOnChangeFormData('description')}
                  ></Input>
                </td>
              </tr>
            </Form>
          </div>
        </div>
      }
      actions={
        <>
          <Button
            buttonType='button'
            text='Add page'
            style='primary'
            size='large'
            onClick={handleClickAddComponent}
          />
          <CancelButton />
        </>
      }
    />
  )
}
