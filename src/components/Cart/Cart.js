import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CartContext } from '../../context/CartContext';
import { Stack, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'left',
	elevation: 3
}));

export default function Cart() {

	const { clear, removeItem, cart } = useContext(CartContext)

	return (
		<>
			{cart.length == 0 ?
				<Typography variant='h3'>Tu carrito está vacío</Typography>
				:
				<Box mt={5}>
					<Box mb={2}>
						<Stack direction="row"
							justifyContent="flex-end"
							alignItems="center"
							spacing={2}>
							<Button variant="contained" size="medium" >Comprar</Button>
							<Button onClick={clear} variant="outlined" size="medium" >Vaciar el carrito</Button>
						</Stack>
					</Box>
					<Grid container spacing={2}>
						{cart.map((cartItem, i) => {
							return (
								<Grid key={i} item xs={12}>
									<Item elevation={3}>
										<Grid
											container
											direction="row"
											justifyContent="space-around"
											alignItems="flex-start"
										>
											<Grid item>
												<Typography variant="h4" component="div">
													{cartItem.item.title}
												</Typography>
												<Button onClick={() => removeItem(cartItem.item)} variant="outlined" size="small" >Eliminar</Button>
											</Grid>
											<Grid item>
												<Typography variant="h5" component="div">
													Cantidad: {cartItem.count}
												</Typography>
											</Grid>
											<Grid item>
												<Typography variant="h4" component="div">
													${cartItem.item.price}
												</Typography>
											</Grid>
										</Grid>
									</Item>
								</Grid>
							)
						})}

					</Grid>
				</Box >
			}
		</>

	)
}
