import { Button } from "@/components/button";
import cx from "classnames";

export const TreeviewHeader = () => {

  return (
    <div className='treeviewHeaderContainer'>
      <span className={cx('treeviewHeaderIcon', "lum-icon-page")}></span>
      <p className='treeviewTitle'>Home</p>
      <p className='treeviewSubTitle'>Home Page for Lumina PageBuilder</p>
      <div className='treeviewNavIconsContainer'>
        <Button buttonType="button" iconLeft="lum-icon-info-fill" />
        <Button buttonType="button" iconLeft="lum-icon-history" />
        <Button buttonType="button" iconLeft="lum-icon-mobile" />
      </div>
      <Button buttonType="button" text="Live" style='live' iconLeft="lum-icon-visible" />
    </div>
  )
}
