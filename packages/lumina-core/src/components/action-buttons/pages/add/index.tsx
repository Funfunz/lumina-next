import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useCallback } from 'react'

type TAddPageProps = {
  id?: string
  buttonLabel?: string
  isDisabled?: boolean
  isMenuButton?: boolean
}

/**
 * @param pageID the ID of the page if exists
 * @param buttonlabel
 * @param isDisabled allows to disable the button from interactions
 * @param isMenuButton allows to style the button to be inside the expandable editor menu
 * @returns
 */
export const AddPageButton = ({ buttonLabel, isDisabled, isMenuButton }: TAddPageProps) => {
  const { dispatch } = useLuminaContext()

  const handleAddPageClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      dispatch({
        type: 'createPage',
        data: {
          id: 'dadwadada',
          pageName: 'testPage',
          friendlyName: 'Test Page',
          extendedName: 'A Page for testing purposes',
          dateModified: Date.now.toString(),
          route: '/test',
          status: true,
        },
      })
    },
    [dispatch]
  )

  return (
    <Button
      buttonType='button'
      onClick={handleAddPageClick}
      text={buttonLabel}
      disabled={isDisabled}
      iconLeft='lum-icon-plus'
      style={isMenuButton ? 'menuButton' : 'secondary'}
    />
  )
}
