import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import cx from "classnames";
import { EditorButton } from "../../../../components/editor-button/editor-button";
import { ComponentTree } from "../componentTree/componentTree";
export var TreeBranch = function (_a) {
    var _b, _c;
    var data = _a.data;
    var _d = useState(false), showChildren = _d[0], setShowChildren = _d[1];
    var handleTreeHeadClick = useCallback(function () {
        setShowChildren(!showChildren);
    }, [showChildren]);
    var iconChange = function () {
        var _a;
        if ((_a = data.children) === null || _a === void 0 ? void 0 : _a.length) {
            return (_jsx("span", { className: cx('treeViewIcon', showChildren ? 'lum-icon-chevron-up' : 'lum-icon-chevron-down', 'treeViewPointer'), onClick: handleTreeHeadClick }));
        }
        else {
            return (_jsx("span", { className: cx('treeViewIcon', 'lum-icon-component') }));
        }
    };
    return (_jsxs("div", { className: 'treeContainer', children: [iconChange(), _jsxs("div", { className: cx('treeHeadItem', {
                    pointerTreeView: (_b = data.children) === null || _b === void 0 ? void 0 : _b.length,
                }), children: [data.type, " - ", data.friendlyName || data.id, " ", _jsx(EditorButton, { id: data.id, inline: true, data: data.props, visible: false, noUp: false, noDown: false, menu: false })] }), (((_c = data.children) === null || _c === void 0 ? void 0 : _c.length) && showChildren && (_jsx("div", { className: 'treeChildren', children: _jsx(ComponentTree, { data: data.children }) })))] }));
};
