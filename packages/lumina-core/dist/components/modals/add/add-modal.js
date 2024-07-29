import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import ReactModal from "react-modal";
import Select from "react-select";
import { getComponentConfig } from "../../../main";
export var AddModal = function (_a) {
    var id = _a.id, showModalAdd = _a.showModalAdd, handleCloseModal = _a.handleCloseModal, handleAddComponent = _a.handleAddComponent, selectedOption = _a.selectedOption, handleSelectChange = _a.handleSelectChange, newComponentFriendlyName = _a.newComponentFriendlyName, handleOnChangeNewComponentFriendlyName = _a.handleOnChangeNewComponentFriendlyName;
    var configs = getComponentConfig();
    var options = Object.keys(configs).map(function (opt) {
        return {
            value: opt,
            label: configs[opt].config.name,
        };
    });
    return (_jsxs(ReactModal, { ariaHideApp: false, isOpen: showModalAdd, contentLabel: "Modal for Adding Children Components", className: 'modalEdit', overlayClassName: 'modalOverlay', role: "dialog", children: [_jsx(Select, { id: "deleteComponent_dropdown_".concat(id), value: selectedOption, options: options, placeholder: "Select a component...", onChange: handleSelectChange }), _jsx("label", { htmlFor: "deleteComponent_friendlyName_".concat(id), children: "Friendly name" }), _jsx("input", { id: "deleteComponent_friendlyName_".concat(id), type: "text", value: newComponentFriendlyName, onChange: handleOnChangeNewComponentFriendlyName }), _jsxs("div", { className: 'inlineButtons', children: [_jsx(Button, { buttonType: "button", text: "Add Component", style: "primary", onClick: handleAddComponent }), _jsx(Button, { buttonType: "button", text: "Close Modal", style: "primary", onClick: handleCloseModal })] })] }));
};
