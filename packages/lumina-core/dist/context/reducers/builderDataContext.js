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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var initialBuilderDataContextState = {
    builderData: {},
    selectedPage: "",
    pages: [],
};
function newComponentFactory(componentData, order) {
    var type = componentData.type, friendlyName = componentData.friendlyName, rest = __rest(componentData, ["type", "friendlyName"]);
    return {
        id: "".concat(type, "_").concat(Math.random()), //TODO get a better randomiser
        type: type,
        friendlyName: friendlyName,
        children: [],
        order: order,
        props: __assign({}, rest.props),
    };
}
var instanceOfIComponentData = function (object) {
    return object.id;
};
/**
 * Parameter "data" contains info from the parent component
 * If no parentId is given the create should happen in the root of the page
 * If parentId is present the component is created inside the element matching the parentId
 * @param component
 * @param data
 * @returns
 */
function createElementAt(component, data) {
    var _a;
    // Ensure the component has a children array
    if (!component.children)
        [(component.children = [])];
    // Check if the component is the parent or if no parentId is specified
    if (!data.parentId ||
        (instanceOfIComponentData(component) && component.id === data.parentId)) {
        // Add the new component with the highest order
        (_a = component.children) === null || _a === void 0 ? void 0 : _a.push(newComponentFactory(data, Math.max.apply(Math, __spreadArray([0], component.children.map(function (element) { return element.order; }), false)) + 1));
        // Return the updated component
        return component;
    }
    // If not the parent, recursively search for the parent in the children
    component.children = component.children.map(function (element) {
        return createElementAt(element, data);
    });
    // Return the updated component
    return component;
}
function updateElement(components, targetId, newProps) {
    return components.map(function (element) {
        if (element.id === targetId) {
            element.props = __assign(__assign({}, element.props), newProps);
        }
        if (element.children) {
            element.children = __spreadArray([], updateElement(element.children, targetId, newProps), true);
            return element;
        }
        return element;
    });
}
function deleteElement(components, targetId) {
    return components
        .map(function (element) {
        if (element.id === targetId) {
            return undefined;
        }
        if (element.children) {
            element.children = __spreadArray([], deleteElement(element.children, targetId), true);
            return element;
        }
        return element;
    })
        .filter(function (e) { return e; });
}
function upOrderElement(element, components) {
    var componentToReplace = undefined;
    components.forEach(function (currentElement) {
        if (currentElement.order < element.order) {
            if (!componentToReplace) {
                componentToReplace = __assign({}, currentElement);
            }
            if (componentToReplace && currentElement.order > componentToReplace.order) {
                componentToReplace = __assign({}, currentElement);
            }
        }
    });
    return componentToReplace;
}
function downOrderElement(element, components) {
    var componentToReplace = undefined;
    components.forEach(function (currentElement) {
        if (currentElement.order > element.order) {
            if (!componentToReplace) {
                componentToReplace = __assign({}, currentElement);
            }
            if (componentToReplace && currentElement.order < componentToReplace.order) {
                componentToReplace = __assign({}, currentElement);
            }
        }
    });
    return componentToReplace;
}
function moveUpElement(components, targetId) {
    var componentToReplace;
    var oldOrder = 0;
    var newComponents = components.map(function (element) {
        if (element.id === targetId) {
            oldOrder = element.order;
            componentToReplace = upOrderElement(element, components);
            if (componentToReplace) {
                element.order = componentToReplace === null || componentToReplace === void 0 ? void 0 : componentToReplace.order;
            }
            else {
                element.order = 0;
            }
        }
        if (element.children && !componentToReplace) {
            element.children = __spreadArray([], moveUpElement(element.children, targetId), true);
        }
        return element;
    });
    if (componentToReplace) {
        return newComponents.map(function (element) {
            if (element.id === (componentToReplace === null || componentToReplace === void 0 ? void 0 : componentToReplace.id)) {
                element.order = oldOrder;
            }
            return element;
        });
    }
    return newComponents;
}
function moveDownElement(components, targetId) {
    var componentToReplace;
    var oldOrder = 0;
    var newComponents = components.map(function (element) {
        if (element.id === targetId) {
            console.log(element, targetId);
            oldOrder = element.order;
            componentToReplace = downOrderElement(element, components);
            if (componentToReplace) {
                element.order = componentToReplace === null || componentToReplace === void 0 ? void 0 : componentToReplace.order;
            }
            else {
                element.order = 0;
            }
        }
        if (element.children && !componentToReplace) {
            element.children = __spreadArray([], moveDownElement(element.children, targetId), true);
        }
        return element;
    });
    if (componentToReplace) {
        return newComponents.map(function (element) {
            if (element.id === (componentToReplace === null || componentToReplace === void 0 ? void 0 : componentToReplace.id)) {
                element.order = oldOrder;
            }
            return element;
        });
    }
    return newComponents;
}
export var builderDataContextReducer = function (data, action) {
    var _a, _b, _c, _d, _e, _f, _g;
    switch (action.type) {
        case "setBuilderData":
            return JSON.parse(JSON.stringify(action.data));
        case "createPage":
            return __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_a = {}, _a[action.data.pageName] = {
                    name: action.data.pageName,
                    friendyName: action.data.friendlyName,
                    children: [],
                }, _a)) });
        case "updatePage":
            return __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_b = {}, _b[action.data.pageName] = __assign(__assign({}, data.builderData[action.data.pageName]), action.data.newData), _b)) });
        case "deletePage":
            var newState = __assign(__assign({}, data), { builderData: __assign({}, data.builderData) });
            delete newState.builderData[action.data];
            return newState;
        case "createComponent":
            var stateCreateComponent = __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_c = {}, _c[data.selectedPage] = __assign(__assign({}, data.builderData[data.selectedPage]), createElementAt(data.builderData[data.selectedPage], action.data)), _c)) });
            return stateCreateComponent;
        case "updateComponent":
            var stateUpdateComponent = __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_d = {}, _d[data.selectedPage] = __assign(__assign({}, data.builderData[data.selectedPage]), { children: __spreadArray([], updateElement(
                    // Confirmar se a data é undefined ou não
                    data.builderData[data.selectedPage].children, action.data.id, action.data.newProps), true) }), _d)) });
            return stateUpdateComponent;
        case "deleteComponent":
            return __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_e = {}, _e[data.selectedPage] = __assign(__assign({}, data.builderData[data.selectedPage]), { children: __spreadArray([], deleteElement(
                    // Confirmar se a data é undefined ou não
                    data.builderData[data.selectedPage].children, action.data.id), true) }), _e)) });
        case "moveUpComponent":
            return __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_f = {}, _f[data.selectedPage] = __assign(__assign({}, data.builderData[data.selectedPage]), { children: __spreadArray([], moveUpElement(
                    // Confirmar se a data é undefined ou não
                    data.builderData[data.selectedPage].children, action.data.id), true) }), _f)) });
        case "moveDownComponent":
            return __assign(__assign({}, data), { builderData: __assign(__assign({}, data.builderData), (_g = {}, _g[data.selectedPage] = __assign(__assign({}, data.builderData[data.selectedPage]), { children: __spreadArray([], moveDownElement(
                    // Confirmar se a data é undefined ou não
                    data.builderData[data.selectedPage].children, action.data.id), true) }), _g)) });
        default:
            break;
    }
    return data;
};
