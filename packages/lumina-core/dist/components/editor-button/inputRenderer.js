'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
export var Form = function (_a) {
    var children = _a.children;
    return _jsx("table", { className: 'formTable', children: _jsx("tbody", { children: children }) });
};
function isSelect(config) {
    return config.type === 'singleSelect' || config.type === 'multiSelect';
}
export var LuminaInputRenderer = function (_a) {
    var config = _a.config, value = _a.value, handleOnChangeInput = _a.handleOnChangeInput;
    var handleOnChangeInputElement = useCallback(function (event) {
        handleOnChangeInput(config.name, event.target.value);
    }, [handleOnChangeInput, config.name]);
    var handleOnChangeSelectElement = useCallback(function (event) {
        handleOnChangeInput(config.name, event.target.selectedOptions[0].value);
    }, [handleOnChangeInput, config.name]);
    return (_jsxs("tr", { children: [_jsx("td", { className: 'formTableCell formTableLabel', children: _jsx("label", { htmlFor: config.name, children: config.label }) }), _jsx("td", { className: 'formTableCell', style: { width: "100%" }, children: isSelect(config) && (_jsx("select", { onChange: handleOnChangeSelectElement, value: value, id: config.name, children: config.arrayValues.map(function (item) { return (_jsx("option", { value: item, children: item }, item)); }) })) || (_jsx("input", { className: 'inputField', type: config.type, value: value, id: config.name, name: config.name, onChange: handleOnChangeInputElement })) })] }));
};
