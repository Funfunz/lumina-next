import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useToggleModalContext } from '@/context/toggleModalContextProvider'
import { useState, useCallback, ChangeEventHandler } from 'react'
import { Form } from 'react-hook-form'
import { Input } from '@/components/form-components/input'
import { CancelButton } from '../utils/cancelButton'
import { Modal } from '../utils/modal'

export const UPDATEPAGE = 'UPDATEPAGE'

export type TToggleModalUpdatePageProps = {
  modalType: typeof UPDATEPAGE
  id: string
  friendlyName: string
  description: string
  route: string
}

export type TFormData = {
  friendlyName: string
  description: string
  urlParams: string[]
}

export const UpdatePageModal = () => {
  const {
    handleCloseModal,
    modalState: { id, friendlyName, description, route },
  } = useToggleModalContext<TToggleModalUpdatePageProps>()
  const { dispatch } = useLuminaContext()

  const [formData, setFormData] = useState<TFormData>({
    friendlyName,
    description,
    urlParams: (() => {
      const urlParams = route.split('/').slice(1)
      return urlParams.length === 1 && urlParams[0] === '' ? [] : urlParams
    })(),
  })

  const [urlParamTemp, setUrlParamTemp] = useState('')

  /**
   * Updates a value of a property of a page
   * Used in both edit and add modal
   * @param key defines the name of the property, this is given by the configuration of the page
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
   * Edits a page
   */
  const handleClickUpdatePage = useCallback(() => {
    dispatch({
      type: 'updatePage',
      data: {
        friendlyName: formData.friendlyName,
        description: formData.description,
        urlParams: formData.urlParams,
        id,
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
      title='Edit Page'
      titleIcon='lum-icon-component'
      contentLabel='Edit a page Modal'
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
            text='Update page'
            style='primary'
            size='large'
            onClick={handleClickUpdatePage}
          />
          <CancelButton />
        </>
      }
    />
  )
}
