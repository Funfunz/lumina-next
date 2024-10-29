import { Button } from '@/components/button/index.js'
import { ChangeEventHandler, useCallback, useState } from 'react'
import { useToggleModalContext } from '@/context/toggleModalContextProvider.js'
import { useLuminaContext } from '@/context/contextProvider.js'
import { Form } from '@/components/editor-buttons-container/inputRenderer.js'
import { Input } from '@/components/form-components/input/index.js'
import { Modal } from '../utils/modal.js'
import { CancelButton } from '../utils/cancelButton.js'
import { generateId } from '../utils/index.js'

export const ADDPAGE = 'ADDPAGE'

export type TToggleModalAddPageProps = {
  modalType: typeof ADDPAGE
}

export type TFormData = {
  friendlyName: string
  description: string
  urlParams: string[]
}

const formDataInitialState = {
  friendlyName: '',
  description: '',
  urlParams: [],
}

export const AddPageModal = () => {
  const { handleCloseModal } = useToggleModalContext()
  const { dispatch } = useLuminaContext()

  const [formData, setFormData] = useState<TFormData>(formDataInitialState)
  const [urlParamTemp, setUrlParamTemp] = useState('')

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
        friendlyName: formData.friendlyName,
        description: formData.description,
        urlParams: formData.urlParams,
        id: 'page_' + generateId(),
      },
    })

    handleCloseModal()
  }, [dispatch, formData])

  const handleAddToListClick = useCallback(() => {
    if (urlParamTemp)
      setFormData({
        ...formData,
        urlParams: [...formData.urlParams, urlParamTemp],
      })
    setUrlParamTemp('')
  }, [urlParamTemp])

  const handleRemoveFromListClick = useCallback(
    (index: number) => () => {
      setFormData({
        ...formData,
        urlParams: formData.urlParams.filter((_, i) => i !== index),
      })
    },
    [formData]
  )

  const handleMoveURLParamItemClick = useCallback(
    (direction: string, currentIndex: number) => () => {
      const newURLParams = [...formData.urlParams]
      const [item] = newURLParams.splice(currentIndex, 1)
      newURLParams.splice(direction === 'up' ? currentIndex - 1 : currentIndex + 1, 0, item)
      setFormData({
        ...formData,
        urlParams: newURLParams,
      })
    },
    [formData]
  )

  return (
    <Modal
      title='Add Page'
      titleIcon='lum-icon-component'
      contentLabel='Add a page Modal'
      content={
        <Form>
          <tr>
            <td className='lum-form-table-cell lum-form-table-label'>
              <label htmlFor='friendlyName'>Friendly name</label>
            </td>
            <td className='lum-form-table-cell' style={{ width: '100%' }}>
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
            <td className='lum-form-table-cell lum-form-table-label'>
              <label htmlFor='description'>Description</label>
            </td>
            <td className='lum-form-table-cell'>
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
          <tr>
            <td className='lum-form-table-cell lum-form-table-label'>
              <label htmlFor='urlParam'>URL parameters</label>
            </td>
            <td className='lum-form-table-cell'>
              <Input
                type='text'
                value={urlParamTemp}
                id='urlParam'
                name='urlParam'
                style={{ marginRight: '10px' }}
                onChange={event => {
                  setUrlParamTemp(event?.currentTarget.value)
                }}
              ></Input>
              <Button
                buttonType='button'
                text='Add to list'
                onClick={handleAddToListClick}
                iconLeft='lum-icon-plus-fill'
              />
            </td>
          </tr>
          <tr>
            <td className='lum-form-table-cell lum-form-table-label'>
              <label htmlFor='urlParam'>Selected URL parameters</label>
            </td>
            <td className='lum-form-table-cell'>
              <table>
                <tbody>
                  {formData.urlParams.map((urlParam, index) => (
                    <tr key={index}>
                      <td>{urlParam}</td>
                      <td>
                        <Button
                          disabled={index === 0}
                          buttonType='button'
                          onClick={handleMoveURLParamItemClick('up', index)}
                          iconLeft='lum-icon-chevron-up'
                        />
                        <Button
                          disabled={index === formData.urlParams.length - 1}
                          buttonType='button'
                          onClick={handleMoveURLParamItemClick('down', index)}
                          iconLeft='lum-icon-chevron-down'
                        />
                        <Button
                          buttonType='button'
                          onClick={handleRemoveFromListClick(index)}
                          iconLeft='lum-icon-cross'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className='lum-form-table-cell lum-form-table-label'>
              <label>Final URL</label>
            </td>
            <td className='lum-form-table-cell'>{['', ...formData.urlParams].join('/') || '/'}</td>
          </tr>
        </Form>
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
