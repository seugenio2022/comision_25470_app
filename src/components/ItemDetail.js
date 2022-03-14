import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemDetail(props) {
	return (
		<div>
			<Card>
				<CardContent>
					<Typography variant="h5" component="div">
						{props.detail.title}
					</Typography>
					<img src={props.detail.pictureUrl} ></img>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{props.detail.description}
					</Typography>
					<Typography variant="body2">
						{props.detail.price}
					</Typography>
				</CardContent>
			</Card>
		</div>
	)
}
