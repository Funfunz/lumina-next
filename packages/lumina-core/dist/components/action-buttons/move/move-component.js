import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import { useLuminaContext } from "../../../context/contextProvider";
import { useCallback } from "react";
export var MoveComponentButton = function (_a) {
    var id = _a.id, moveDirection = _a.moveDirection;
    var dispatch = useLuminaContext().dispatch;
    var direction = moveDirection === "up"; // more user friendly to use string and transform to boolean
    var handleOnClickMoveUp = useCallback(function () {
        dispatch({
            type: "moveUpComponent",
            data: {
                id: id,
            },
        });
    }, [dispatch, id]);
    var handleOnClickMoveDown = useCallback(function () {
        dispatch({
            type: "moveDownComponent",
            data: {
                id: id,
            },
        });
    }, [dispatch, id]);
    return (_jsx(Button, { buttonType: "button", onClick: direction ? handleOnClickMoveUp : handleOnClickMoveDown, iconLeft: direction ? "lum-icon-arrow-up" : "lum-icon-arrow-down" }));
};
