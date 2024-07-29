import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cx from "classnames";
import { useState } from "react";
import { Button } from "../button/button";
import { PagesTab } from "../tabs/pages/page";
import { TreeViewTab } from "../tabs/treeView/treeView";
var editorTabs = [
    {
        id: "lumTabPages",
        icon: "lum-icon-page",
        panel: _jsx(PagesTab, {})
    },
    {
        id: "lumTabComponents",
        icon: "lum-icon-component",
        panel: _jsx(TreeViewTab, {})
    },
    {
        id: "lumTabLibrary",
        icon: "lum-icon-library",
        panel: _jsx(Button, { buttonType: "button", text: "Button", isFullWidth: true, iconLeft: 'lum-icon-component', size: "large" })
    }
];
var helperTabs = [
    {
        id: "lumTabConfig",
        icon: "lum-icon-settings"
    },
    {
        id: "lumTabHelp",
        icon: "lum-icon-help-fill"
    },
    {
        id: "lumTabUser",
        icon: "lum-icon-user"
    },
];
export var SidebarEditor = function (_a) {
    var isBarOpen = _a.isBarOpen, handleToggler = _a.handleToggler;
    var _b = useState(""), activeTab = _b[0], setActiveTab = _b[1];
    var _c = useState(), activePanel = _c[0], setActivePanel = _c[1];
    var handleActiveTab = function (_a) {
        var id = _a.id, panel = _a.panel;
        setActiveTab(id);
        setActivePanel(panel);
        if (!isBarOpen)
            handleToggler();
    };
    var closeSidebar = function () {
        handleToggler();
        setActiveTab("");
    };
    var createTabHelper = function (tabs) {
        var tabsElem = [];
        tabs.map(function (tab) {
            var isActive = tab.id === activeTab;
            tabsElem.push(_jsx("li", { id: tab.id, children: _jsx(Button, { buttonType: "button", iconLeft: tab.icon, onClick: function () { return handleActiveTab(tab); }, className: cx('sidebarTab', { activeTab: isActive }) }) }, tab.id));
        });
        return tabsElem;
    };
    return (
    // container
    _jsxs("div", { className: 'sidebarContainer', children: [_jsxs("div", { className: cx('sidebarHeader', { open: isBarOpen, }), children: [_jsx("div", { className: 'sidebarHeaderIcon', children: _jsx("div", { className: 'sidebarLuminaIcon' }) }), _jsx("div", { className: cx('sidebarToogler', { "lum-display-none": !isBarOpen }), onClick: function () { return closeSidebar(); }, children: _jsx("a", { className: "lum-icon-chevron-left" }) })] }), _jsxs("div", { className: 'sidebarBody', children: [_jsxs("div", { className: 'sidebarTabsContainer', children: [_jsx("ul", { className: 'sidebarTabsList', children: createTabHelper(editorTabs) }), _jsx("ul", { className: 'sidebarTabsList', children: createTabHelper(helperTabs) })] }), _jsx("div", { className: cx('sidebarPanel', { "lum-display-none": !isBarOpen }), children: activePanel })] })] }));
};
