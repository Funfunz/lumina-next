import { IComponentData, IComponentProps } from "@/data/data";
import { useState, useCallback } from "react";
import cx from "classnames"
import styles from "./lumina-treeView.module.scss"
import { LuminaShowEdit } from "@/components/lumina-showEdit/lumina-showEdit";
import { LuminaComponentTree } from "./lumina-componentTree";

export const LuminaTreeBranch = ({ data }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  const iconChange = () => {
    if (data.children?.length) {
      return (
        <span className={cx(styles.treeViewIcon, showChildren ? 'lumina-close-up' : 'lumina-open-down', styles.treeViewPointer)} onClick={handleTreeHeadClick}></span>)
    }
    else {
      return (
        <span className={cx(styles.treeViewIcon, 'lumina-component')}></span>)
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
        <LuminaShowEdit
          id={data.id}
          inline={true}
          data={data.props as IComponentProps}
          visible={false}
          noUp={false}
          noDown={false}
          menu={false}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className={styles.treeChildren}>
          <LuminaComponentTree data={data.children} />
        </div>
      ))}
    </div>
  );
};
