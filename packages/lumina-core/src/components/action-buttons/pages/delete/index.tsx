import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'

type TDeletePageProps = {
  route: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

export const DeletePageButton = ({
  route,
  buttonLabel,
  isDisabled,
  isMenuButton,
}: TDeletePageProps) => {
  const { dispatch } = useLuminaContext()

  ;(window as any).testDelete = (route: string) => {
    dispatch({
      type: 'deletePage',
      data: {
        route,
      },
    })
  }

  /*  testDelete() */

  const handleDeletePage = () => {
    dispatch({
      type: 'deletePage',
      data: { route },
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
