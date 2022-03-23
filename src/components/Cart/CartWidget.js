import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../../context/CartContext';

export default function CartWidget() {

	const { getTotalCount } = useContext(CartContext)

	return (

		<IconButton component={Link} to="/cart/"
			size="large"
			style={{
				color: "white",

			}}>

			<ShoppingCartOutlinedIcon fontSize="inherit" />
			<Typography pl={0.5}>Carrito ({getTotalCount()})</Typography>
		</IconButton>
	)
}
