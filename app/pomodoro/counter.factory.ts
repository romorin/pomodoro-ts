import { injectable } from "inversify";
import { CounterConstants } from './counter-constants';
import { Counter } from './counter';

@injectable()
export class CounterFactory {
	public init(_constants: CounterConstants) {
		return new Counter(_constants);
	}
}
