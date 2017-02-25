/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_compositor_1 = __webpack_require__(1);
	window.onload = function () {
	    var compositor = new app_compositor_1.AppCompositor();
	    compositor.getApp().onInit();
	};
	//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/main.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// manual compositing until I find how to support multiple container
	"use strict";
	var constants_1 = __webpack_require__(2);
	var counter_impl_1 = __webpack_require__(3);
	var editing_pomodoro_1 = __webpack_require__(6);
	var running_pomodoro_1 = __webpack_require__(7);
	var manual_pomodoro_display_1 = __webpack_require__(8);
	var pomodoro_impl_1 = __webpack_require__(10);
	var app_component_1 = __webpack_require__(11);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var counter_status_1 = __webpack_require__(4);
	var counter_1 = __webpack_require__(5);
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	(function (CounterStatus) {
	    CounterStatus[CounterStatus["Running"] = 0] = "Running";
	    CounterStatus[CounterStatus["Paused"] = 1] = "Paused";
	    CounterStatus[CounterStatus["Over"] = 2] = "Over";
	})(exports.CounterStatus || (exports.CounterStatus = {}));
	var CounterStatus = exports.CounterStatus;
	//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/counter-status.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var CounterDecoration = (function () {
	    function CounterDecoration(left, right) {
	        this.left = left;
	        this.right = right;
	    }
	    return CounterDecoration;
	}());
	exports.CounterDecoration = CounterDecoration;
	//# sourceMappingURL=/home/bob/CodeZone/Sorted/freeCodeCamp/pomodoro-ts/pomodoro/counter.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var counter_status_1 = __webpack_require__(4);
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var timify_1 = __webpack_require__(9);
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
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

/***/ }
/******/ ]);