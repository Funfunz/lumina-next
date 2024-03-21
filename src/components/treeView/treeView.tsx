"use client";

import styles from "@/components/treeView/treeView.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentData, IComponentProps } from "@/data/data";
import { useCallback, useState } from "react";
import { ShowEdit } from "../showEdit/showEdit";
import { configs } from "@/staticComponentsPath";
import { Button } from "../button/buttons";

const TreeBranch = ({ data, noUp, noDown }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  return (
    <div className={styles.treeContainer}>
      <div
        className={`${styles.treeHead}${
          (data.children?.length && " " + styles.pointerTreeView) || ""
        }`}
        onClick={handleTreeHeadClick}
      >
        {data.type} - {data.friendlyName || data.id}{" "}
        <ShowEdit
          id={data.id}
          inline={true}
          config={configs[data.type]}
          data={data.props as IComponentProps}
          noUp={noUp}
          noDown={noDown}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className={styles.treeChildren}>
          <ComponentTree data={data.children} />
        </div>
      )) ||
        null}
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
        <TreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1}/>
      ))}
    </>
  );
};

export const TreeView = () => {
  const {
    state: { builderDataContext },
    dispatch,
  } = useLuminaContext();
  const handleAddClick = useCallback(() => {
    dispatch({
      type: "createPage",
      data: { name: "testPage", friendlyName: "Test Page" },
    });
  }, [dispatch]);
  return (
    <>
      {(Object.keys(builderDataContext.builderData).length && (
        <div>
          <h3 className={styles.treeHead}>Pages</h3>
          {Object.keys(builderDataContext.builderData).map((page) => (
            <div className={styles.treeHead} key={page}>
              {page}
            </div>
          ))}
          <div className={styles.treeHead}>
            <Button text="Add new page" color="primary" outline onClick={handleAddClick} iconRight="lumina-plus"/>
          </div>
        </div>
      )) ||
        null}
      <div>
        <h3 className={styles.treeHead}>Components</h3>
        <ComponentTree
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children
          }
        />
      </div>
    </>
  );
};
