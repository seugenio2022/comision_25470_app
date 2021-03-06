import { Route, Routes } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import ItemListContainer from './ItemList/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import CheckOut from "./CheckOut/CheckOut";
import Home from './Home/Home';
import ListingLayout from './ListingLayout';

export default function Routing() {
	return (
		<Container maxWidth={"100%"} sx={{ mb: 20 }}>
			<Stack direction="row"
				justifyContent="center"
				alignItems="flex-start" >
				<Routes >
					<Route path='/' element={<Home />} />
					<Route path='/category/:level/:categoryId/' element={<ListingLayout />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart/' element={<Cart />} />
					<Route path='/checkout/:id' element={<CheckOut />} />
				</Routes>
			</Stack>
		</Container>
	)
}
