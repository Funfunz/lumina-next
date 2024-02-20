"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import styles from "./showEdit.module.scss";
import { MouseEventHandler, useCallback, useState } from "react";
import ReactModal from "react-modal";
import { IComponentProps } from "@/data/data";
import { InputRenderer } from "./inputRenderer";
import Select from "react-select"; // dropdown selection
import { componentNames } from "@/staticComponentsPath"; // dropdown selection

export type TConfigItem = TConfigItemValue | TConfigItemSelect;

interface TConfigItemBase {
  name: string;
  label: string;
}

export interface TConfigItemValue extends TConfigItemBase {
  type: "string" | "number";
}

export interface TConfigItemSelect<T = string> extends TConfigItemBase {
  type: "singleSelect" | "multiSelect";
  arrayValues: T[];
}

export type TElementConfig = (TConfigItemValue | TConfigItemSelect)[];

type ShowEditProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config?: TConfigItem[];
  inline?: boolean;
};

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    color: "black",
    top: "15%",
    left: "15%",
    right: "15%",
    bottom: "15%",
    background: "gray",
  },
};

export const ShowEdit = ({
  id,
  onUpdate,
  config,
  data,
  inline,
}: ShowEditProps) => {
  let {
    state: {
      appContext: { editor },
    },
    dispatch,
  } = useLuminaContext();
  let [showModalEdit, setShowModalEdit] = useState(false);
  let [showModalAdd, setShowModalAdd] = useState(false); //Add Modal - BM
  let [showModalDelete, setShowModalDelete] = useState(false); //Delete Modal - BM
  let [formData, setFormData] = useState(data);
  let [selectedOption, setSelectedOption] = useState(); //dropdown - BM

  let handleOnClickEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalEdit(true);
    },
    []
  );

  // Handle Delete
  let handleDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalDelete(true);
    },
    []
  );

  let handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch({
        type: "deleteComponent",
        data: {
          id,
        },
      });
      setShowModalDelete(false);
    },
    [dispatch, id]
  );

  // Add button - BM
  let handleOnClickAdd = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalAdd(true);
    },
    []
  );

  let handleCloseModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalEdit(false);
      setShowModalAdd(false);
      setShowModalDelete(false);
    },
    []
  );

  let handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value,
      });
    },
    [formData]
  );

  let handleOnClickSaveData = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalEdit(false);
      onUpdate && onUpdate(formData);
      dispatch({
        type: "updateBackend",
        data: {
          props: formData,
          id,
        },
      });
      dispatch({
        type: "updateComponent",
        data: {
          newProps: formData,
          id,
        },
      });
    },
    [dispatch, formData, id, onUpdate]
  );

  // Options for dropdown - BM
  const options = Object.keys(componentNames).map((opt) => {
    return {
      value: opt,
      label: componentNames[opt],
    };
  });

  // Handler for on Change from dropdown - BM
  let handleSelectChange = (options: any) => {
    setSelectedOption(options);
  };

  if (!editor) return null;

  return (
    <>
      {/* -------Start Edit Modal-------- */}
      {(config && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalEdit}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          {config.map((configItem, index) => (
            <InputRenderer
              key={index}
              config={configItem}
              value={formData[configItem.name] || ""}
              handleOnChangeInput={handleOnChangeInput}
            />
          ))}
          <button
            className={styles.btnShowEdit}
            onClick={handleOnClickSaveData}
          >
            Save data
          </button>
          <button className={styles.btnShowEdit} onClick={handleCloseModal}>
            Close Modal
          </button>
        </ReactModal>
      )) ||
        null}
      {/* -------End Edit Modal-------- */}

      {/* -------Start Delete Modal-------- BM */}

      {(config && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalDelete}
          contentLabel="Modal for Component Deletion"
          style={customStyles}
          role={"dialog"}
        >
          <p>Are you sure you want to delete the Component?</p>
          <button className={styles.btnShowEdit} onClick={handleOnClickDelete}>
            Yes
          </button>
          <button className={styles.btnShowEdit} onClick={handleCloseModal}>
            Cancel
          </button>
        </ReactModal>
      )) ||
        null}
      {/* -------End Delete Modal-------- */}

      {/* -------Start Add Modal-------- BM */}

      {(config && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalAdd}
          contentLabel="Modal for Adding Children Components"
          style={customStyles}
        >
          <Select
            value={selectedOption}
            options={options}
            placeholder="Select from the list"
            onChange={handleSelectChange}
          />
          <button className={styles.btnShowEdit}>Add Component</button>
          <button className={styles.btnShowEdit} onClick={handleCloseModal}>
            Close Modal
          </button>
        </ReactModal>
      )) ||
        null}
      {/* -------End Add Modal-------- */}

      <div
        className={`${styles.showEdit} ${
          inline ? styles.showEditContainerInline : styles.showEditContainer
        }`}
      >
        {(config && (
          <button className={styles.btnShowEdit} onClick={handleOnClickEdit}>
            Edit
          </button>
        )) ||
          null}
        <button className={styles.btnShowEdit} onClick={handleDelete}>
          Delete
        </button>
        <button className={styles.btnShowEdit} onClick={handleOnClickAdd}>
          Add
        </button>
      </div>
    </>
  );
};
