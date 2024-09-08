import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'

type TEditPageProps = {
  id: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

export const EditPageButton = ({ id, buttonLabel, isDisabled, isMenuButton }: TEditPageProps) => {
  const { dispatch } = useLuminaContext()

  ;(window as any).testEdit = (id: string) => {
    dispatch({
      type: 'updatePage',
      data: {
        id,
        newData: {
          friendlyName: 'stringBueFixe Updated',
          description: 'descricao bue nice lol propsmodem',
          urlParams: ['updatedParam1', 'updatedParam2'],
        },
      },
    })
  }

  /*   testEdit(); */

  const handleEditButton = () => {
    dispatch({
      type: 'updatePage',
      data: {
        id,
        newData: {
          friendlyName: 'tpu',
          description: 'A very solid updated test page',
          urlParams: ['updatedParam1', 'updatedParam2'],
        },
      },
    }),
      [dispatch]
  }

  return (
    <>
      <Button
        buttonType='button'
        onClick={handleEditButton}
        text={buttonLabel}
        disabled={isDisabled}
        iconLeft='lum-icon-plus'
        style={isMenuButton ? 'menuButton' : 'secondary'}
      />
    </>
  )
}
