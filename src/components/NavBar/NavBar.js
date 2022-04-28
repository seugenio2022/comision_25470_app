import Box from '@mui/material/Box';
import CartWidget from '../Cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useLocation } from "react-router-dom"
import { BullAppBar } from '../../styles/components/BullAppBar';
import TabControls from './TabControls';

export default function NavBar() {

	const location = useLocation();

	return (
		<>
			<Box mb={3}>
				<BullAppBar position="static" >

					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Link to='/'>
							<img src='/logo.png' height="120px" width="250px" />
						</Link>

						<TabControls location={location} />

						<CartWidget />

					</Stack>

				</BullAppBar>
			</Box >

		</>
	);
}
