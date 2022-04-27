
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Routing from './components/Routing';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/BullTheme';
import { CategoryContextProvider } from './context/CategoryContext';
import { ItemsContextProvider } from './context/ItemsContext';
import { FilterContextProvider } from './context/FilterContext';
import { CartContextProvider } from './context/CartContext';


export default function App() {
	return (
		<FilterContextProvider>
			<ItemsContextProvider>
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
			</ItemsContextProvider>
		</FilterContextProvider>
	)
}