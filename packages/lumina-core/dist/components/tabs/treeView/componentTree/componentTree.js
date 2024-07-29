import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { TreeBranch } from "../treeBranch/treeBranch";
export var ComponentTree = function (_a) {
    var data = _a.data;
    if (!data)
        return null;
    return (_jsx(_Fragment, { children: data.sort(function (a, b) {
            if (a.order < b.order) {
                return -1;
            }
            else if (a.order > b.order) {
                return 1;
            }
            return 0;
        }).map(function (dataItem, index) { return (_jsx(TreeBranch, { data: dataItem, noUp: index === 0, noDown: index === data.length - 1 }, dataItem.id)); }) }));
};
