import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Item(props) {

	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="div">
					{props.item.title}
				</Typography>
				<img src={props.item.pictureUrl} ></img>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{props.item.description}
				</Typography>
				<Typography variant="body2">
					{props.item.price}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Ver detalle del producto</Button>
			</CardActions>
		</Card>
	)
}
