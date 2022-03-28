
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Thumbnail from './../ItemDetail/Thumbnail';
import ItemButton from '../ItemList/ItemButton';
import FormatNumber from '../../utils/FormatNumber';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'left',
	elevation: 3
}));

export default function CartItem({ cartItem, removeItem }) {
	return (
		<Grid item xs={12}>
			<Item elevation={3} >
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={5}
					p={2}
				>
					<Grid item xs={1}>
						<Thumbnail src={cartItem.item.pictureUrl} />
					</Grid>
					<Grid item xs={5}>
						<Typography variant="h5" component="div">
							{cartItem.item.title}
						</Typography>
						<Stack direction="row" spacing={1} pt={3}>
							<Button onClick={() => removeItem(cartItem.item)} variant="outlined" size="small" >
								Eliminar
							</Button>
							<ItemButton size="small" id={cartItem.item.id} />
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="h5" component="div">
							Cantidad: {cartItem.count}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant="h5" component="div">

							<FormatNumber value={cartItem.item.price} />
						</Typography>
					</Grid>
				</Grid>
			</Item>
		</Grid>
	)
}
