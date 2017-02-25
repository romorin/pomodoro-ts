"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_status_1 = require("./counter-status");
var CounterTemplate = (function () {
    function CounterTemplate(titleLabel, toggleButtonLabel) {
        this.titleLabel = titleLabel;
        this.toggleButtonLabel = toggleButtonLabel;
    }
    return CounterTemplate;
}());
var RunningPomodoro = (function () {
    function RunningPomodoro(_workCounter, _pauseCounter, _display, _constants) {
        this._workCounter = _workCounter;
        this._pauseCounter = _pauseCounter;
        this._display = _display;
        this._constants = _constants;
        this._templates = {};
        this._currentCounter = this._workCounter;
        this._templates[counter_status_1.CounterStatus.Running] = new CounterTemplate(this._constants.RUNNING_TITLE_TEMPLATE, this._constants.RUNNING_TOGGLE_LABEL_TEMPLATE);
        this._templates[counter_status_1.CounterStatus.Paused] = new CounterTemplate(this._constants.PAUSED_TITLE_TEMPLATE, this._constants.PAUSED_TOGGLE_LABEL_TEMPLATE);
        this._templates[counter_status_1.CounterStatus.Over] = new CounterTemplate(this._constants.OVER_TITLE_TEMPLATE, this._constants.OVER_TOGGLE_LABEL_TEMPLATE);
    }
    RunningPomodoro.prototype.onEnterState = function () { };
    RunningPomodoro.prototype.onExitState = function () { this.onReset(); };
    RunningPomodoro.prototype.onToggle = function () {
        var _this = this;
        if (this._currentCounter.getStatus() === counter_status_1.CounterStatus.Over) {
            this._currentCounter.reset();
            this._currentCounter = this.getOtherCounter();
        }
        this._currentCounter.toggle(function (counter) { _this.updateDisplay(); });
    };
    RunningPomodoro.prototype.onReset = function () {
        this._workCounter.reset();
        this._pauseCounter.reset();
        this._currentCounter = this._workCounter;
    };
    // does not edit
    RunningPomodoro.prototype.incrementMin = function () { };
    RunningPomodoro.prototype.decrementMin = function () { };
    RunningPomodoro.prototype.incrementSec = function () { };
    RunningPomodoro.prototype.decrementSec = function () { };
    RunningPomodoro.prototype.updateDisplay = function () {
        var currentTemplate = this._templates[this._currentCounter.getStatus()];
        this._display.titleLabel = currentTemplate.titleLabel
            .replace(this._constants.CURRENT_TEMPLATE_TOKEN, this._currentCounter.getTitle())
            .replace(this._constants.NEXT_TEMPLATE_TOKEN, this.getOtherCounter().getTitle());
        this._display.toggleLabel = currentTemplate.toggleButtonLabel
            .replace(this._constants.CURRENT_TEMPLATE_TOKEN, this._currentCounter.getTitle())
            .replace(this._constants.NEXT_TEMPLATE_TOKEN, this.getOtherCounter().getTitle());
        var decorations = this._currentCounter.getDecorations();
        this._display.leftDecoration = decorations.left;
        this._display.rightDecoration = decorations.right;
        this._display.countdown = this._currentCounter.getRemaining();
        this._display.editLabel = this._constants.RUNNING_EDIT_LABEL;
        this._display.resetLabel = this._constants.RUNNING_RESET_LABEL;
    };
    RunningPomodoro.prototype.getOtherCounter = function () {
        if (this._currentCounter === this._workCounter) {
            return this._pauseCounter;
        }
        else {
            return this._workCounter;
        }
    };
    return RunningPomodoro;
}());
exports.RunningPomodoro = RunningPomodoro;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/running-pomodoro.js.map