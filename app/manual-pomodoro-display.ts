import { PomodoroDisplay } from './pomodoro/pomodoro-display';
import { Timify } from './pomodoro/timify';

export class ManualPomodoroDisplay {
	private _titleLabel = '';
	private _countdown = 0;
	private _leftDecoration = '';
	private _rightDecoration = '';
	private _toggleLabel = '';
	private _editLabel = '';
	private _resetLabel = '';
	private _editing = false;

	private _titleElems: HTMLCollection;
	private _leftDecoElems: HTMLCollection;
	private _rigthDecoElems: HTMLCollection;
	private _minutesElems: HTMLCollection;
	private _secondsElems: HTMLCollection;

	private _toggleLabelElems: HTMLCollection;
	private _resetLabelElems: HTMLCollection;
	private _editLabelElems: HTMLCollection;

	private _editingElems: HTMLCollection;
	private _nonEditingElems: HTMLCollection;

	constructor() {
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
		Array.from(this._titleElems).forEach((element) => {
			if (element instanceof HTMLInputElement ) {
				element.addEventListener("input", (event) => {
					if (event.target instanceof HTMLInputElement ) {
						this.titleLabel = event.target.value;
					}
				});
			}
		});
	}

	public get titleLabel(): string {
		return this._titleLabel;
	}
	public set titleLabel(newVal: string) {
		this._titleLabel = newVal;

		Array.from(this._titleElems).forEach((element) => {
			// title label is a special case with a version with text input
			if (element instanceof HTMLInputElement ) {
				element.value = this._titleLabel;
			} else {
				element.innerHTML = this._titleLabel;
			}
		});
	}

	public get countdown(): number {
		return this._countdown;
	}
	public set countdown(newVal: number) {
		this._countdown = newVal;

		Array.from(this._minutesElems).forEach((element) => {
			element.innerHTML = String(Timify.minutify(this._countdown));
		});
		Array.from(this._secondsElems).forEach((element) => {
			element.innerHTML = String(Timify.secondify(this._countdown));
		});
	}

	public get leftDecoration(): string {
		return this._leftDecoration;
	}
	public set leftDecoration(newVal: string) {
		this._leftDecoration = newVal;

		Array.from(this._leftDecoElems).forEach((element) => {
			element.innerHTML = this._leftDecoration;
		});
	}

	public get rightDecoration(): string {
		return this._rightDecoration;
	}
	public set rightDecoration(newVal: string) {
		this._rightDecoration = newVal;

		Array.from(this._rigthDecoElems).forEach((element) => {
			element.innerHTML = this._rightDecoration;
		});
	}

	public get toggleLabel(): string {
		return this._toggleLabel;
	}
	public set toggleLabel(newVal: string) {
		this._toggleLabel = newVal;

		Array.from(this._toggleLabelElems).forEach((element) => {
			element.innerHTML = this._toggleLabel;
		});
	}

	public get editLabel(): string {
		return this._editLabel;
	}
	public set editLabel(newVal: string) {
		this._editLabel = newVal;

		Array.from(this._editLabelElems).forEach((element) => {
			element.innerHTML = this._editLabel;
		});
	}

	public get resetLabel(): string {
		return this._resetLabel;
	}
	public set resetLabel(newVal: string) {
		this._resetLabel = newVal;

		Array.from(this._resetLabelElems).forEach((element) => {
			element.innerHTML = this._resetLabel;
		});
	}

	public get editing(): boolean {
		return this._editing;
	}
	public set editing(newVal: boolean) {
		this._editing = newVal;

		if (this._editing) {
			Array.from(this._nonEditingElems).forEach((element) => {
				element.classList.add('hidden');
			});
			Array.from(this._editingElems).forEach((element) => {
				element.classList.remove('hidden');
			});
		} else {
			Array.from(this._editingElems).forEach((element) => {
				element.classList.add('hidden');
			});
			Array.from(this._nonEditingElems).forEach((element) => {
				element.classList.remove('hidden');
			});
		}
	}
}
