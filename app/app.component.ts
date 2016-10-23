import { Pomodoro } from './pomodoro/pomodoro';
import { PomodoroDisplay } from './pomodoro/pomodoro-display';

export class AppComponent {
	constructor(private display: PomodoroDisplay, private pomodoro: Pomodoro) {}

	public onInit(): void { this.attachView(); }

	public onEdit() { this.pomodoro.onEdit(); }
	public onToggle() { this.pomodoro.onToggle(); }
	public onReset() { this.pomodoro.onReset(); }

	public incrementMin() { this.pomodoro.incrementMin(); }
	public decrementMin() { this.pomodoro.decrementMin(); }
	public incrementSec() { this.pomodoro.incrementSec(); }
	public decrementSec() { this.pomodoro.decrementSec(); }

	private attachView() {
		Array.from(document.getElementsByClassName('increment-min')).forEach((element) => {
			element.addEventListener("click", (event) => { this.incrementMin(); })
		});
		Array.from(document.getElementsByClassName('decrement-min')).forEach((element) => {
			element.addEventListener("click", (event) => { this.decrementMin(); })
		});
		Array.from(document.getElementsByClassName('increment-sec')).forEach((element) => {
			element.addEventListener("click", (event) => { this.incrementSec(); })
		});
		Array.from(document.getElementsByClassName('decrement-sec')).forEach((element) => {
			element.addEventListener("click", (event) => { this.decrementSec(); })
		});
		Array.from(document.getElementsByClassName('on-toggle')).forEach((element) => {
			element.addEventListener("click", (event) => { this.onToggle(); })
		});
		Array.from(document.getElementsByClassName('on-edit')).forEach((element) => {
			element.addEventListener("click", (event) => { this.onEdit(); })
		});
		Array.from(document.getElementsByClassName('on-reset')).forEach((element) => {
			element.addEventListener("click", (event) => { this.onReset(); })
		});
	}
}
