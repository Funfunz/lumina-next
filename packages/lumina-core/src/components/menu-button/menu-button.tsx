import { TConfig } from "@/models/editor-buttonModel";
import { IComponentProps } from "@/models/data";
import { Button } from "../button/button";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";

type TMenuProps = {
  id: string
  config: TConfig
  data: IComponentProps
}

export const menuButton = ({id, config, data}:TMenuProps) => {

    return (
    <div className='editMenuContainer'>
      <AddComponentButton
        buttonType="button"
        style="menuButton"
        text="Add Children"
        iconLeft="lum-icon-plus"
        disabled={!config.editor.children}
        />
      <EditComponentButton
        buttonType="button"
        style="menuButton"
        text="Edit"
        iconLeft="lum-icon-edit"
        id={id}
        config={config}
        data={data}
        />
      <Button
        buttonType="button"
        style="menuButton"
        text="Cut"
        iconLeft="lum-icon-cut"
        />
      <Button
        buttonType="button"
        style="menuButton"
        text="Copy"
        iconLeft="lum-icon-clone"
        />
      <Button
        buttonType="button"
        style="menuButton"
        text="Paste"
        iconLeft="lum-icon-paste"
        />
      <DeleteComponentButton
        buttonType="button"
        style="menuButton"
        text="Delete"
        iconLeft="lum-icon-cross"
        id={id}
        />
    </div>
  );
}
