"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = (function () {
    function AppComponent(display, pomodoro) {
        this.display = display;
        this.pomodoro = pomodoro;
    }
    AppComponent.prototype.onInit = function () { this.attachView(); };
    AppComponent.prototype.onEdit = function () { this.pomodoro.onEdit(); };
    AppComponent.prototype.onToggle = function () { this.pomodoro.onToggle(); };
    AppComponent.prototype.onReset = function () { this.pomodoro.onReset(); };
    AppComponent.prototype.incrementMin = function () { this.pomodoro.incrementMin(); };
    AppComponent.prototype.decrementMin = function () { this.pomodoro.decrementMin(); };
    AppComponent.prototype.incrementSec = function () { this.pomodoro.incrementSec(); };
    AppComponent.prototype.decrementSec = function () { this.pomodoro.decrementSec(); };
    AppComponent.prototype.attachView = function () {
        var _this = this;
        Array.from(document.getElementsByClassName('increment-min')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.incrementMin(); });
        });
        Array.from(document.getElementsByClassName('decrement-min')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.decrementMin(); });
        });
        Array.from(document.getElementsByClassName('increment-sec')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.incrementSec(); });
        });
        Array.from(document.getElementsByClassName('decrement-sec')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.decrementSec(); });
        });
        Array.from(document.getElementsByClassName('on-toggle')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.onToggle(); });
        });
        Array.from(document.getElementsByClassName('on-edit')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.onEdit(); });
        });
        Array.from(document.getElementsByClassName('on-reset')).forEach(function (element) {
            element.addEventListener("click", function (event) { _this.onReset(); });
        });
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/app.component.js.map