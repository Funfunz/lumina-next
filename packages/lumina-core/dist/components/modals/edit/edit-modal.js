import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Title } from "../../../components/title/title";
import { Form, LuminaInputRenderer } from "../../../components/editor-button/inputRenderer";
import ReactModal from "react-modal";
import { Button } from "../../../components/button/button";
export var EditModal = function (_a) {
    var showModalEdit = _a.showModalEdit, handleCloseModal = _a.handleCloseModal, handleOnClickSaveData = _a.handleOnClickSaveData, handleOnChangeInput = _a.handleOnChangeInput, config = _a.config, formData = _a.formData;
    return (_jsxs(ReactModal, { ariaHideApp: false, isOpen: showModalEdit, contentLabel: "Component editor", className: 'modalEdit', overlayClassName: 'modalOverlay', children: [_jsx(Title, { content: config.name }), _jsx(Form, { children: config.props.map(function (configItem, index) { return (_jsx(LuminaInputRenderer, { config: configItem, value: formData[configItem.name] || "", handleOnChangeInput: handleOnChangeInput }, index)); }) }), _jsxs("div", { className: 'inlineButtons', children: [_jsx(Button, { buttonType: "button", text: "Save data", style: "primary", onClick: handleOnClickSaveData }), _jsx(Button, { buttonType: "button", text: "Close Modal", style: "primary", onClick: handleCloseModal })] })] }));
};
