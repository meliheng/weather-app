var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};
let positionValue = '';
let data2 = '';
function success(pos) {
	var crd = pos.coords;
	positionValue = `${crd.latitude},${crd.longitude}`;
	getCityName(positionValue).then((data) => {
		data2 = data;
	});
}
async function getCityName(position) {
	const response = await fetch(
		`https://api.tomtom.com/search/2/reverseGeocode/${position}.json?key=${process.env.REACT_APP_GEO_API_KEY}&language=tr-TR&view=TR&mapcodes=Local`
	)
		.then((data) => data.json())
		.then((res) => {
			return res.addresses[0].address.municipality.toUpperCase();
		});
	//console.log(response);
	return response;
}
function errors(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}
function getLocation() {
	if (navigator.geolocation) {
		navigator.permissions
			.query({ name: 'geolocation' })
			.then(function (result) {
				if (result.state === 'granted') {
					navigator.geolocation.getCurrentPosition(success);

					//getCityName(positionValue).then((data) => console.log(data));
					//If granted then you can directly call your function here
				} else if (result.state === 'prompt') {
					return navigator.geolocation.getCurrentPosition(success, errors);
				} else if (result.state === 'denied') {
					//If denied then you have to show instructions to enable location
				}
				result.onchange = function () {
					console.log(result.state);
				};
			});
	} else {
		alert('Sorry Not available!');
	}
}
export { getLocation, data2 };
