import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import { AddModal } from "../../../components/modals/add/add-modal";
import { useLuminaContext } from "../../../context/contextProvider";
import { useCallback, useState } from "react";
export var AddComponentButton = function (_a) {
    var id = _a.id, text = _a.text;
    var dispatch = useLuminaContext().dispatch;
    var initialSelectedOption = {
        value: "",
        label: ""
    };
    var _b = useState(false), showModalAdd = _b[0], setShowModalAdd = _b[1];
    var _c = useState(""), newComponentFriendlyName = _c[0], setNewComponentFriendlyName = _c[1]; //friendly name - new component
    var _d = useState(initialSelectedOption), selectedOption = _d[0], setSelectedOption = _d[1]; //dropdown - new component
    var handleToggleAddModal = function () {
        setShowModalAdd(!showModalAdd);
    };
    var handleAddComponent = useCallback(function () {
        if (!selectedOption)
            return;
        setShowModalAdd(false);
        dispatch({
            type: "createComponent",
            data: {
                parentId: id || '',
                type: selectedOption.value,
                friendlyName: newComponentFriendlyName,
                children: [],
                props: {}
            }
        });
        // TODO: not implemented
        // dispatch({
        //   type: "createComponentBackend",
        //   data: {
        //     props: {},
        //     id,
        //   },
        // });
    }, [dispatch, id, newComponentFriendlyName, selectedOption]);
    // Handler for on Change from dropdown - BM
    var handleSelectChange = function (options) {
        setSelectedOption(options);
    };
    // Handler for on Change from dropdown - BM
    var handleOnChangeNewComponentFriendlyName = function (event) {
        setNewComponentFriendlyName(event.target.value);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { buttonType: "button", onClick: handleToggleAddModal, text: text, iconLeft: "lum-icon-plus-fill" }), showModalAdd &&
                _jsx(AddModal, { showModalAdd: showModalAdd, handleCloseModal: handleToggleAddModal, handleAddComponent: handleAddComponent, selectedOption: selectedOption, handleSelectChange: handleSelectChange, handleOnChangeNewComponentFriendlyName: handleOnChangeNewComponentFriendlyName, newComponentFriendlyName: newComponentFriendlyName, id: id })] }));
};
