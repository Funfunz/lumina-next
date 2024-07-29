"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLuminaContext } from "../../../context/contextProvider";
import { TreeviewHeader } from "./treeviewHeader/treeViewHeader";
import { AddComponentButton } from "../../../components/action-buttons/add/add-component";
import { SearchBar } from "../../../components/search-bar/search-bar";
import { ComponentTree } from "./componentTree/componentTree";
export var TreeViewTab = function () {
    var builderDataContext = useLuminaContext().state.builderDataContext;
    return (_jsxs("div", { className: 'treeviewContainer', children: [_jsxs("div", { className: 'treeHead', children: [_jsx("h3", { className: 'treeTitle', children: "Components" }), _jsx("span", { className: 'treeAddButton', children: _jsx(AddComponentButton, { buttonType: "button", id: "", text: "Add" }) })] }), _jsx(SearchBar, {}), _jsx(TreeviewHeader, {}), _jsx("div", { className: 'treeScroll', children: _jsx(ComponentTree
                // Confirmar se a data é undefined ou não
                , { 
                    // Confirmar se a data é undefined ou não
                    data: builderDataContext.builderData[builderDataContext.selectedPage].children }) })] }));
};
