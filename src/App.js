
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { CartContext, CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';

export default function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Container>
					<Routes >
						<Route path='/' element={<ItemListContainer message="Bienvenido!" />} />
						<Route path='/category/:categoryName' element={<ItemListContainer />} />
						<Route path='/item/:id' element={<ItemDetailContainer />} />
						<Route path='/cart/' element={<Cart />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</CartContextProvider>
	)
}