import React from 'react'
import { Container, Typography } from '@mui/material';
import { BullAlert } from '../../styles/components/BullAlert';
import { useParams } from 'react-router-dom';

export default function CheckOut() {
	const { id } = useParams();

	return (
		<Container>
			<BullAlert variant="outlined" severity="success">
				<Typography variant="h5">Orden creada</Typography>
				<Typography variant="body1">Código de orden de compra: {id} </Typography>
			</BullAlert>
		</Container>
	)
}
