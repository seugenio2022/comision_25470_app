import Box from '@mui/material/Box';
import CartWidget from '../Cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner';
import { Stack } from '@mui/material';
import { useLocation } from "react-router-dom"
import { BullAppBar } from '../../styles/components/BullAppBar';
import { useState } from 'react';
import TabControls from './TabControls';

export default function NavBar() {

	const location = useLocation();

	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box mb={3}>
				<BullAppBar position="static" >

					<Stack mr={10} direction="row" alignItems="center" justifyContent="space-between">
						<Link to='/'>
							<img src='/logo.png' height="120px" width="250px" />
						</Link>

						<TabControls />

						<CartWidget />

					</Stack>

				</BullAppBar>

				<Banner show={location.pathname == "/home" ? true : false} />
			</Box >

		</>
	);
}
