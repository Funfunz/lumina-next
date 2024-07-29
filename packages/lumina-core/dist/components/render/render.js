"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useLuminaContext } from "../../context/contextProvider";
import { DynamicComponent } from "./dynamicComponent";
export var Render = function (_a) {
    var elements = _a.elements;
    var builderDataContext = useLuminaContext().state.builderDataContext;
    var data = [];
    if (elements) {
        data = elements;
    }
    if (builderDataContext.builderData
        && builderDataContext.selectedPage
        && builderDataContext.builderData[builderDataContext.selectedPage].children
        && !elements) {
        data = builderDataContext.builderData[builderDataContext.selectedPage].children;
    }
    return (_jsx(_Fragment, { children: data.map(function (component, index) {
            var _a;
            var LoadedComponent = (_a = DynamicComponent(component.type)) === null || _a === void 0 ? void 0 : _a.component;
            if (!LoadedComponent)
                return null;
            return _jsx(LoadedComponent, __assign({}, component.props, { id: component.id, children: _jsx(Render, { elements: component.children }) }), index);
        }) }));
};
