import { AppCompositor } from './app-compositor';

window.onload = function () {
	let compositor = new AppCompositor();
	compositor.getApp().onInit();
}
