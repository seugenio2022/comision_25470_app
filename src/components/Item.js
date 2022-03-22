import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';

export default function Item(props) {

	return (
		<Card sx={{ minWidth: 300 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image={props.item.pictureUrl}
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{props.item.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{props.item.description}
				</Typography>
				<Typography variant="body2">
					{props.item.price}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={"/Item/" + props.item.id}> <Button variant="contained">Ver detalle del producto</Button></Link>
			</CardActions>
		</Card>
	)
}
