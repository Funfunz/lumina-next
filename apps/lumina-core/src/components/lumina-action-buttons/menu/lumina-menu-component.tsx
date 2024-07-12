import { LuminaButton } from "@/components/lumina-button/lumina-button"
import { LuminaDropdown } from "@/components/lumina-dropdown/lumina-dropdown";
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
    {showMenu && <LuminaDropdown/>}
</div>
  )
}
