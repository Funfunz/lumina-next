import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'

type TAddPageProps = {
  id?: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

export const AddPageButton = ({ buttonLabel, isDisabled, isMenuButton }: TAddPageProps) => {
  const { dispatch } = useLuminaContext()

  ;(window as any).testAdd = () => {
    dispatch({
      type: 'createPage',
      data: {
        friendlyName: 'stringBueFixe',
        description: 'descricao bue nice',
        urlParams: ['param1', 'param2'],
        id: generateUniqueId(),
      },
    })
  }

  const generateUniqueId = () => {
    return 'page-' + Math.random().toString(36).slice(2, 11)
  }

  const handleAddPage = () => {
    dispatch({
      type: 'createPage',
      data: {
        id: generateUniqueId(),
        friendlyName: 'tp',
        description: 'A very solid test page',
        urlParams: ['params1', 'params2'],
      },
    }),
      [dispatch]
  }

  return (
    <>
      <Button
        buttonType='button'
        onClick={handleAddPage}
        text={buttonLabel}
        disabled={isDisabled}
        iconLeft='lum-icon-plus'
        style={isMenuButton ? 'menuButton' : 'secondary'}
      />
    </>
  )
}
