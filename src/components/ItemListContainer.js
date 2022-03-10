import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

let items = [
	{
		"id": 1,
		"title": "item1",
		"description": "description1",
		"price": "price1",
		"pictureUrl": "./remera.jpg"
	},
	{
		"id": 2,
		"title": "item2",
		"description": "description2",
		"price": "price2",
		"pictureUrl": "./remera.jpg"
	},
	{
		"id": 3,
		"title": "item3",
		"description": "description3",
		"price": "price3",
		"pictureUrl": "./remera.jpg"
	}
]

export default function ItemListContainer(props) {
	const handleOnAdd = () => { }

	return (
		<>
			<Typography variant="h1" component="h2">
				{props.message}
			</Typography>
			<ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
			<ItemList items={items} />
		</>

	)
}
