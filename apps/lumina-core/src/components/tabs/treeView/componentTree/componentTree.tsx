"use client"

import { IComponentData } from "@/data/data";
import { TreeBranch } from "../treeBranch/treeBranch";
import { useEffect, useRef, useState } from "react";

type EditorExpandMenu = {
  id: string
  isOpen: boolean
}

const INITIALSTATE: EditorExpandMenu = {
  id: "",
  isOpen: false
}

export const ComponentTree = ({ data }: { data: IComponentData[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<EditorExpandMenu>(INITIALSTATE)

  let previousState = useRef<EditorExpandMenu>(INITIALSTATE)

  useEffect(() => {
    previousState.current = isMenuOpen
  }, [isMenuOpen])


  const handleOpenMenu = (id: string) => {
    if (previousState.current.id === id) {
      setIsMenuOpen(INITIALSTATE)
    } else {
      setIsMenuOpen({
        id: id,
        isOpen: true
      })
    }
  }

  const handleCloseAll = () => {
    setIsMenuOpen(INITIALSTATE)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseAll)
    return (
      document.removeEventListener("mousedown", handleCloseAll)
    )
  }, [])



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
        <TreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1} handleMenus={handleOpenMenu} isMenuOpen={isMenuOpen} />
      ))}
    </>
  );
};
