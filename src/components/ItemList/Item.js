import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardMedia, Chip, Divider } from '@mui/material';
import { Box } from '@mui/system';
import ItemButton from './ItemButton';
import FormatNumber from './../../utils/FormatNumber';
import { BullCard } from '../../styles/components/BullCard';

export default function Item(props) {

	return (
		<BullCard sx={{ width: 280, height: 500 }}>

			<CardMedia
				component="img"
				height={300}
				image={props.item.pictureUrl}
				sx={{ pb: 2 }}

			/>

			<Divider textAlign="center">
				<Chip label={props.item.stock + " disponibles"} variant="outlined" size='small' />
			</Divider>
			<CardContent sx={{ textAlign: "center" }}>
				<Typography variant="h5" component="div">
					<FormatNumber value={props.item.price} />
				</Typography>
				<Typography color="text.body">
					{props.item.title}
				</Typography>
			</CardContent>
			<CardActions sx={{ marginBottom: 2, justifyContent: "center" }}>
				<ItemButton id={props.item.id} />
			</CardActions>

		</BullCard>
	)
}
