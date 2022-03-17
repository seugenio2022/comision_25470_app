import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

export default function ItemDetail({ detail, handleOnAdd }) {
	return (
		<div>
			<Card>
				<CardContent>
					<Typography variant="h5" component="div">
						{detail.title}
					</Typography>
					<img src={detail.pictureUrl} ></img>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{detail.description}
					</Typography>
					<Typography variant="body2">
						{detail.price}
					</Typography>
					<ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
				</CardContent>
			</Card>
		</div>
	)
}
