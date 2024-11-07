(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNumber = isNumber;
    function isNumber(num) {
        if (typeof num === "number") {
            return num - num === 0;
        }
        if (typeof num === "string" && num.trim() !== "") {
            return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
        return false;
    }
    exports.default = isNumber;
});
