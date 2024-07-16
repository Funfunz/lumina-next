import { LuminaButton } from "@/components/lumina-button/lumina-button"
import { LuminaEditMenu } from "@/components/lumina-editMenu/lumina-editMenu";
import { IComponentProps } from "@/data/data";
import { TConfig } from "@/models/showEditModel";
import { useState, useEffect, useRef } from 'react';

type Tprops = {
  config: TConfig
  data: IComponentProps
}

export const LuminaMenuComponentButton = ({ config, data }: Tprops) => {
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
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <LuminaButton
        buttonType="button"
        iconLeft={"lum-icon-menu"}
        onClick={handleOpenMenu}
      />
      {showMenu && <LuminaEditMenu config={config} data={data} />}
    </div>
  )
}
