import { LuminaButton } from "@/components/lumina-button/lumina-button"
import { LuminaEditMenu } from "@/components/lumina-editMenu/lumina-editMenu";
import { useState, useEffect, useRef } from 'react';

export const LuminaMenuComponentButton = () => {
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
    <LuminaButton
      buttonType="button"
      iconLeft={"lum-icon-menu"}
      onClick={handleOpenMenu}
    />
    {showMenu && <LuminaEditMenu/>}
</div>
  )
}
