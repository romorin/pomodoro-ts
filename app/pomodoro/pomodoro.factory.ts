import { injectable } from "inversify";
import { PomodoroState } from './pomodoro-state';
import { PomodoroDisplay } from './pomodoro-display';
import { Pomodoro } from './pomodoro';

@injectable()
export class PomodoroFactory {
	public init(_runningState: PomodoroState, _editState: PomodoroState,
			_display: PomodoroDisplay) {
		return new Pomodoro(_runningState, _editState, _display);
	}
}
