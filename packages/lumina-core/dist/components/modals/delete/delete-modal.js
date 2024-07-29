import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import ReactModal from "react-modal";
export var DeleteModal = function (_a) {
    var showModalDelete = _a.showModalDelete, handleCloseModal = _a.handleCloseModal, handleOnClickDelete = _a.handleOnClickDelete;
    return (_jsxs(ReactModal, { ariaHideApp: false, isOpen: showModalDelete, contentLabel: "Component Deletion", className: 'modalEdit', overlayClassName: 'modalOverlay', role: "dialog", children: [_jsx("p", { children: "Are you sure you want to delete the Component?" }), _jsx("p", { children: "This action is irreversible." }), _jsxs("div", { className: 'inlineButtons', children: [_jsx(Button, { buttonType: "button", text: "Yes", style: "danger", onClick: handleOnClickDelete }), _jsx(Button, { buttonType: "button", text: "Cancel", style: "primary", onClick: handleCloseModal })] })] }));
};
