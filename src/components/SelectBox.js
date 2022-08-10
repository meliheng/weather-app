import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox({handleSelectedCity,city}) {
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Please select a city</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Please select a city"
          onChange={handleSelectedCity}
        >
          <MenuItem value="Istanbul">Istanbul</MenuItem>
          <MenuItem value="Ankara">Ankara</MenuItem>
          <MenuItem value="Sivas">Sivas</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
