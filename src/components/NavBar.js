import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './Cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import Banner from './Banner';
import { Stack } from '@mui/material';
import { useLocation } from "react-router-dom"
export default function NavBar() {

	const location = useLocation();
	console.log(location.pathname);
	return (
		<>
			<Box mb={4}>
				<AppBar position="static" >

					<Stack mx={10} direction="row" alignItems="center" justifyContent="space-between">

						<Typography variant='h5' mr={2}>
							<Link to='/home' style={{ textDecoration: 'none', color: 'unset' }}>
								Tienda de Ropa Online
							</Link>
						</Typography>

						<CartWidget />

					</Stack>

				</AppBar>

				<Banner show={location.pathname == "/home" ? true : false} />
			</Box >

		</>
	);
}
