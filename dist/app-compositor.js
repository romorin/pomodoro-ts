// manual compositing until I find how to support multiple container
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./pomodoro/constants");
var counter_impl_1 = require("./pomodoro/counter-impl");
var editing_pomodoro_1 = require("./pomodoro/editing-pomodoro");
var running_pomodoro_1 = require("./pomodoro/running-pomodoro");
var manual_pomodoro_display_1 = require("./manual-pomodoro-display");
var pomodoro_impl_1 = require("./pomodoro/pomodoro-impl");
var app_component_1 = require("./app.component");
var AppCompositor = (function () {
    function AppCompositor() {
        var constants = new constants_1.Constants();
        var workCounterConstants = new constants_1.WorkCounterConstants();
        var pauseCounterConstants = new constants_1.PauseCounterConstants();
        var display = new manual_pomodoro_display_1.ManualPomodoroDisplay();
        var workCounter = new counter_impl_1.CounterImpl(workCounterConstants);
        var pauseCounter = new counter_impl_1.CounterImpl(pauseCounterConstants);
        var runPomodoro = new running_pomodoro_1.RunningPomodoro(workCounter, pauseCounter, display, constants);
        var editPomodoro = new editing_pomodoro_1.EditingPomodoro(workCounter, pauseCounter, display, constants);
        var pomodoro = new pomodoro_impl_1.PomodoroImpl(runPomodoro, editPomodoro, display);
        this.appComponent = new app_component_1.AppComponent(display, pomodoro);
    }
    AppCompositor.prototype.getApp = function () {
        return this.appComponent;
    };
    return AppCompositor;
}());
exports.AppCompositor = AppCompositor;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/app-compositor.js.map