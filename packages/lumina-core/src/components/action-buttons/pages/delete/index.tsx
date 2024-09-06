import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'

type TDeletePageProps = {
  id: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

export const DeletePageButton = ({
  id,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TDeletePageProps) => {
  const { dispatch } = useLuminaContext()

  ;(window as any).testDelete = dispatch

  /*  testDelete({
    type: 'deletePage',
    data: {
    id: 'page-69'
    },
  }) */

  const handleDeletePage = () => {
    dispatch({
      type: 'deletePage',
      data: { id },
    }),
      [dispatch]
  }

  return (
    <>
      <Button
        buttonType='button'
        onClick={handleDeletePage}
        text={buttonLabel}
        disabled={isDisabled}
        iconLeft='lum-icon-plus'
        style={isMenuButton ? 'menuButton' : 'secondary'}
      />
    </>
  )
}
