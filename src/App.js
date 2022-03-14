
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
export default function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer message="Bienvenido!" />
			<ItemDetailContainer />
		</>


	)
}