import { Button } from "@/components/button/button"
import { IComponentProps } from "@/models/data";

import { TConfig } from "@/models/editor-buttonModel";
import { useState, useEffect, useRef } from 'react';

type TProps = {
  id: string
  data: IComponentProps
  config: TConfig
}

export const ExpandableEditorMenu = ({ id, data, config }: TProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Specify the type here

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <Button
        buttonType="button"
        iconLeft={"lum-icon-menu"}
        onClick={handleOpenMenu}
      />
      {showMenu && <ExpandableEditorMenu id={id} config={config} data={data} />}
    </div>
  )
}
