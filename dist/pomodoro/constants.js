"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkCounterConstants = (function () {
    function WorkCounterConstants() {
    }
    Object.defineProperty(WorkCounterConstants.prototype, "ACTION", {
        get: function () { return 'Working'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "LENGTH", {
        get: function () { return 25 * 60; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "RUNNING_LEFT_DECORATION", {
        get: function () { return '<'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "RUNNING_RIGHT_DECORATION", {
        get: function () { return '>'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "PAUSED_LEFT_DECORATION", {
        get: function () { return '<'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "PAUSED_RIGHT_DECORATION", {
        get: function () { return '>'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "OVER_LEFT_DECORATION", {
        get: function () { return '!'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorkCounterConstants.prototype, "OVER_RIGHT_DECORATION", {
        get: function () { return '!'; },
        enumerable: true,
        configurable: true
    });
    ;
    return WorkCounterConstants;
}());
exports.WorkCounterConstants = WorkCounterConstants;
var PauseCounterConstants = (function () {
    function PauseCounterConstants() {
    }
    Object.defineProperty(PauseCounterConstants.prototype, "ACTION", {
        get: function () { return 'Walking'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "LENGTH", {
        get: function () { return 5 * 60; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "RUNNING_LEFT_DECORATION", {
        get: function () { return '>'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "RUNNING_RIGHT_DECORATION", {
        get: function () { return '<'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "PAUSED_LEFT_DECORATION", {
        get: function () { return '>'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "PAUSED_RIGHT_DECORATION", {
        get: function () { return '<'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "OVER_LEFT_DECORATION", {
        get: function () { return '$'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PauseCounterConstants.prototype, "OVER_RIGHT_DECORATION", {
        get: function () { return '$'; },
        enumerable: true,
        configurable: true
    });
    ;
    return PauseCounterConstants;
}());
exports.PauseCounterConstants = PauseCounterConstants;
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants.prototype, "RUNNING_TITLE_TEMPLATE", {
        get: function () { return '@ for'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "PAUSED_TITLE_TEMPLATE", {
        get: function () { return 'Start @'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "OVER_TITLE_TEMPLATE", {
        get: function () { return '# time'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "RUNNING_TOGGLE_LABEL_TEMPLATE", {
        get: function () { return 'Pause'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "PAUSED_TOGGLE_LABEL_TEMPLATE", {
        get: function () { return 'Go!'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "OVER_TOGGLE_LABEL_TEMPLATE", {
        get: function () { return 'Go #'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "CURRENT_TEMPLATE_TOKEN", {
        get: function () { return '@'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "NEXT_TEMPLATE_TOKEN", {
        get: function () { return '#'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "RUNNING_EDIT_LABEL", {
        get: function () { return 'Edit'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "RUNNING_RESET_LABEL", {
        get: function () { return 'Reset'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "EDIT_TOGGLE_LABEL", {
        get: function () { return 'Next'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "EDIT_EDIT_LABEL", {
        get: function () { return 'Save'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants.prototype, "EDIT_RESET_LABEL", {
        get: function () { return 'Cancel'; },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/constants.js.map