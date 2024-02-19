"use client";

import styles from "@/components/treeView/treeView.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentData, IComponentProps } from "@/data/data";
import { MouseEventHandler, useCallback, useState } from "react";
import { ShowEdit } from "../showEdit/showEdit";
import { configs, editorConfigs } from "@/staticComponentsPath";

const TreeBranch = ({ data }: { data: IComponentData }) => {
  const [showChildren, setShowChildren] = useState(false);
  const { dispatch } = useLuminaContext();

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren]);

  const handleOnClickCreate: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch({
        type: "createComponent",
        data: {
          parentId: data.id,
          type: "linkBox",
          id: Math.random().toString(16).slice(2),
          friendlyName: "friendly link box",
          children: [],
          props: {
            title: "title",
            description: "description",
            href: "href",
            color: "white",
          },
        },
      });
    },
    []
  );

  return (
    <div className={styles.treeContainer}>
      <div
        className={`${styles.treeHead}${
          (data.children?.length && " " + styles.pointerTreeView) || ""
        }`}
        onClick={handleTreeHeadClick}
      >
        {data.type} - {data.id}{" "}
        <ShowEdit
          id={data.id}
          inline={true}
          config={configs[data.type]}
          data={data.props as IComponentProps}
        />
        {editorConfigs[data.type] && (
          <button className={styles.btnTreeView} onClick={handleOnClickCreate}>
            Add
          </button>
        )}
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
      {data.map((dataItem) => (
        <TreeBranch key={dataItem.id} data={dataItem} />
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
          <button className={styles.btnTreeView} onClick={handleAddClick}>
            Add
          </button>
        </div>
      )) ||
        null}
      <div>
        <h3 className={styles.treeHead}>Components</h3>
        <ComponentTree
          data={
            builderDataContext.builderData[builderDataContext.selectedPage]
              .children
          }
        />
      </div>
    </>
  );
};
