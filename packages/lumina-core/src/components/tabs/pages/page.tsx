"use client";

import { Button } from "@/components/button/button";
import { SearchBar } from "@/components/search-bar/search-bar";
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
      data: { id: "dadwadada", pageName: "testPage", friendlyName: "Test Page", extendedName: "A Page for testing purposes", dateModified: Date.now.toString(), route: "/test", status: true },
    });
  }, [dispatch]);

  return (
    <div className='pageContainer'>
      <div className='pageHead'>
        <h3 className='pageTitle'>Pages</h3>
        {(Object.keys(builderDataContext.builderData).length && (
          <div className='addContainer'>
            <Button buttonType="button" text="Add" onClick={handleAddPageClick} iconLeft="lum-icon-plus-fill" />
          </div>
        )) ||
          null}
      </div>
      <SearchBar />
      {Object.keys(builderDataContext.builderData).map((page) => (
        <div className='pageHead' key={page}>
          {page}
        </div>
      ))}
    </div>
  );
};
