/* tslint:disable:no-unused-variable */
///<reference path="./../../typings/globals/jasmine/index.d.ts"/>

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PomodoroService } from './pomodoro/pomodoro.service';
import { MODULE_POMODORO } from './pomodoro/pomodoro.module';
import { CountdownMinutesPipe } from './countdown-minutes.pipe';
import { CountdownSecondsPipe } from './countdown-seconds.pipe';

describe('App: Pomodoro', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
					imports: [
						FormsModule
					],
					declarations: [
						AppComponent, CountdownMinutesPipe, CountdownSecondsPipe
					],
					providers: [
						PomodoroService, MODULE_POMODORO
					]
				});
	});

	it('should create the app', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
