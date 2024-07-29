var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import { EditModal } from "../../../components/modals/edit/edit-modal";
import { useLuminaContext } from "../../../context/contextProvider";
import { useCallback, useState } from "react";
export var EditComponentButton = function (_a) {
    var id = _a.id, data = _a.data, onUpdate = _a.onUpdate, config = _a.config;
    var dispatch = useLuminaContext().dispatch;
    var _b = useState(false), showModalEdit = _b[0], setShowModalEdit = _b[1];
    var _c = useState(data || {}), formData = _c[0], setFormData = _c[1];
    var handleToggleEditModal = function () {
        setShowModalEdit(!showModalEdit);
    };
    var handleOnClickSaveData = useCallback(function () {
        setShowModalEdit(false);
        onUpdate && onUpdate(formData);
        dispatch({
            type: "updateBackend",
            data: {
                props: formData,
                id: id,
            },
        });
        dispatch({
            type: "updateComponent",
            data: {
                newProps: formData,
                id: id,
            },
        });
    }, [dispatch, formData, id, onUpdate]);
    var handleOnChangeInput = useCallback(function (key, value) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[key] = value, _a)));
    }, [formData]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { buttonType: "button", onClick: handleToggleEditModal, iconLeft: "lum-icon-edit" }), showModalEdit &&
                _jsx(EditModal, { showModalEdit: showModalEdit, handleCloseModal: handleToggleEditModal, handleOnClickSaveData: handleOnClickSaveData, handleOnChangeInput: handleOnChangeInput, config: config, formData: formData })] }));
};
