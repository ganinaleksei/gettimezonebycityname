var assert = require('assert');
var getTimeZoneByCityName = require('../index')({
	googleapisKey: ""
});

describe('getTimeZoneByCityName', function() {
	it('should return "Europe/Moscow" when the value is "Нижний Новгород"', async () => {
		assert.equal(await getTimeZoneByCityName.getTimeZoneByCityName("Нижний Новгород"), 'Europe/Moscow');
	});
	
	it('should return "America/Caracas" when the value is "Palo Alto"', async () => {
		assert.equal(await getTimeZoneByCityName.getTimeZoneByCityName("San Francisco"), 'America/Caracas');
	});

	it('should return "America/Los_Angeles" when the value is "San Francisco"', async () => {
		assert.equal(await getTimeZoneByCityName.getTimeZoneByCityName("Palo Alto"), 'America/Los_Angeles');
	});
});
