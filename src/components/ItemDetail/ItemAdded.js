import { Alert, Button, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';
import FormatNumber from '../../utils/FormatNumber';
import { BullButton } from '../../styles/components/BullButton';
import { BullAlert } from '../../styles/components/BullAlert';

export default function ItemAdded({ item, cant }) {
	return (

		<BullAlert variant="outlined" severity="success">
			<Grid direction="row" container spacing={2} alignItems="center">
				<Grid item xs={5} >
					<Stack direction="row" spacing={2}>
						<Thumbnail src={item.pictureUrl} />
						<Box minWidth={300}>
							<Typography variant='h5'>Agregaste a tu carrito</Typography>
							<Typography variant='subtitle1'>{item.title}</Typography>
						</Box>
						<Divider orientation="vertical" variant="middle" flexItem />
					</Stack>
				</Grid>

				<Grid item xs={4}>
					<Typography variant='body1'>
						{cant} producto en tu carrito: <FormatNumber value={cant * item.price} />
					</Typography>
				</Grid>

				<Grid item xs={3}>
					<BullButton size='large' to={"/Cart"} LinkComponent={Link} variant="contained">
						Terminar mi compra
					</BullButton>
				</Grid>
			</Grid>
		</BullAlert>
	)
}
