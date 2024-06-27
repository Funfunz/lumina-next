"use client";

import { Button } from "@/components/button/buttons";
import { SearchBar } from "@/components/search/search";
import styles from "@/components/tabs/pages/page.module.scss";
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
      data: { id:"dadwadada" , pageName: "testPage", friendlyName: "Test Page", extendedName: "A Page for testing purposes", dateModified: Date.now.toString(), route: "/test", status: true},
    });
  }, [dispatch]);

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
    <div className={styles.pageContainer}>
      <div className={styles.pageHead}>
        <h3 className={styles.pageTitle}>Pages</h3>
            {(Object.keys(builderDataContext.builderData).length && (
              <div className={styles.addContainer}>
                <Button color="secondary" onClick={handleAddPageClick} iconRight="lumina-add" />
                <h5 className={styles.addText}>Add</h5>
              </div>
              )) ||
            null}
      </div>
    <SearchBar/>
    {Object.keys(builderDataContext.builderData).map((page) => (
      <div className={styles.pageHead} key={page}>
      {page}
    </div>
    ))}
    </div>
    <table>
    </table>
    </>
  );
};
