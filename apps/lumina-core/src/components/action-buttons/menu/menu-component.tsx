import { Button } from "@/components/button/button"
import { MenuButton } from "@/components/menu-button/menu-button"
import { IComponentProps } from "@/data/data"
import { TConfig } from "@/models/editor-buttonModel"
import { useEffect } from "react"


type TProps = {
  id: string
  data: IComponentProps
  config?: TConfig
  handleMenus: any
  isMenuOpen: any
}

export const MenuComponentButton = ({ id, data, config, handleMenus, isMenuOpen }: TProps) => {
  return (
    <>
      <Button
        buttonType="button"
        iconLeft={"lum-icon-menu"}
        onClick={() => handleMenus(id)}
      />
      {isMenuOpen.id === id && isMenuOpen.isOpen && <MenuButton id={id} config={config} data={data} />}
    </>
  )
}
