/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/button'
import { useState } from 'react'

type TMobileViewProps = {
  hidden?: boolean
}

export const MobileViewButton = ({ hidden }: TMobileViewProps) => {
  const [isMobile, setIsMobile] = useState(false)

  const toggleView = () => {
    setIsMobile(!isMobile)
    const container = document.querySelector('.rendererWrapper')
    if (container) {
      container.classList.toggle('mobile-view', !isMobile)
    }
  }

  return (
    <Button
      buttonType='button'
      iconLeft={isMobile ? 'lum-icon-hidden' : 'lum-icon-mobile'}
      onClick={toggleView}
    />
  )
}
