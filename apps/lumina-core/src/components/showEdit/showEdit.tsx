"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
import styles from "./showEdit.module.scss";
import { ChangeEvent, useCallback, useState } from "react";
import { IComponentProps } from "@/data/data";
import { Button } from "../button/buttons";
import { TConfig, TSelectedOption } from "@/models/showEditModel";
import { EditModal } from "../lumina-modals/edit/edit-modal";
import { DeleteModal } from "../lumina-modals/delete/delete-modal";
import { AddModal } from "../lumina-modals/add/add-modal";

type ShowEditProps = {
  id: string;
  onUpdate?: (data: any) => void;
  data: IComponentProps;
  config?: TConfig;
  inline?: boolean;
  noUp?: boolean
  noDown?: boolean
};

export const ShowEdit = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown
}: ShowEditProps) => {
  const {
    state: {
      appContext: { editor },
    },
    dispatch,
  } = useLuminaContext();

  const initialSelectedOption: TSelectedOption = {
    value: "",
    label: ""
  }

  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false); //Add Modal - BM
  const [showModalDelete, setShowModalDelete] = useState(false); //Delete Modal - BM
  const [formData, setFormData] = useState(data || {});
  const [selectedOption, setSelectedOption] = useState<TSelectedOption>(initialSelectedOption); //dropdown - new component
  const [newComponentFriendlyName, setNewComponentFriendlyName] = useState("") //friendly name - new component

  /**
   * Open modal handlers
   */
  const handleOpenEditModal = () => {
    setShowModalEdit(true)
  }

  const handleOpenDeleteModal = () => {
    // setToDeleteInput("")
    setShowModalDelete(true)
  }

  const handleOpenAddModal = () => {
    setShowModalAdd(true)
  }
  /** */

  const handleCloseModal = () => {
    setShowModalEdit(false)
    setShowModalAdd(false)
    setShowModalDelete(false)
  }

  /**
   * Functional handlers
   */
  /**
   * Adds a component to the tree
   */
  const handleAddComponent = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      if (!selectedOption) return
      setShowModalAdd(false)
      dispatch({
        type: "createComponent",
        data: {
          parentId: id,
          type: selectedOption.value,
          friendlyName: newComponentFriendlyName,
          children: [],
          props: {}
        }
      })
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

  /**
   * Saves the edit data
   */
  const handleOnClickSaveData = useCallback(
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
      })
      dispatch({
        type: "updateComponent",
        data: {
          newProps: formData,
          id,
        },
      })
    },
    [dispatch, formData, id, onUpdate]
  )

  /**
   * Deletes a component based on the ID
   */
  const handleOnClickDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch({
        type: "deleteComponent",
        data: {
          id,
        },
      })
      setShowModalDelete(false)
    },
    [dispatch, id]
  )

  const handleOnClickMoveUp = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch({
        type: "moveUpComponent",
        data: {
          id,
        },
      })
    },
    [dispatch, id]
  )

  const handleOnClickMoveDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      dispatch({
        type: "moveDownComponent",
        data: {
          id,
        },
      })
    },
    [dispatch, id]
  )

  // Options for dropdown - BM


  // Handler for on Change from dropdown - BM
  const handleSelectChange = (options: any) => {
    setSelectedOption(options)
  }

  // Handler for on Change from dropdown - BM
  const handleOnChangeNewComponentFriendlyName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComponentFriendlyName(event.target.value)
  }

  // Handler to store data while editing the component
  const handleOnChangeInput = useCallback(
    (key: string, value: string | number) => {
      setFormData({
        ...formData,
        [key]: value,
      })
    },
    [formData]
  )

  if (!editor) return null;
  return (
    <>
      {config?.props && config?.editor.editable &&
        <EditModal showModalEdit={showModalEdit}
          handleCloseModal={handleCloseModal}
          handleOnClickSaveData={handleOnClickSaveData}
          handleOnChangeInput={handleOnChangeInput}
          config={config}
          formData={formData}
        />
      }

      {config?.editor.delete &&
        <DeleteModal showModalDelete={showModalDelete}
          handleCloseModal={handleCloseModal}
          handleOnClickDelete={handleOnClickDelete}
        />
      }

      {config?.editor.children &&
        <AddModal showModalAdd={showModalAdd}
          handleCloseModal={handleCloseModal}
          handleAddComponent={handleAddComponent}
          selectedOption={selectedOption}
          handleSelectChange={handleSelectChange}
          handleOnChangeNewComponentFriendlyName={handleOnChangeNewComponentFriendlyName}
          newComponentFriendlyName={newComponentFriendlyName}
          id={id}
        />
      }

      <div
        className={cx(styles.showEdit, inline ? styles.showEditContainerInline : styles.showEditContainer)}
      >
        {config?.props && config.editor.editable &&
          <Button
            onClick={handleOpenEditModal}
            round
            iconLeft="lumina-pencil"
          />}

        {config?.editor.delete &&
          <Button
            color="danger"
            onClick={handleOpenDeleteModal}
            round
            iconLeft="lumina-cross"
          />}

        {config?.editor.children &&
          <Button
            color="primary"
            outline
            onClick={handleOpenAddModal}
            round
            iconLeft="lumina-plus"
          />}

        {inline && !noUp &&
          <Button
            color="secondary"
            outline
            onClick={handleOnClickMoveUp}
            round
            iconLeft="lumina-arrow-up"
          />}

        {inline && !noDown &&
          <Button
            color="secondary"
            outline
            onClick={handleOnClickMoveDown}
            round
            iconLeft="lumina-arrow-down"
          />}
      </div >
    </>
  );
};
