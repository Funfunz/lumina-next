"use client";

import styles from "../treeView/treeView.module.scss";
import cx from "classnames";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentData, IComponentProps } from "@/data/data";
import { useCallback, useState } from "react";
import { ShowEdit } from "../../showEdit/showEdit";
import { SearchBar } from "../../search/search";
import { TreeviewHeader } from "./treeviewHeader/treeviewHeader";
import { AddComponentButton } from "@/components/lumina-action-buttons/add/lumina-add-component";

const TreeBranch = ({ data }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);


  const iconChange = () => {
    if (data.children?.length) {
      return (
        <span className={cx(styles.treeViewIcon, showChildren ? 'lumina-close-up' : 'lumina-open-down')} onClick={handleTreeHeadClick}></span>)
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
        <ShowEdit
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
          <ComponentTree data={data.children} />
        </div>
      ))}
    </div>
  );
};

const ComponentTree = ({ data }: { data: IComponentData[] }) => {
  if (!data) return null;
  return (
    <>
      {data.sort(
        (a, b) => {
          if (a.order < b.order) {
            return -1;
          } else if (a.order > b.order) {
            return 1;
          }
          return 0;
        }
      ).map((dataItem, index) => (
        <TreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1} />
      ))}
    </>
  );
};

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
    dispatch
  } = useLuminaContext();
  return (
    <div className={styles.treeviewContainer}>
      <div className={styles.treeHead}>
        <h3 className={styles.treeTitle}>Components</h3>
        <span className={styles.treeAddButton}>
          <AddComponentButton id={""} text="Add" />
        </span>
      </div>
      <SearchBar />
      <TreeviewHeader />
      <div className={styles.treeScroll}>
        <ComponentTree
          // Confirmar se a data é undefined ou não
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children!
          }
        />
      </div>
    </div>
  );
};
