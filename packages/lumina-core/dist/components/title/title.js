import { jsx as _jsx } from "react/jsx-runtime";
import cx from "classnames";
/**
 * All around Title component to be used throughout the entire Lumina editor
 * @param content string title
 * @param hLevel heading element size - default: 3
 * @param fontSize string with size for the title (ex: 16px, 2rem, etc) - default: 2rem
 * @param weight string or number with the weight (ex: 400, bold) - default: 2.5rem
 * @param lineHeight string with the line-height (ex: 2.5rem, 20px, etc) - default: 400
 * @param color color # or stirng (ex: black, #CCC) - default: var(lum-text-color)(#00000)
 * @param classnames any classname related with the title
 * @returns
 */
export var Title = function (_a) {
    var content = _a.content, _b = _a.hLevel, hLevel = _b === void 0 ? 3 : _b, _c = _a.fontSize, fontSize = _c === void 0 ? "2rem" : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? "2.5rem" : _d, _e = _a.weight, weight = _e === void 0 ? 400 : _e, _f = _a.color, color = _f === void 0 ? "" : _f, classnames = _a.classnames;
    var HeadingTag = "h".concat(hLevel);
    var inlineStyles = {
        fontSize: fontSize,
        fontWeight: weight,
        lineHeight: lineHeight,
        color: color
    };
    return (_jsx(HeadingTag, { style: classnames ? {} : inlineStyles, className: cx('luminaTitle', classnames), children: content }));
};
