import React, { useState, useCallback, ChangeEvent, MouseEvent, FormEvent } from 'react'
import Modal from 'react-modal'
import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { Input } from '@/components/form-components/input'
import { Title } from '@/components/title'

type TAddPageProps = {
  id?: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

type FormData = {
  friendlyName: string
  description: string
  pageName: string
  extendedName: string
  urlParams: string[]
}

export const AddPageButton = ({ buttonLabel, isDisabled, isMenuButton }: TAddPageProps) => {
  const { dispatch } = useLuminaContext()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    friendlyName: '',
    description: '',
    pageName: '',
    extendedName: '',
    urlParams: [],
  })

  const handleAddPageClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleUrlParamsChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newUrlParams = [...formData.urlParams]
    newUrlParams[index] = e.target.value
    setFormData(prevData => ({
      ...prevData,
      urlParams: newUrlParams,
    }))
  }

  const handleAddUrlParam = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFormData(prevData => ({
      ...prevData,
      urlParams: [...prevData.urlParams, ''],
    }))
  }

  const generateUniqueId = () => {
    return 'page-' + Math.random().toString(36).slice(2, 11)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const route = `/${formData.pageName}/${formData.urlParams.map(param => `:${param}`).join('/')}`
    dispatch({
      type: 'createPage',
      data: {
        ...formData,
        id: generateUniqueId(),
        dateModified: Date.now().toString(),
        route,
        status: true,
      },
    })
    handleCloseModal()
  }

  return (
    <>
      <Button
        buttonType='button'
        onClick={handleAddPageClick}
        text={buttonLabel}
        disabled={isDisabled}
        iconLeft='lum-icon-plus'
        style={isMenuButton ? 'menuButton' : 'secondary'}
      />
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        contentLabel='Add Page Modal'
      >
        <Title hLevel={2} content='Create a New Page' />
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            label='Friendly Name:'
            name='friendlyName'
            value={formData.friendlyName}
            onChange={handleInputChange}
          />
          <Input
            type='text'
            label='Description:'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
          <Input
            type='text'
            label='Page Name:'
            name='pageName'
            value={formData.pageName}
            onChange={handleInputChange}
          />
          <Input
            type='text'
            label='Extended Name:'
            name='extendedName'
            value={formData.extendedName}
            onChange={handleInputChange}
          />
          {formData.urlParams.map((param, index) => (
            <React.Fragment key={index}>
              <Input
                type='text'
                label={`URL Parameter ${index + 1}:`}
                value={param}
                onChange={e => handleUrlParamsChange(e, index)}
              />
            </React.Fragment>
          ))}
          <Button
            buttonType='button'
            style='primary'
            text='Add URL Param'
            onClick={handleAddUrlParam}
          />
          <Button buttonType='button' type='submit' style='primary' text='Create Page' />
        </form>
        <Button buttonType='button' style='primary' text='Close' onClick={handleCloseModal} />
      </Modal>
    </>
  )
}
