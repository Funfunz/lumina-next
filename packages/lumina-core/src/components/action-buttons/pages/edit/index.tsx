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

  ;(window as any).testEdit = dispatch

  /*   testEdit({
    type: 'updatePage',
    data: {
      id: 'page-69',
      newData: {
        pageName: 'ultraPagename Super Hiper Mega',
        friendlyName: 'stringBueFixe Updated',
        dateModified: Date.now().toString(),
        status: true,
        description: 'descricao bue nice lol propsmodem',
        urlParams: ['updatedParam1', 'updatedParam2'],
      },
    },
  }); */

  const handleEditButton = () => {
    dispatch({
      type: 'updatePage',
      data: {
        id,
        newData: {
          pageName: 'testPageUpdated',
          friendlyName: 'tpu',
          dateModified: Date.now().toString(),
          status: true,
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
