// manual compositing until I find how to support multiple container

import { Constants, WorkCounterConstants, PauseCounterConstants } from './pomodoro/constants';
import { CounterImpl } from './pomodoro/counter-impl';
import { EditingPomodoro } from './pomodoro/editing-pomodoro';
import { RunningPomodoro } from './pomodoro/running-pomodoro';
import { ManualPomodoroDisplay } from './manual-pomodoro-display';
import { PomodoroImpl } from './pomodoro/pomodoro-impl';
import { AppComponent } from './app.component';

export class AppCompositor {
	private appComponent;

	constructor() {
		let constants = new Constants();
		let workCounterConstants = new WorkCounterConstants();
		let pauseCounterConstants = new PauseCounterConstants();

		let display = new ManualPomodoroDisplay();

		let workCounter = new CounterImpl(workCounterConstants);
		let pauseCounter = new CounterImpl(pauseCounterConstants);

		let runPomodoro = new RunningPomodoro(workCounter, pauseCounter, display, constants);
		let editPomodoro = new EditingPomodoro(workCounter, pauseCounter, display, constants);
		let pomodoro = new PomodoroImpl(runPomodoro, editPomodoro, display);

		this.appComponent = new AppComponent(display, pomodoro);
	}

	public getApp(): AppComponent {
		return this.appComponent;
	}
}
