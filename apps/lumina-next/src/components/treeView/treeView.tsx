"use client"

import styles from "@/components/treeView/treeView.module.scss"
import cx from "classnames"
import { useLuminaContext } from "@/context/contextProvider"
import { IComponentData, IComponentProps } from "@/data/data"
import { useCallback, useState } from "react"
import { ShowEdit } from "../showEdit/showEdit"
import { configs } from "@/staticComponentsPath"
import { Button } from "../button/buttons"

const TreeBranch = ({ data, noUp, noDown }: { data: IComponentData, noUp: boolean, noDown: boolean }) => {
  const [showChildren, setShowChildren] = useState(false)

  const handleTreeHeadClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren])

  return (
    <div className={styles.treeContainer}>
      <div
        className={cx(styles.treeHeadItem, {
          [String(styles.pointerTreeView)]: data.children?.length,
        })}
        onClick={handleTreeHeadClick}
      >
        {data.type} - {data.friendlyName || data.id}{" "}
        <ShowEdit
          id={data.id}
          inline={true}
          config={configs[data.type]}
          data={data.props as IComponentProps}
          noUp={noUp}
          noDown={noDown}
        />
      </div>
      {(data.children?.length && showChildren && (
        <div className={styles.treeChildren}>
          <ComponentTree data={data.children} />
        </div>
      )) ||
        null}
    </div>
  )
}

const ComponentTree = ({ data }: { data: IComponentData[] }) => {
  if (!data) return null
  return (
    <>
      {data.sort(
        (a, b) => {
          if (a.order < b.order) {
            return -1
          } else if (a.order > b.order) {
            return 1
          }
          return 0
        }
      ).map((dataItem, index) => (
        <TreeBranch key={dataItem.id} data={dataItem} noUp={index === 0} noDown={index === data.length - 1} />
      ))}
    </>
  )
}

export const TreeView = () => {
  const {
    state: { builderDataContext },
    dispatch,
  } = useLuminaContext()

  const handleAddPageClick = useCallback(() => {
    dispatch({
      type: "createPage",
      data: { name: "testPage", friendlyName: "Test Page" },
    })
  }, [dispatch])

  return (
    <>
      {(Object.keys(builderDataContext.builderData).length && (
        <div>
          <div className={styles.treeHead}>
            <h3>Pages</h3>
            <Button text="Add new page" color="primary" outline onClick={handleAddPageClick} iconRight="lumina-plus" />
          </div>
          {Object.keys(builderDataContext.builderData).map((page) => (
            <div className={styles.treeHead} key={page}>
              {page}
            </div>
          ))}
        </div>
      )) ||
        null}
      <hr />
      <div>
        <div className={styles.treeHead}>
          <h3>Components</h3>
          <ShowEdit noUp={true} noDown={true} id="add-new-cmp" data={{}} config={{ name: "page", editor: { editable: false, delete: false, children: true } }} inline={true} />
        </div>
        <ComponentTree
          data={
            builderDataContext.builderData[builderDataContext.selectedPage].children
          }
        />
      </div>
    </>
  )
}
