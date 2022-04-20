
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartContext, CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Routing from './components/Routing';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/BullTheme';
import { CategoryContextProvider } from './context/CategoryContext';


export default function App() {
	return (
		<CategoryContextProvider>
			<CartContextProvider>
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<NavBar />
						<Routing />
						<Footer />
					</ThemeProvider>
				</BrowserRouter>
			</CartContextProvider >
		</CategoryContextProvider>
	)
}