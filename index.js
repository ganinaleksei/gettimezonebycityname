const r2 = require('r2');

module.exports = function(config){
	return {
		getTimeZoneByCityName: async (cityName) => {

			var location = {};
			
			try {
				const yandexUrl = "https://geocode-maps.yandex.ru/1.x/?geocode=" + encodeURI(cityName) + "&format=json&results=1";
				const yandexResp = await r2(
					yandexUrl
				).json;
				latlng = yandexResp.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
				location.lng = latlng[0];
				location.lat = latlng[1];
			} catch (err){
				throw new Error(err);
			}
                
			try {
				const googleUrl = "https://maps.googleapis.com/maps/api/timezone/json?location=" + location.lat + "," + location.lng + "&timestamp=" + (Date.now() / 1000) + "&key=" + config.googleapisKey;
				const googleResp = await r2(
					googleUrl
				).json;
				return googleResp.timeZoneId;
			} catch (err) {
				throw new Error(err);
			}
		}
	};
};
