"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_compositor_1 = require("./app-compositor");
window.onload = function () {
    var compositor = new app_compositor_1.AppCompositor();
    compositor.getApp().onInit();
};
//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/main.js.map