
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartContext, CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import FilterList from './components/Filter/FilterList';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/BullTheme';


export default function App() {
	return (

		<CartContextProvider>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<NavBar />
					<Layout />
					<Footer />
				</ThemeProvider>
			</BrowserRouter>
		</CartContextProvider >
	)
}