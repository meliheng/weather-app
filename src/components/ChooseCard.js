import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectBox from "./SelectBox";
export default function ChooseCard({handleSelectedCity,city}) {
  return (
    <Card sx={{ minWidth: 275 }} elevation={4}>
      <CardContent>
        
        <SelectBox handleSelectedCity={handleSelectedCity} city={city}/>
        
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
