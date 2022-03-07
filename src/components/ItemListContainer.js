import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

export default function ItemListContainer(props) {
	const handleOnAdd = () => { }

	return (
		<>
			<Typography variant="h1" component="h2">
				{props.message}
			</Typography>
			<ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
		</>

	)
}
