"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../../components/button/button";
import { SearchBar } from "../../../components/search-bar/search-bar";
import { useLuminaContext } from "../../../context/contextProvider";
import { useCallback } from "react";
export var PagesTab = function () {
    var _a = useLuminaContext(), builderDataContext = _a.state.builderDataContext, dispatch = _a.dispatch;
    var handleAddPageClick = useCallback(function () {
        dispatch({
            type: "createPage",
            data: { id: "dadwadada", pageName: "testPage", friendlyName: "Test Page", extendedName: "A Page for testing purposes", dateModified: Date.now.toString(), route: "/test", status: true },
        });
    }, [dispatch]);
    return (_jsxs("div", { className: 'pageContainer', children: [_jsxs("div", { className: 'pageHead', children: [_jsx("h3", { className: 'pageTitle', children: "Pages" }), (Object.keys(builderDataContext.builderData).length && (_jsx("div", { className: 'addContainer', children: _jsx(Button, { buttonType: "button", text: "Add", onClick: handleAddPageClick, iconLeft: "lum-icon-plus-fill" }) }))) ||
                        null] }), _jsx(SearchBar, {}), Object.keys(builderDataContext.builderData).map(function (page) { return (_jsx("div", { className: 'pageHead', children: page }, page)); })] }));
};
