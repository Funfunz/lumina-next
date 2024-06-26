"use client";

import { Button } from "@/components/button/buttons";
import styles from "@/components/tabs/pages/pages.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { useCallback } from "react";

export const PagesTab = () => {
  const {
    state: { builderDataContext },
    dispatch,
  } = useLuminaContext();

  const handleAddPageClick = useCallback(() => {
    dispatch({
      type: "createPage",
      data: { name: "testPage", friendlyName: "Test Page" },
    });
  }, [dispatch]);

  return (
    <>
      {(Object.keys(builderDataContext.builderData).length && (
        <div>
          <div className={styles.treeHead}>
            <h3>Pages</h3>
            <Button text="Add new page" color="primary" outline onClick={handleAddPageClick} iconRight="lumina-add" />
          </div>
          {Object.keys(builderDataContext.builderData).map((page) => (
            <div className={styles.treeHead} key={page}>
              {page}
            </div>
          ))}
        </div>
      )) ||
        null}
    </>
  );
};
