import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const categories = ['Hombre', 'Mujer', 'Deportes'];

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>

					<Typography variant="h6" noWrap component={"div"} sx={{ mr: 2 }}>
						<Link to="/"> Ropa Online</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

						{categories.map((cat) => (

							<MenuItem key={cat}>

								<Link to={"/category/" + cat}>{cat}</Link>
							</MenuItem>

						))}

					</Box >
					<CartWidget />
				</Toolbar>
			</AppBar>
		</Box >
	);
}
