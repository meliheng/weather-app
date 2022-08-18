var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};
let positionValue = '';
let data2 = {};
// function success(pos) {
// 	var crd = pos.coords;
// 	positionValue = `${crd.latitude},${crd.longitude}`;
// 	getCityName(positionValue).then((data) => {
// 		data2 = data;
// 		//console.log(data2);
// 	});
// }
//res.addresses[0].address.municipality.toUpperCase();
async function getCityName(lat, lon) {
	const position = `${lat},${lon}`;
	const response = await fetch(
		`https://api.tomtom.com/search/2/reverseGeocode/${position}.json?key=${process.env.REACT_APP_GEO_API_KEY}&language=tr-TR&view=TR&mapcodes=Local`
	).then((data) => data.json());
	return response;
}
// 	//console.log(response);
// 	return response;
// }
// function errors(err) {
// 	console.warn(`ERROR(${err.code}): ${err.message}`);
// }
// async function getLocation() {
// if (navigator.geolocation) {
// 	navigator.permissions
// 		.query({ name: 'geolocation' })
// 		.then(function (result) {
// 			if (result.state === 'granted') {
// 				navigator.geolocation.getCurrentPosition(success);

// 				//getCityName(positionValue).then((data) => console.log(data));
// 				//If granted then you can directly call your function here
// 			} else if (result.state === 'prompt') {
// 				return navigator.geolocation.getCurrentPosition(success, errors);
// 			} else if (result.state === 'denied') {
// 				//If denied then you have to show instructions to enable location
// 			}
// 			result.onchange = function () {
// 				console.log(result.state);
// 			};
// 		})
// 		.finally(console.log(data2));
// } else {
// 	alert('Sorry Not available!');
// }
let getLocationPromise = () => {
	return new Promise(function (resolve, reject) {
		// Promisifying the geolocation API
		navigator.geolocation.getCurrentPosition(
			(position) => resolve(position),
			(error) => reject(error)
		);
	});
};
async function getLocation() {
	const { coords } = await getLocationPromise();
	const data = await getCityName(coords.latitude, coords.longitude);

	return data.addresses[0].address.municipality.toUpperCase();
}
// }
export { getLocation };
