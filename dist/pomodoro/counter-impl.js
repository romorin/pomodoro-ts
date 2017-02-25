"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_status_1 = require("./counter-status");
var counter_1 = require("./counter");
var CounterImpl = (function () {
    function CounterImpl(_constants) {
        this._status = counter_status_1.CounterStatus.Paused;
        this._decorations = {};
        this._title = _constants.ACTION;
        this._length = _constants.LENGTH;
        this._remaining = this._length;
        this._interval = null;
        this._decorations[counter_status_1.CounterStatus.Running] = new counter_1.CounterDecoration(_constants.RUNNING_LEFT_DECORATION, _constants.RUNNING_RIGHT_DECORATION);
        this._decorations[counter_status_1.CounterStatus.Paused] = new counter_1.CounterDecoration(_constants.PAUSED_LEFT_DECORATION, _constants.PAUSED_RIGHT_DECORATION);
        this._decorations[counter_status_1.CounterStatus.Over] = new counter_1.CounterDecoration(_constants.OVER_LEFT_DECORATION, _constants.OVER_RIGHT_DECORATION);
    }
    CounterImpl.prototype.toggle = function (onTick) {
        if (this._status === counter_status_1.CounterStatus.Paused) {
            this.startCounting(onTick);
        }
        else if (this._status === counter_status_1.CounterStatus.Running) {
            this.stopCounting();
        }
    };
    CounterImpl.prototype.reset = function () {
        if (this._interval) {
            this.stopInterval();
        }
        this._status = counter_status_1.CounterStatus.Paused;
        this._remaining = this._length;
    };
    CounterImpl.prototype.getLength = function () {
        return this._length;
    };
    CounterImpl.prototype.setLength = function (newLength) {
        this._length = newLength > 1 ? newLength : 1;
        this._remaining = this._length;
    };
    CounterImpl.prototype.backup = function () {
        this._titleBackup = this._title;
        this._lengthBackup = this._length;
    };
    CounterImpl.prototype.restore = function () {
        this._title = this._titleBackup;
        this.setLength(this._lengthBackup);
    };
    CounterImpl.prototype.getRemaining = function () {
        return this._remaining;
    };
    CounterImpl.prototype.getTitle = function () {
        return this._title;
    };
    CounterImpl.prototype.setTitle = function (newTitle) {
        this._title = newTitle;
    };
    CounterImpl.prototype.getDecorations = function () {
        return this._decorations[this._status];
    };
    CounterImpl.prototype.getStatus = function () {
        return this._status;
    };
    CounterImpl.prototype.startCounting = function (onTick) {
        var _this = this;
        if (this._remaining === null) {
            this._remaining = this._length;
        }
        this._status = counter_status_1.CounterStatus.Running;
        this._interval = setInterval(function () {
            _this._remaining -= 1;
            if (_this._remaining < 1) {
                _this.stopInterval();
                _this._status = counter_status_1.CounterStatus.Over;
            }
            onTick(_this);
        }, 1000);
    };
    CounterImpl.prototype.stopCounting = function () {
        this._status = counter_status_1.CounterStatus.Paused;
        this.stopInterval();
    };
    CounterImpl.prototype.stopInterval = function () {
        clearInterval(this._interval);
        this._interval = null;
    };
    return CounterImpl;
}());
exports.CounterImpl = CounterImpl;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/counter-impl.js.map