import React, { useState } from 'react'
import { Button, Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemCount(props) {
	const [cant, setCant] = useState(props.initial);

	const handleAdd = () => {
		if (cant < props.stock) {
			setCant(cant + 1);
		}
	};

	const handleRemove = () => {
		if (cant > 1) {
			setCant(cant - 1);
		}
	};

	return (
		<>
			<IconButton color="primary" onClick={handleRemove}>
				<RemoveIcon fontSize="small" />
			</IconButton>
			<Chip label={cant} size="large" variant="outlined"
				style={{ 'width': '100px' }} />
			<IconButton color="primary" onClick={handleAdd}>
				<AddIcon fontSize="small" />
			</IconButton>
			<Button variant="outlined">Agregar al carrito</Button>
		</>

	)
}
