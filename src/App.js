
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartContext, CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import FilterList from './components/Filter/FilterList';
import Layout from './components/Layout';

export default function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Layout />
				<Footer />
			</BrowserRouter>
		</CartContextProvider >
	)
}