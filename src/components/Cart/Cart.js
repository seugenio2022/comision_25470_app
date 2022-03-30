import React, { useContext } from 'react'
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { CartContext } from '../../context/CartContext';
import { Container, Stack, Typography } from '@mui/material';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import FormatNumber from '../../utils/FormatNumber';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate } from "react-router-dom";

export default function Cart() {

	const { clear, removeItem, cart, getTotalPrice } = useContext(CartContext)
	const navigate = useNavigate()
	const handleBuy = () => {
		const order = {
			buyer: {
				name: 'Seba',
				lastName: 'Euge',
				email: 'seba@gmail.com',
				phone: '2222222'
			},
			items: cart,
			date: serverTimestamp(),
			total: getTotalPrice()
		}

		const ordersCollection = collection(db, 'Orders');
		const pedidored = addDoc(ordersCollection, order);
		pedidored.then((res) => {
			navigate(`/checkout/${res.id}`)
		})
	}

	return (
		<Container>
			{cart.length == 0 ?
				<Box width="100%" sx={{ textAlign: "center" }}>
					<Typography mb={2} variant='h3'>Tu carrito está vacío</Typography>

					<Button size="large" to={"/"} LinkComponent={Link} variant="outlined">
						Volver al inicio
					</Button>

				</Box>
				:
				<Box mt={5} width="100%" >
					<Box mb={2}>
						<Stack direction="row"
							justifyContent="flex-end"
							alignItems="center"
							spacing={2}>
							<Button onClick={handleBuy} variant="contained" size="medium" >Comprar</Button>
							<Button onClick={clear} variant="outlined" size="medium" >Vaciar el carrito</Button>
						</Stack>
					</Box>
					<Grid container spacing={2}>
						{cart.map((item, i) => {
							return (
								<CartItem key={i} cartItem={item} removeItem={removeItem} />
							)
						})}

					</Grid>
					<Box sx={{ textAlign: "right", m: 2, mr: 13 }}>
						<Typography variant='h5'>
							Total: <FormatNumber value={getTotalPrice()} />
						</Typography>
					</Box>
				</Box >
			}
		</Container>

	)
}
