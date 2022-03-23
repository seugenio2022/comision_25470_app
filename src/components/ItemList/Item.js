import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia, Chip, Divider } from '@mui/material';
import { Box } from '@mui/system';

export default function Item(props) {

	return (
		<Card sx={{ minWidth: 300 }}>
			<Box sx={{
				height: "300px",
				width: "300px",
				pb: 1
			}}>
				<CardMedia
					component="img"
					image={props.item.pictureUrl}
				/>
			</Box>

			<Divider textAlign="left">
				<Chip label={props.item.stock + " disponibles"} variant="outlined" size='small' />
			</Divider>
			<CardContent>
				<Typography variant="h5" component="div">
					$ {props.item.price}
				</Typography>
				<Typography color="text.body">
					{props.item.title}
				</Typography>
			</CardContent>
			<CardActions sx={{ marginBottom: 2, justifyContent: "center" }}>
				<Button to={"/Item/" + props.item.id} LinkComponent={Link} variant="outlined">
					Ver detalle del producto
				</Button>
			</CardActions>
		</Card>
	)
}
