import { Button } from "@/components/button/buttons"
import { useLuminaContext } from "@/context/contextProvider"
import { useCallback } from "react"

type TProps = {
  id: string
  moveDirection: "up" | "down"
}

export const MoveComponentButton = ({ id, moveDirection }: TProps) => {
  const { dispatch } = useLuminaContext()
  const direction = moveDirection === "up" // more user friendly to use string and transform to boolean

  const handleOnClickMoveUp = useCallback((event: any) => {
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

  const handleOnClickMoveDown = useCallback((event: any) => {
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

  return (
    <Button
      color="secondary"
      onClick={direction ? handleOnClickMoveUp : handleOnClickMoveDown}
      iconLeft={direction ? "lumina-slide-up" : "lumina-slide-down"}
    />
  )
}
