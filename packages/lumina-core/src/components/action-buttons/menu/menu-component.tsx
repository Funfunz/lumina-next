import { useState, useEffect } from 'react'
import { useToggleMenuContext } from "@/context/toggleMenuContext"
import { Button } from "@/components/button/button"
import { ExpandableEditorMenu } from "@/components/expandable-menu-button/expandable-menu-button"
import { IComponentProps } from "@/models/data"
import { TConfig } from "@/models/editor-buttonModel"

type TProps = {
  id: string
  data: IComponentProps
  config: TConfig
}

export const MenuComponentButton = ({ id, data, config }: TProps) => {
  const { handleToggleMenu, menuState } = useToggleMenuContext()

  const [isOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(menuState.id === id && menuState.isOpen)
  }, [menuState.isOpen, menuState.id, id])

  return (
    <div>
      <Button
        buttonType="button"
        iconLeft={"lum-icon-menu"}
        onClick={() => handleToggleMenu(id)}
      />
      {isOpen && <ExpandableEditorMenu id={id} config={config} data={data} />}
    </div>
  )
}
