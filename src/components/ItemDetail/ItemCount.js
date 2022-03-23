import React, { useState } from 'react'
import { Button, Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Counter from './Counter';

export default function ItemCount({
	stock = 0,
	init = 1,
	onAdd = () => { }
}) {
	const [cant, setCant] = useState(init);

	const handleAdd = () => {
		if (cant < stock) {
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
			<Counter maxValue={stock} value={cant} handleAdd={handleAdd} handleRemove={handleRemove} />
			<Button sx={{
				width: "100%"
			}}
				variant="outlined" onClick={() => onAdd(cant)}>Agregar al carrito</Button>
		</>

	)
}
