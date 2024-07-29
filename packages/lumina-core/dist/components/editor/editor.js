"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import { useCallback, useState } from "react";
import { SidebarEditor } from "../../components/sidebar/sidebar";
export var Editor = function (_a) {
    var children = _a.children;
    var _b = useState(false), isBarOpen = _b[0], setIsBarOpen = _b[1];
    var handleMenuToggler = useCallback(function () {
        setIsBarOpen(!isBarOpen);
    }, [isBarOpen]);
    return (_jsxs("div", { className: cx('editorContainer', { open: isBarOpen, }), children: [_jsx(SidebarEditor, { handleToggler: handleMenuToggler, isBarOpen: isBarOpen }), _jsx("div", { children: children })] }));
};
