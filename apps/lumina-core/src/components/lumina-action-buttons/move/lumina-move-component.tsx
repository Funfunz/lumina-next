import { Button } from "@/components/button/buttons"
import { useCallback } from "react"

type TProps = {
  id: string
  dispatch: any
  moveDirection: "up" | "down"
}

export const MoveComponentButton = ({ id, dispatch, moveDirection }: TProps) => {
  const direction = moveDirection === "up" // more user friendly to use string and transform to boolean
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

  return (
    <Button
      color="secondary"
      onClick={direction ? handleOnClickMoveUp : handleOnClickMoveDown}
      iconLeft={direction ? "lumina-slide-up" : "lumina-slide-down"}
    />
  )
}
