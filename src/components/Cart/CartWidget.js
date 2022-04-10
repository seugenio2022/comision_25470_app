import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../../context/CartContext';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -2,
		top: 17,
		border: `3px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function CartWidget() {

	const { getTotalCount } = useContext(CartContext)

	return (

		<IconButton component={Link} to="/cart/"
			size="large"
			color='primary'
			sx={{ width: "250px" }}
		>
			<StyledBadge
				style={{ display: (getTotalCount() == 0 ? 'none' : '') }}
				badgeContent={getTotalCount()}
				color="primary">
				<ShoppingCartOutlinedIcon fontSize="inherit" />
			</StyledBadge>
		</IconButton>
	)
}
