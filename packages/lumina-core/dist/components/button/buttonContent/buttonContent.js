import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import cx from 'classnames';
export var ButtonContent = function (_a) {
    var text = _a.text, iconLeft = _a.iconLeft, iconRight = _a.iconRight;
    return (_jsx(_Fragment, { children: _jsxs("span", { className: 'buttonContent', children: [iconLeft && (_jsx("span", { className: cx('icon', iconLeft) })), text && (_jsx("span", { children: text })), iconRight && (_jsx("span", { className: cx('icon', iconRight) }))] }) }));
};
