"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditingPomodoro = (function () {
    function EditingPomodoro(_workCounter, _pauseCounter, _display, _constants) {
        this._workCounter = _workCounter;
        this._pauseCounter = _pauseCounter;
        this._display = _display;
        this._constants = _constants;
        this._titleLabelSet = false;
        this._currentCounter = this._workCounter;
    }
    EditingPomodoro.prototype.onEnterState = function () {
        this.setCounter(this._workCounter);
        this._workCounter.backup();
        this._pauseCounter.backup();
    };
    EditingPomodoro.prototype.onExitState = function () {
        if (this._titleLabelSet) {
            this._currentCounter.setTitle(this._display.titleLabel);
        }
    };
    EditingPomodoro.prototype.onToggle = function () {
        if (this._titleLabelSet) {
            this._currentCounter.setTitle(this._display.titleLabel);
        }
        this.setCounter(this.getOtherCounter());
    };
    EditingPomodoro.prototype.onReset = function () {
        this._workCounter.restore();
        this._pauseCounter.restore();
        this.setCounter(this._workCounter);
        this._titleLabelSet = false;
    };
    EditingPomodoro.prototype.incrementMin = function () {
        this._currentCounter.setLength(this._currentCounter.getLength() + 60);
    };
    EditingPomodoro.prototype.decrementMin = function () {
        this._currentCounter.setLength(this._currentCounter.getLength() - 60);
    };
    EditingPomodoro.prototype.incrementSec = function () {
        this._currentCounter.setLength(this._currentCounter.getLength() + 1);
    };
    EditingPomodoro.prototype.decrementSec = function () {
        this._currentCounter.setLength(this._currentCounter.getLength() - 1);
    };
    EditingPomodoro.prototype.updateDisplay = function () {
        if (!this._titleLabelSet) {
            this._display.titleLabel = this._currentCounter.getTitle();
            this._titleLabelSet = true;
        }
        this._display.countdown = this._currentCounter.getLength();
        this._display.toggleLabel = this._constants.EDIT_TOGGLE_LABEL;
        this._display.editLabel = this._constants.EDIT_EDIT_LABEL;
        this._display.resetLabel = this._constants.EDIT_RESET_LABEL;
    };
    EditingPomodoro.prototype.getOtherCounter = function () {
        if (this._currentCounter === this._workCounter) {
            return this._pauseCounter;
        }
        else {
            return this._workCounter;
        }
    };
    EditingPomodoro.prototype.setCounter = function (counter) {
        this._titleLabelSet = false;
        this._currentCounter = counter;
    };
    return EditingPomodoro;
}());
exports.EditingPomodoro = EditingPomodoro;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/editing-pomodoro.js.map