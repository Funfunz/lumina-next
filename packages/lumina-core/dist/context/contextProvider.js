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
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * this is the ContextProvider component
 * it contains all the page builder context
 * including the page structure and component data
 */
import { createContext, useContext, useReducer } from "react";
import { initialContext, mainReducer, } from "./reducers/luminaReducer";
import { initialAppContextState } from "./reducers/appContext";
import { initialBuilderDataContextState, } from "./reducers/builderDataContext";
var LuminaContext = createContext({
    state: initialContext,
    dispatch: function () { return null; },
});
export function ContextProvider(_a) {
    var children = _a.children, _b = _a.data, data = _b === void 0 ? {} : _b;
    console.log("ContextProvider");
    var initialState = __assign(__assign({}, initialContext), { appContext: __assign(__assign({}, initialAppContextState), (data.appContext || {})), builderDataContext: __assign(__assign({}, initialBuilderDataContextState), (data.builderDataContext || {})) });
    var _c = useReducer(mainReducer, initialState), state = _c[0], dispatch = _c[1];
    return (_jsx(LuminaContext.Provider, { value: { state: state, dispatch: dispatch }, children: children }));
}
export var useLuminaContext = function () {
    return useContext(LuminaContext);
};
