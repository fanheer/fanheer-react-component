import { __rest, __assign } from '../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import './fanbutton.css.js';

/**
 * Primary UI component for user interaction
 */
var FanButton = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary
        ? "fanheer-button--primary"
        : "fanheer-button--secondary";
    return (jsx("button", __assign({ type: "button", className: ["fanheer-button", "fanheer-button--".concat(size), mode].join(" "), style: { backgroundColor: backgroundColor } }, props, { children: label })));
};

export { FanButton };
