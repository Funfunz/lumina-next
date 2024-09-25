import { Button } from '@/components/button'
import { useLuminaContext } from '@/context/contextProvider'
import { useAppContext } from '@/main'

export const MobileViewButton = () => {
  const appContext = useAppContext()
  const { dispatch } = useLuminaContext()

  const toggleView = () => {
    dispatch({
      type: 'setIsMobile',
      data: !appContext.isMobile,
    })
  }

  return (
    <Button
      buttonType='button'
      iconLeft={appContext.isMobile ? 'lum-icon-visible' : 'lum-icon-mobile'}
      onClick={toggleView}
    />
  )
}
