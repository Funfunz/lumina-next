"use client";
import { appContextReducer, initialAppContextState, } from "./appContext";
import { builderDataContextReducer, initialBuilderDataContextState, } from "./builderDataContext";
export var initialContext = {
    appContext: initialAppContextState,
    builderDataContext: initialBuilderDataContextState,
};
export var mainReducer = function (_a, action) {
    var appContext = _a.appContext, builderDataContext = _a.builderDataContext;
    return ({
        appContext: appContextReducer(appContext, action),
        builderDataContext: builderDataContextReducer(builderDataContext, action),
    });
};
