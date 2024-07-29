"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Documentation found at ./readme.md
 */
import { useLuminaContext } from "../../context/contextProvider";
import cx from "classnames";
import { EditComponentButton } from "../action-buttons/edit/edit-component";
import { AddComponentButton } from "../action-buttons/add/add-component";
import { DeleteComponentButton } from "../action-buttons/delete/delete-component";
import { VisibleComponentButton } from "../action-buttons/visible/visible-component";
import { MoveComponentButton } from "../action-buttons/move/move-component";
import { MenuComponentButton } from "../action-buttons/menu/menu-component";
export var EditorButton = function (_a) {
    var id = _a.id, onUpdate = _a.onUpdate, config = _a.config, data = _a.data, inline = _a.inline, noUp = _a.noUp, noDown = _a.noDown, visible = _a.visible, menu = _a.menu;
    var editor = useLuminaContext().state.appContext.editor;
    if (!editor)
        return null;
    return (_jsxs("div", { className: cx('showEdit', inline ? 'showEditContainerInline' : 'showEditContainer'), children: [(config === null || config === void 0 ? void 0 : config.editor.editable) &&
                _jsx(EditComponentButton, { buttonType: "button", id: id, onUpdate: onUpdate, data: data, config: config }), (config === null || config === void 0 ? void 0 : config.editor.children) &&
                _jsx(AddComponentButton, { buttonType: "button", id: id }), (config === null || config === void 0 ? void 0 : config.editor.delete) &&
                _jsx(DeleteComponentButton, { buttonType: "button", id: id }), inline && !visible &&
                _jsx(VisibleComponentButton, {}), inline && !noUp &&
                _jsx(MoveComponentButton, { moveDirection: "up", id: id }), inline && !noDown &&
                _jsx(MoveComponentButton, { moveDirection: "down", id: id }), inline && !menu &&
                _jsx(MenuComponentButton, {})] }));
};
