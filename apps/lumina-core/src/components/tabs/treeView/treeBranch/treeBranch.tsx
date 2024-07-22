import { IComponentData, IComponentProps } from "@/data/data";
import { useState, useCallback } from "react";
import cx from "classnames"
import styles from "./treeBranch.module.scss";
import { EditorButton } from "@/components/editor-button/editor-button";
import { ComponentTree } from "../componentTree/componentTree";
import { configs } from "@/staticComponentsPath"


export const TreeBranch = ({ data }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  const iconChange = () => {
    if (data.children?.length) {
      return (
        <span className={cx(styles.treeViewIcon, showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down', styles.treeViewPointer)} onClick={handleTreeHeadClick}></span>)
    }
    else {
      return (
        <span className={cx(styles.treeViewIcon, 'lum-icon-component')}></span>)
    }
  }

  return (
    <div className={styles.treeContainer}>
      {iconChange()}
      <div
        className={cx(styles.treeHeadItem, {
          [String(styles.pointerTreeView)]: data.children?.length,
        })}
      >
        {data.type} - {data.friendlyName || data.id}{" "}
        <EditorButton
          id={data.id}
          inline={true}
          data={data.props as IComponentProps}
          config={configs[data.type]}
          visible={false}
          noUp={false}
          noDown={false}
          menu={false}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className={styles.treeChildren}>
          <ComponentTree data={data.children} />
        </div>
      ))}
    </div>
  );
};
