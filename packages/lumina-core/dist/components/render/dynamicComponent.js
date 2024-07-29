import { getComponentConfig } from "../../main";
export var DynamicComponent = function (type) {
    var staticComponentConfig = getComponentConfig();
    console.log(staticComponentConfig);
    if (!staticComponentConfig[type])
        return null;
    return staticComponentConfig[type];
};
