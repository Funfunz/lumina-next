"use client";

import styles from "@/components/tabs/treeView/treeView.module.scss";
import cx from "classnames";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentData, IComponentProps } from "@/data/data";
import { useCallback, useState } from "react";
import { ShowEdit } from "../../showEdit/showEdit";
import { configs } from "@/staticComponentsPath";
import { SearchBar } from "../../search/search";

const TreeBranch = ({ data, noUp, noDown }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  return (
    <div className={styles.treeContainer}>
      <div className={styles.treeViewIcon}><span className="lumina-open-down"></span></div>
      <div
        className={cx(styles.treeHeadItem, {
          [String(styles.pointerTreeView)]: data.children?.length,
        })}
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
        <TreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1} />
      ))}
    </>
  );
};

export const TreeViewTab = () => {
  const {
    state: { builderDataContext },
  } = useLuminaContext();
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <div className={styles.treeviewContainer}>
    <div className={styles.treeHead}>
          <h3 className={styles.treeTitle}>Components</h3>
          <span className={styles.addContainer}>
          <ShowEdit noUp={true} noDown={true} id="" data={{}} config={{ name: "page", editor: { editable: false, delete: false, children: true } }} inline={true} />
          <h5 className={styles.addText}>Add</h5>
          </span>
          </div>
        <SearchBar/>
        <ComponentTree
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children
          }
        />
      </div>
    </>
  );
};
