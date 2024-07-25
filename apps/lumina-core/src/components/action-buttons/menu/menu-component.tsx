import { Button } from "@/components/button/button"
import { MenuButton } from "@/components/menu-button/menu-button"
import { useToggleMenuContext } from "@/context/toggleMenuContext"
import { IComponentProps } from "@/data/data"
import { TConfig } from "@/models/editor-buttonModel"
import { useEffect, useState } from "react"


type TProps = {
  id: string
  data: IComponentProps
  config?: TConfig
}

export const MenuComponentButton = ({ id, data, config }: TProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()

  const [isOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(menuState.id === id && menuState.isOpen)
  }, [menuState.isOpen, menuState.id, id])

  return (
    <>
      <Button
        buttonType="button"
        iconLeft={"lum-icon-menu"}
        onClick={() => handleToggleMenu(id)}
      />
      {isOpen && <MenuButton id={id} config={config} data={data} />}
    </>
  )
}
