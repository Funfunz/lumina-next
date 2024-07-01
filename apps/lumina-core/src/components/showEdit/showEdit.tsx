"use client";

/**
 * Documentation found at ./readme.md
 */

import { useLuminaContext } from "@/context/contextProvider";
import cx from "classnames"
import styles from "./showEdit.module.scss";
import { ChangeEvent, useCallback, useState, useEffect } from "react";
import { IComponentData, IComponentProps } from "@/data/data";
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
  lookUp?: boolean;
  menu?: boolean;
};

export const ShowEdit = ({
  id,
  onUpdate,
  config,
  data,
  inline,
  noUp,
  noDown,
  lookUp,
  menu,
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
   * Open/close modal handlers
   */
  const handleOpenEditModal = () => {
    setShowModalEdit(true)
  }

  const handleOpenDeleteModal = () => {
    setShowModalDelete(true)
  }

  const handleOpenAddModal = () => {
    setShowModalAdd(true)
  }

  const handleCloseModal = () => {
    setShowModalEdit(false)
    setShowModalAdd(false)
    setShowModalDelete(false)
  }
  /** */

  /**
   * Functional handlers
   */
  /**
   * Adds a component to the tree
   */
  const handleAddComponent = useCallback(() => {
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
  const handleOnClickSaveData = useCallback(() => {
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
  const handleOnClickDelete = useCallback(() => {
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

  const handleOnClickMoveUp = useCallback(() => {
    dispatch({
      type: "moveUpComponent",
      data: {
        id,
      },
    })
  },
    [dispatch, id]
  )

  const handleOnClickMoveDown = useCallback(() => {
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


  //TODO: Work in progress for limitUp on TreeView
  // const limitUp = ({ data }: { data: IComponentProps }) => {
  //   console.log(data);
  //   if (!data) {
  //       return null;
  //   } else if (data) {
  //       return Object.keys(data).map((key, index) => (
  //       <Button
  //           key={key}
  //           color={"disabled"}
  //           iconLeft="lumina-slide-up"
  //           onClick={index === 0 ? handleOnClickMoveUp : undefined}
  //       />
  //   ))} return (<Button
  //       color={"secondary"}
  //       iconLeft="lumina-slide-up"
  //       onClick={handleOnClickMoveUp}
  //     />);
  //   }


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
            iconLeft="lumina-edit"
          />}

        {config?.editor.delete &&
          <Button
            color="danger"
            onClick={handleOpenDeleteModal}
            round
            iconLeft="lumina-delete"
          />}

        {config?.editor.children &&
          <Button
            color="secondary"
            onClick={handleOpenAddModal}
            iconLeft="lumina-item-add"
          />}

        {inline && !lookUp &&
          <Button
            color="secondary"
            iconLeft="lumina-visible"
          />}

        {inline && !noUp &&
          <Button
          color="secondary"
          onClick={handleOnClickMoveUp}
          iconLeft="lumina-slide-up"
        />}

        {inline && !noDown &&
          <Button
            color="disabled"
            onClick={handleOnClickMoveDown}
            iconLeft="lumina-slide-down"
          />}

        {inline && !menu &&
          <Button
            color="secondary"
            iconLeft="lumina-menu"
          />}

      </div >
    </>
  );
};
