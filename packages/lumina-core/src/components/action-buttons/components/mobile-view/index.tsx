import { Button } from '@/components/button/index.js'
import { useLuminaContext } from '@/context/contextProvider.js'
import { useAppContext } from '@/main.js'

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
      iconLeft={appContext.isMobile ? 'lum-icon-mobile' : 'lum-icon-mobile'}
      onClick={toggleView}
    />
  )
}
