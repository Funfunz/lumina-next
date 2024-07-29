import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../button/button";
import cx from 'classnames';
export var SearchBar = function () {
    return (_jsxs("div", { className: 'searchBar', children: [_jsx("span", { className: cx('searchIcon', "lum-icon-search") }), _jsx("input", { type: "text", className: 'searchText', placeholder: "Search..." }), _jsx(Button, { buttonType: "button", iconRight: "lum-icon-filter", style: 'filter' })] }));
};
