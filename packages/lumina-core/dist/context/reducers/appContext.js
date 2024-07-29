import { apiDispatcher } from "../apiDispatcher";
export var initialAppContextState = {
    editor: false
};
export var appContextReducer = function (data, action) {
    switch (action.type) {
        case 'updateBackend':
            apiDispatcher(action.data);
            break;
        default:
            break;
    }
    return data;
};
