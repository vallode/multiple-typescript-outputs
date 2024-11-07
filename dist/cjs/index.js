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
