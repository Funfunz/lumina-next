import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../button/button";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";
export var menuButton = function (_a) {
    var id = _a.id, config = _a.config, data = _a.data;
    return (_jsxs("div", { className: 'editMenuContainer', children: [_jsx(AddComponentButton, { buttonType: "button", style: "menuButton", text: "Add Children", iconLeft: "lum-icon-plus", disabled: !config.editor.children }), _jsx(EditComponentButton, { buttonType: "button", style: "menuButton", text: "Edit", iconLeft: "lum-icon-edit", id: id, config: config, data: data }), _jsx(Button, { buttonType: "button", style: "menuButton", text: "Cut", iconLeft: "lum-icon-cut" }), _jsx(Button, { buttonType: "button", style: "menuButton", text: "Copy", iconLeft: "lum-icon-clone" }), _jsx(Button, { buttonType: "button", style: "menuButton", text: "Paste", iconLeft: "lum-icon-paste" }), _jsx(DeleteComponentButton, { buttonType: "button", style: "menuButton", text: "Delete", iconLeft: "lum-icon-cross", id: id })] }));
};
