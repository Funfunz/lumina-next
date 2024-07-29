import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonContent } from "./buttonContent/buttonContent";
import cx from "classnames";
/**
 *
 * @param buttonType defines the type of button to be rendered (ex: 'button' | 'link' | 'externalLink')
 * @param style defines the CSS type for the button (ex: 'primary' | 'secondary' | 'warning' | 'danger' | 'filter' | 'live' | 'menuButton')
 * @param size defines the size of the button ('small' | 'large')
 * @param className allows you to use multiple classes inside
 * @param text allows you to put a text in the button
 * @param iconLeft positions the icon on left side of the text
 * @param iconRight positions the icon on right side of the text
 * @param onClick allows you to use functions inside the onClick prop
 * @param href only useable on 'externalLink' and 'link'
 * @param disabled disables the button, no need to ={true} as when it's being called it's already "true"
 * @param target sets the target page, only useable on 'externalLink' and 'link'
 * @returns
 */
export var Button = function (props) {
    var className = props.className, style = props.style, buttonType = props.buttonType, text = props.text, iconLeft = props.iconLeft, iconRight = props.iconRight, size = props.size;
    var allClassNames = "".concat(style ? style : '', " ").concat(className ? className : '', " ").concat(size ? size : '');
    if (buttonType === "button") {
        var onClick = props.onClick, disabled = props.disabled, isFullWidth = props.isFullWidth;
        return (_jsx("button", { className: cx('button', allClassNames, { fullWidth: isFullWidth }), onClick: onClick, disabled: disabled, children: _jsx(ButtonContent, { text: text, iconLeft: iconLeft, iconRight: iconRight }) }));
    }
    else if (buttonType === "externalLink") {
        var href = props.href, target = props.target;
        return (_jsx("a", { className: allClassNames, href: href, target: target, children: _jsx(ButtonContent, { text: text, iconLeft: iconLeft, iconRight: iconRight }) }));
    }
    else if (buttonType === "link") {
        var href = props.href;
        return (_jsx("a", { className: allClassNames, href: href, children: _jsx(ButtonContent, { text: text, iconLeft: iconLeft, iconRight: iconRight }) }));
    }
};
