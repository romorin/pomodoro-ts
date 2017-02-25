"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PomodoroImpl = (function () {
    function PomodoroImpl(_runningState, _editState, _display) {
        this._runningState = _runningState;
        this._editState = _editState;
        this._display = _display;
        this._currentState = this._runningState;
        this._currentState.updateDisplay();
        this._display.editing = false;
    }
    PomodoroImpl.prototype.onEdit = function () {
        this._display.editing = !this._display.editing;
        this._currentState.onExitState();
        this._currentState = this.getOtherState();
        this._currentState.onEnterState();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.onToggle = function () {
        this._currentState.onToggle();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.onReset = function () {
        this._currentState.onReset();
        if (this._currentState === this._editState) {
            this.onEdit();
        }
        else {
            this._currentState.updateDisplay();
        }
    };
    PomodoroImpl.prototype.incrementMin = function () {
        this._currentState.incrementMin();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.decrementMin = function () {
        this._currentState.decrementMin();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.incrementSec = function () {
        this._currentState.incrementSec();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.decrementSec = function () {
        this._currentState.decrementSec();
        this._currentState.updateDisplay();
    };
    PomodoroImpl.prototype.getOtherState = function () {
        if (this._currentState === this._runningState) {
            return this._editState;
        }
        else {
            return this._runningState;
        }
    };
    return PomodoroImpl;
}());
exports.PomodoroImpl = PomodoroImpl;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/pomodoro-impl.js.map