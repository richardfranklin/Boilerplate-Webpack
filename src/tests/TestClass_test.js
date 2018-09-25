import TestClass from '../scripts/TestClass';

describe('TestClass', function () {
	it('Should return true', function () {
		const testClassInstance = new TestClass();
		expect(testClassInstance.testConsole()).toBe(true);
	});
});

describe('true should be true', function () {
	it('Should return true', function () {
		expect(true).toBe(true);
	});
});
