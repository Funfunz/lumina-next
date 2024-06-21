"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import styles from "./showEdit.module.scss";
import { ChangeEvent, PropsWithChildren, useCallback, useState } from "react";
import ReactModal from "react-modal";
import { IComponentProps } from "@/data/data";
import { InputRenderer } from "./inputRenderer";
import Select from "react-select"; // dropdown selection
import { configs } from "@/staticComponentsPath"; // dropdown selection
import { Button } from "../button/buttons";

export type TConfigItem = TConfigItemValue | TConfigItemSelect;

interface TConfigItemBase {
  name: string;
  label: string;
}

export type TEditorConfig = {
  children: boolean;
  editable: boolean;
  delete: boolean;
};

export interface TConfigItemValue extends TConfigItemBase {
  type: "string" | "number";
}

export interface TConfigItemSelect<T = string> extends TConfigItemBase {
  type: "singleSelect" | "multiSelect";
  arrayValues: T[];
}

export type TConfig = {
  name: string,
  props?: (TConfigItemValue | TConfigItemSelect)[]
  editor: TEditorConfig
}

export type TElementConfig = (TConfigItemValue | TConfigItemSelect)[];

type ShowEditProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config?: TConfig;
  inline?: boolean;
  noUp?: boolean
  noDown?: boolean
};

const Title = ({name}: {name: string}) => {
  return <h1 className={styles.title}>{name}</h1>
}

const Form: React.FC<PropsWithChildren> = ({children}) => {
  return <table className={styles.formTable}><tbody>{children}</tbody></table>
}

export const ShowEdit = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown
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
  let [toDeleteInput, setToDeleteInput] = useState(""); //Delete Modal - Input
  let [deleteInputError, setDeleteInputError] = useState(false); //Delete Modal - error

  let [formData, setFormData] = useState(data || {});
  let [selectedOption, setSelectedOption] = useState<{value: string, label: string}>(); //dropdown - new component
  let [newComponentFriendlyName, setNewComponentFriendlyName] = useState("") //friendly name - new component

  let handleOnChangeDeleteInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setToDeleteInput(event.currentTarget.value)
      setDeleteInputError(false)
    },
    []
  )

  let handleOnClickEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation()
      setShowModalEdit(true);
    },
    []
  );

  // Handle Delete
  let handleDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setToDeleteInput("")
      setShowModalDelete(true)
    },
    []
  );

  let handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      if (toDeleteInput === config?.name) {
        dispatch({
          type: "deleteComponent",
          data: {
            id,
          },
        })
        setShowModalDelete(false)
      } else {
        setDeleteInputError(true)
      }
    },
    [config?.name, dispatch, id, toDeleteInput]
  );

  // Add button - BM
  let handleOnClickAdd = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation()
      setShowModalAdd(true);
    },
    []
  );

  let handleCloseModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation()
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

  let handleOnClickAddComponentModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!selectedOption) return
      setShowModalAdd(false);
      dispatch({
        type: "createComponent",
        data: {
          parentId: id,
          type: selectedOption.value,
          friendlyName: newComponentFriendlyName,
          children: [],
          props: {}
        }
      });
      // TODO: not implemented
      // dispatch({
      //   type: "createComponentBackend",
      //   data: {
      //     props: {},
      //     id,
      //   },
      // });
    },
    [dispatch, id, newComponentFriendlyName, selectedOption]
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

  let handleOnClickMoveUp = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: "moveUpComponent",
        data: {
          id,
        },
      })
    },
    [dispatch, id]
  );

  let handleOnClickMoveDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch({
        type: "moveDownComponent",
        data: {
          id,
        },
      })
    },
    [dispatch, id]
  );

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

  if (!editor) return null;
  return (
    <>
      {/* -------Start Edit Modal-------- */}
      {(config?.props && config?.editor.editable && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalEdit}
          contentLabel="Component editor"
          className={styles.modalEdit}
          overlayClassName={styles.modalOverlay}
        >
          <Title name={config.name}/>
          <Form>
            {config.props.map((configItem, index) => (
              <InputRenderer
                key={index}
                config={configItem}
                value={formData[configItem.name] || ""}
                handleOnChangeInput={handleOnChangeInput}
              />
            ))}
          </Form>
          <div className={styles.inlineButtons}>
            <Button
              text="Save data"
              color="primary"
              onClick={handleOnClickSaveData}
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
      {/* -------End Edit Modal-------- */}

      {/* -------Start Delete Modal-------- BM */}

      {(config?.editor.delete && (
        <ReactModal
          ariaHideApp={false}
          isOpen={showModalDelete}
          contentLabel="Component Deletion"
          className={styles.modalEdit}
          overlayClassName={styles.modalOverlay}
          role={"dialog"}
        >
          <p>Are you sure you want to delete the Component?</p>
          <p>Write the component name <b>{config.name}</b> below to delete.</p>
          <input type="text" value={toDeleteInput} onChange={handleOnChangeDeleteInput}/>
          {deleteInputError && "Name does not match."}
          <div className={styles.inlineButtons}>
            <Button
              text="Yes"
              color="danger"
              onClick={handleOnClickDelete}
            />
            <Button
              text="Cancel"
              color="secondary"
              outline
              onClick={handleCloseModal}
              iconRight="lumina-cross"
            />
          </div>
        </ReactModal>
      )) ||
        null}
      {/* -------End Delete Modal-------- */}

      {/* -------Start Add Modal-------- BM */}

      {(config?.editor.children && (
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
              onClick={handleOnClickAddComponentModal}
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
      {/* -------End Add Modal-------- */}

      {(inline && (
        <div
          className={`${styles.showEdit} ${styles.showEditContainerInline}`}
        >
          {(
            config?.props && config.editor.editable && (
              <Button onClick={handleOnClickEdit} round iconLeft="lumina-pencil"/>
            )
          ) || null}
          {(
            config?.editor.delete && (
              <Button
                color="danger"
                onClick={handleDelete}
                round
                iconLeft="lumina-cross"
              />
            )
          ) || null}
          {(
            config?.editor.children && (
              <Button color="primary" outline onClick={handleOnClickAdd} round iconLeft="lumina-plus"/>
            )
          ) || null}
          {!noUp && <Button color="secondary" outline onClick={handleOnClickMoveUp} round iconLeft="lumina-arrow-up"/> || null}
          {!noDown && <Button color="secondary" outline onClick={handleOnClickMoveDown} round iconLeft="lumina-arrow-down"/> || null}
        </div>
      )) || (
        <div
          className={`${styles.showEdit} ${styles.showEditContainer}`}
        >
          {(
            config?.props && config.editor.editable && (
              <Button text="Edit" onClick={handleOnClickEdit} iconRight="lumina-pencil"/>
            )
          ) || null}
          {(
            config?.editor.delete && (
              <Button
                text="Delete"
                color="danger"
                onClick={handleDelete}
                iconRight="lumina-cross"
              />
            )
          ) || null}
          {(
            config?.editor.children && (
              <Button text="Add" color="primary" outline onClick={handleOnClickAdd} iconRight="lumina-plus"/>
            )
          ) || null}
        </div>
      )}



    </>
  );
};
