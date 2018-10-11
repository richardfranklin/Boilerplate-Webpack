export default class TestClass {
	constructor(days) {
		this.days = days;
	}

	addDays(nDays) {
		this.days += nDays;
	}

	returnDays() {
		return this.days;
	}
}
