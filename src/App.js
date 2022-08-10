import { useState, useEffect } from 'react';
import './App.css';
import ChooseCard from './components/ChooseCard';
import WeatherCard from './components/WeatherCard';

function App() {
	const [city, setCity] = useState('');
	const [storageCities, setStorageCities] = useState(
		JSON.parse(localStorage.getItem('cities'))
	);

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
						return <WeatherCard city={c} key={index} />;
					})}
			</div>
		</div>
	);
}

export default App;