"use client";

import { LuminaButton } from "@/components/lumina-button/lumina-button";
import { LuminaSearchBar } from "@/components/lumina-search/lumina-search";
import styles from "@/components/lumina-tabs/pages/lumina-page.module.scss";
import { useLuminaContext } from "@/context/contextProvider";
import { useCallback } from "react";

export const LuminaPagesTab = () => {
  const {
    state: { builderDataContext },
    dispatch,
  } = useLuminaContext();

  const handleAddPageClick = useCallback(() => {
    dispatch({
      type: "createPage",
      data: { id: "dadwadada", pageName: "testPage", friendlyName: "Test Page", extendedName: "A Page for testing purposes", dateModified: Date.now.toString(), route: "/test", status: true },
    });
  }, [dispatch]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHead}>
        <h3 className={styles.pageTitle}>Pages</h3>
        {(Object.keys(builderDataContext.builderData).length && (
          <div className={styles.addContainer}>
            <LuminaButton buttonType="button" text="Add" onClick={handleAddPageClick} iconLeft="lum-icon-plus-fill" />
          </div>
        )) ||
          null}
      </div>
      <LuminaSearchBar />
      {Object.keys(builderDataContext.builderData).map((page) => (
        <div className={styles.pageHead} key={page}>
          {page}
        </div>
      ))}
    </div>
  );
};
