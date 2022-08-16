import { useEffect } from 'react';

export default function GeoLocation() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};
	function success(pos) {
		var crd = pos.coords;
		displayLocation(crd.latitude, crd.longitude);
		// console.log('Your current position is:');
		// console.log(`Latitude : ${crd.latitude}`);
		// console.log(`Longitude: ${crd.longitude}`);
		// console.log(`More or less ${crd.accuracy} meters.`);
	}

	function errors(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.permissions
				.query({ name: 'geolocation' })
				.then(function (result) {
					if (result.state === 'granted') {
						console.log(result.state);
						navigator.geolocation.getCurrentPosition(success);
						//If granted then you can directly call your function here
					} else if (result.state === 'prompt') {
						navigator.geolocation.getCurrentPosition(success, errors);
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
	}, []);
}
