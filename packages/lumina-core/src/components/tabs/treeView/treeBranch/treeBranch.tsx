import { IComponentData, IComponentProps } from "@/models/data";
import { useState, useCallback } from "react";
import cx from "classnames"

import { ComponentTree } from "../componentTree/componentTree";
import { EditorButtonsContainer } from "@/components/editor-buttons-container/editor-buttons-container";
import { DynamicComponent } from "@/components/render/dynamicComponent";


export const TreeBranch = ({ data }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  const iconChange = () => {
    if (data.children?.length) {
      return (
        <span className={cx('treeViewIcon', showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down', 'treeViewPointer')} onClick={handleTreeHeadClick}></span>)
    }
    else {
      return (
        <span className={cx('treeViewIcon', 'lum-icon-component')}></span>)
    }
  }

  // TODO temporary workaround for missing config
  const component = DynamicComponent(data.type)
  if (!component) return null

  return (
    <div className='treeContainer'>
      {iconChange()}
      <div
        className={cx('treeHeadItem', {
          pointerTreeView: data.children?.length,
        })}
      >
        {data.type} - {data.friendlyName || data.id}{" "}
        <EditorButtonsContainer
          id={data.id}
          inline={true}
          data={data.props as IComponentProps}
          visible={false}
          noUp={false}
          noDown={false}
          menu={false}
          config={component.config}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className='treeChildren'>
          <ComponentTree data={data.children} />
        </div>
      )) || null}
    </div>
  );
};
