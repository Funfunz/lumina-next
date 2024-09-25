import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useAppContext } from '@/main'

export const MobileViewButton = () => {
  const appcontext = useAppContext()
  const { dispatch } = useLuminaContext()

  const toggleView = () => {
    console.log({ appcontext })
    dispatch({
      type: 'setIsMobile',
      data: !appcontext.isMobile,
    })
  }

  return (
    <Button
      buttonType='button'
      iconLeft={appcontext.isMobile ? 'lum-icon-visible' : 'lum-icon-mobile'}
      onClick={toggleView}
    />
  )
}
