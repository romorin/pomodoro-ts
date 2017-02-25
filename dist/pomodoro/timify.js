"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timify = (function () {
    function Timify() {
    }
    Timify.minutify = function (value) {
        return Math.floor(value / 60);
    };
    Timify.secondify = function (value) {
        var result = Math.round(value % 60);
        if (result < 10) {
            return '0' + result;
        }
        else {
            return (result.toString());
        }
    };
    return Timify;
}());
exports.Timify = Timify;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/timify.js.map