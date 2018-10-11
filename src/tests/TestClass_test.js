import TestClass from '../scripts/TestClass';

describe('TestClass', function () {
	it('Should return days', function () {
		const testClassInstance = new TestClass(5);
		expect(testClassInstance.returnDays()).toEqual(5);
	});
});

describe('TestClass', function () {
	it('Should add a day', function () {
		const testClassInstance = new TestClass(5);
		testClassInstance.addDays(2);
		expect(testClassInstance.returnDays()).toEqual(7);
	});
});
