import { useState, useEffect } from 'react';
import './App.css';
import ChooseCard from './components/ChooseCard';
import WeatherCard from './components/WeatherCard';
import { data2, getLocation } from './apiService';

function App() {
	const [city, setCity] = useState('');
	const [storageCities, setStorageCities] = useState(
		JSON.parse(localStorage.getItem('cities'))
	);

	useEffect(() => {
		if (storageCities === null) {
			getLocation();
			let arr = [];
			arr.push(data2);
			localStorage.setItem('cities', JSON.stringify(arr));
			setStorageCities(JSON.parse(localStorage.getItem('cities')));
		}
	}, []);
	useEffect(() => {
		let citiesArray = JSON.parse(localStorage.getItem('cities')) || [];
		if (!citiesArray.includes(city) && city !== '') {
			citiesArray.push(city);
			localStorage.setItem('cities', JSON.stringify(citiesArray));
			setStorageCities(JSON.parse(localStorage.getItem('cities')));
		}
	}, [city]);

	const handleSelectedCity = (event) => {
		setCity(event.target.value);
	};
	const removeCity = (cityName) => {
		let citiesArray = JSON.parse(localStorage.getItem('cities'));
		citiesArray.splice(citiesArray.indexOf(cityName), 1);
		localStorage.setItem('cities', JSON.stringify(citiesArray));
		setStorageCities(JSON.parse(localStorage.getItem('cities')));
	};
	return (
		<div
			className='App'
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div style={{ width: '70%' }}>
				<ChooseCard handleSelectedCity={handleSelectedCity} city={city} />
				{storageCities &&
					storageCities.map((c, index) => {
						return <WeatherCard city={c} key={index} removeCity={removeCity} />;
					})}
			</div>
		</div>
		//<GeoLocation />
	);
}

export default App;
