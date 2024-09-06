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

  ;(window as any).testAdd = dispatch

  const generateUniqueId = () => {
    return 'page-' + Math.random().toString(36).slice(2, 11)
  }

  /*   test({
    type: 'createPage',
    data: {
      friendlyName: 'stringBueFixe',
      description: 'descricao bue nice',
      pageName: 'ultraPagename',
      urlParams: ['param1', 'param2'],
      id: 'page-69',
      dateModified: Date.now().toString(),
      status: true,
    },
  }) */

  const handleAddPage = () => {
    dispatch({
      type: 'createPage',
      data: {
        id: generateUniqueId(),
        pageName: 'testPage',
        friendlyName: 'tp',
        dateModified: Date.now().toString(),
        status: true,
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
