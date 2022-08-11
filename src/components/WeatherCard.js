import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function WeatherCard({ city, removeCity }) {
	const { data, error } = useSWR(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`,
		fetcher
	);
	let temp = '',
		icon = '',
		description = '';
	if (data) {
		temp = Math.round(data.main.temp);
		icon = data.weather[0].icon;
		description = data.weather[0].description;
	}
	return (
		<Card sx={{ display: 'flex', marginTop: '2rem', width: 1 }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component='div' variant='h5'>
						{city}
					</Typography>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						{temp} &#176;
					</Typography>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						{description}
					</Typography>
				</CardContent>
			</Box>
			<CardMedia
				component='img'
				sx={{ width: 100, marginLeft: 'auto' }}
				image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
				alt='Live from space album cover'
			/>
			<DeleteOutlineIcon
				onClick={() => removeCity(city)}
				sx={{
					cursor: 'pointer',
					':hover': { color: 'red' },
				}}
			/>
		</Card>
	);
}
