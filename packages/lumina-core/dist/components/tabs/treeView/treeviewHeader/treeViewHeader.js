import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../../components/button/button";
import cx from "classnames";
export var TreeviewHeader = function () {
    return (_jsxs("div", { className: 'treeviewHeaderContainer', children: [_jsx("span", { className: cx('treeviewHeaderIcon', "lum-icon-page") }), _jsx("p", { className: 'treeviewTitle', children: "Home" }), _jsx("p", { className: 'treeviewSubTitle', children: "Home Page for Lumina PageBuilder" }), _jsxs("div", { className: 'treeviewNavIconsContainer', children: [_jsx(Button, { buttonType: "button", iconLeft: "lum-icon-info-fill" }), _jsx(Button, { buttonType: "button", iconLeft: "lum-icon-history" }), _jsx(Button, { buttonType: "button", iconLeft: "lum-icon-mobile" })] }), _jsx(Button, { buttonType: "button", text: "Live", style: 'live', iconLeft: "lum-icon-visible" })] }));
};
