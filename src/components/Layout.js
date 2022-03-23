import FilterList from "./Filter/FilterList";
import { Route, Routes } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import ItemListContainer from './ItemList/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';

export default function Layout() {
	return (
		<Container>
			<Stack direction="row">
				<Routes >
					<Route path='/home' element={<ItemListContainer banner={true} />} />
					<Route path='/category/:categoryName' element={<ItemListContainer />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart/' element={<Cart />} />
				</Routes>
			</Stack>
		</Container>
	)
}
