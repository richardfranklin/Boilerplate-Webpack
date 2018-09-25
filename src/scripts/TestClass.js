export default class TestClass {
	constructor() {
		this.testConsole();
	}

	testConsole() {
		console.log('Returning true...'); // eslint-disable-line no-console
		return true;
	}
}
