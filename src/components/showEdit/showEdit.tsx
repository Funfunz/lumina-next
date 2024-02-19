"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import styles from "./showEdit.module.scss";
import { useCallback, useState } from "react";
import ReactModal from "react-modal";
import { IComponentProps } from "@/data/data";
import { InputRenderer } from "./inputRenderer";
import Select from "react-select"; // checkbox

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

type Props = {
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
  },
};

export const ShowEdit = ({ id, onUpdate, config, data, inline }: Props) => {
  let {
    state: {
      appContext: { editor },
    },
    dispatch,
  } = useLuminaContext();
  let [showModalEdit, setShowModalEdit] = useState(false);
  let [showModalAdd, setShowModalAdd] = useState(false); //Add Button - BM
  let [formData, setFormData] = useState(data);
  let [selectedOption, setSelectedOption] = useState("Select an option"); //CheckBox - BM

  let handleOnClickEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setShowModalEdit(true);
    },
    []
  );

  let handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      alert("Delete button clicked from " + id);
      dispatch({
        type: "deleteComponent",
        data: {
          id,
        },
      });
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

  // Options for Checkbox - BM

  const options = [
    { value: "test1", label: "Test Component 1" },
    { value: "test2", label: "Test Component 2" },
    { value: "test3", label: "Test Component 3" },
  ];

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

      {/* -------Start Add Modal-------- BM */}

      {(config && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalAdd}
          contentLabel="Modal for Adding Children Components"
          style={customStyles}
        >
          <Select options={options} />
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
        <button className={styles.btnShowEdit} onClick={handleOnClickDelete}>
          Delete
        </button>
        <button className={styles.btnShowEdit} onClick={handleOnClickAdd}>
          Add
        </button>
      </div>
    </>
  );
};
