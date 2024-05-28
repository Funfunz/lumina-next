"use client";

import styles from "@/components/treeView/treeView.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { IComponentData, IComponentProps } from "@/data/data";
import { ChangeEvent, useCallback, useState } from "react";
import ReactModal from "react-modal";
import Select from "react-select"; 
import { ShowEdit, TConfig } from "../showEdit/showEdit";
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

type ShowEditProps = {
  id: string;
  config?: TConfig;
  data:IComponentProps;
};

export const TreeView = ({
    id,
    config,
    data,
  }: ShowEditProps) => {
    let {
      state: {
        builderDataContext,
      },
      dispatch,
    } = useLuminaContext();

    
    let [showModalAdd, setShowModalAdd] = useState(false); //Add Modal - BM
    let [selectedOption, setSelectedOption] = useState<{value: string, label: string}>(); //dropdown - new component
    let [newComponentFriendlyName, setNewComponentFriendlyName] = useState("") //friendly name - new component
    
    // Options for dropdown - BM
  const options = Object.keys(configs).map((opt) => {
    return {
      value: opt,
      label: configs[opt].name,
    };
  });

  // Handler for on Change from dropdown - BM
  let handleSelectChange = (options: any) => {
    setSelectedOption(options);
  };

  // Handler for on Change from dropdown - BM
  let handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComponentFriendlyName(event.target.value)
  };

  let handleCloseModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation()
      setShowModalAdd(false);
    },
    []
  );

  const handleAddPageClick = useCallback(() => {
    dispatch({
      type: "createPage",
      data: { name: "testPage", friendlyName: "Test Page" },
    });
  }, [dispatch]);

  const handleAddComponentClick = useCallback(() => {
    dispatch({
      type: "createComponent",
      data: {
        parentId: id,
        type: selectedOption?.value,
        friendlyName: newComponentFriendlyName,
        children: [],
        props: {}
      }
    });
  }, [dispatch, id, newComponentFriendlyName, selectedOption]);

  
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
            <Button text="Add new page" color="primary" outline onClick={handleAddPageClick} iconRight="lumina-plus"/>
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
      <Button text="Add new component" color="primary" outline onClick={handleAddComponentClick} iconRight="lumina-plus"/>
      
      {(config?.editor && (
      <ReactModal
        ariaHideApp={false}
        isOpen={showModalAdd}
        contentLabel="Modal for Adding Children Components"
        className={styles.modalEdit}
        overlayClassName={styles.modalOverlay}
        role={"dialog"}
      >
        <Select
          id={`deleteComponent_dropdown_${id}`}
          value={selectedOption}
          options={options}
          placeholder="Select a component..."
          onChange={handleSelectChange}
        />
        <label htmlFor={`deleteComponent_friendlyName_${id}`}>Friendly name</label>
        <input id={`deleteComponent_friendlyName_${id}`} type="text" value={newComponentFriendlyName} onChange={handleOnChangeNewComponentFriendlyName} />
        <div className={styles.inlineButtons}>
          <Button
            text="Add Component"
            color="primary"
            onClick={handleAddComponentClick}
          />
          <Button
            text="Close Modal"
            color="secondary"
            outline
            onClick={handleCloseModal}
            iconRight="lumina-cross"
          />
        </div>
      </ReactModal>
    )) ||
      null}
      </div>
    </>
  );
};
