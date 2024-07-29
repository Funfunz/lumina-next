import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import { DeleteModal } from "../../../components/modals/delete/delete-modal";
import { useLuminaContext } from "../../../context/contextProvider";
import { useCallback, useState } from "react";
export var DeleteComponentButton = function (_a) {
    var id = _a.id;
    var dispatch = useLuminaContext().dispatch;
    var _b = useState(false), showModalDelete = _b[0], setShowModalDelete = _b[1];
    var handleToggleDeleteModal = function () {
        setShowModalDelete(!showModalDelete);
    };
    /**
   * Deletes a component based on the ID
   */
    var handleOnClickDelete = useCallback(function () {
        dispatch({
            type: "deleteComponent",
            data: {
                id: id,
            },
        });
        setShowModalDelete(false);
    }, [dispatch, id]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { buttonType: "button", style: "danger", onClick: handleToggleDeleteModal, iconLeft: "lum-icon-cross" }), showModalDelete &&
                _jsx(DeleteModal, { showModalDelete: showModalDelete, handleCloseModal: handleToggleDeleteModal, handleOnClickDelete: handleOnClickDelete })] }));
};
