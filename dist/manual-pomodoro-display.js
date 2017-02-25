"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timify_1 = require("./pomodoro/timify");
var ManualPomodoroDisplay = (function () {
    function ManualPomodoroDisplay() {
        var _this = this;
        this._titleLabel = '';
        this._countdown = 0;
        this._leftDecoration = '';
        this._rightDecoration = '';
        this._toggleLabel = '';
        this._editLabel = '';
        this._resetLabel = '';
        this._editing = false;
        this._titleElems = document.getElementsByClassName('title');
        this._leftDecoElems = document.getElementsByClassName('left-decoration');
        this._rigthDecoElems = document.getElementsByClassName('right-decoration');
        this._minutesElems = document.getElementsByClassName('minutes');
        this._secondsElems = document.getElementsByClassName('seconds');
        this._toggleLabelElems = document.getElementsByClassName('on-toggle');
        this._resetLabelElems = document.getElementsByClassName('on-reset');
        this._editLabelElems = document.getElementsByClassName('on-edit');
        this._editingElems = document.getElementsByClassName('editing');
        this._nonEditingElems = document.getElementsByClassName('non-editing');
        // title label is a special case with a version with text input
        Array.from(this._titleElems).forEach(function (element) {
            if (element instanceof HTMLInputElement) {
                element.addEventListener("input", function (event) {
                    if (event.target instanceof HTMLInputElement) {
                        _this.titleLabel = event.target.value;
                    }
                });
            }
        });
    }
    Object.defineProperty(ManualPomodoroDisplay.prototype, "titleLabel", {
        get: function () {
            return this._titleLabel;
        },
        set: function (newVal) {
            var _this = this;
            this._titleLabel = newVal;
            Array.from(this._titleElems).forEach(function (element) {
                // title label is a special case with a version with text input
                if (element instanceof HTMLInputElement) {
                    element.value = _this._titleLabel;
                }
                else {
                    element.innerHTML = _this._titleLabel;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "countdown", {
        get: function () {
            return this._countdown;
        },
        set: function (newVal) {
            var _this = this;
            this._countdown = newVal;
            Array.from(this._minutesElems).forEach(function (element) {
                element.innerHTML = String(timify_1.Timify.minutify(_this._countdown));
            });
            Array.from(this._secondsElems).forEach(function (element) {
                element.innerHTML = String(timify_1.Timify.secondify(_this._countdown));
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "leftDecoration", {
        get: function () {
            return this._leftDecoration;
        },
        set: function (newVal) {
            var _this = this;
            this._leftDecoration = newVal;
            Array.from(this._leftDecoElems).forEach(function (element) {
                element.innerHTML = _this._leftDecoration;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "rightDecoration", {
        get: function () {
            return this._rightDecoration;
        },
        set: function (newVal) {
            var _this = this;
            this._rightDecoration = newVal;
            Array.from(this._rigthDecoElems).forEach(function (element) {
                element.innerHTML = _this._rightDecoration;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "toggleLabel", {
        get: function () {
            return this._toggleLabel;
        },
        set: function (newVal) {
            var _this = this;
            this._toggleLabel = newVal;
            Array.from(this._toggleLabelElems).forEach(function (element) {
                element.innerHTML = '[' + _this._toggleLabel + ']';
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "editLabel", {
        get: function () {
            return this._editLabel;
        },
        set: function (newVal) {
            var _this = this;
            this._editLabel = newVal;
            Array.from(this._editLabelElems).forEach(function (element) {
                element.innerHTML = '[' + _this._editLabel + ']';
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "resetLabel", {
        get: function () {
            return this._resetLabel;
        },
        set: function (newVal) {
            var _this = this;
            this._resetLabel = newVal;
            Array.from(this._resetLabelElems).forEach(function (element) {
                element.innerHTML = '[' + _this._resetLabel + ']';
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManualPomodoroDisplay.prototype, "editing", {
        get: function () {
            return this._editing;
        },
        set: function (newVal) {
            this._editing = newVal;
            if (this._editing) {
                Array.from(this._nonEditingElems).forEach(function (element) {
                    element.classList.add('hidden');
                });
                Array.from(this._editingElems).forEach(function (element) {
                    element.classList.remove('hidden');
                });
            }
            else {
                Array.from(this._editingElems).forEach(function (element) {
                    element.classList.add('hidden');
                });
                Array.from(this._nonEditingElems).forEach(function (element) {
                    element.classList.remove('hidden');
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    return ManualPomodoroDisplay;
}());
exports.ManualPomodoroDisplay = ManualPomodoroDisplay;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/manual-pomodoro-display.js.map