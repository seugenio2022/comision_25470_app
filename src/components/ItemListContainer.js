import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../mock/items';

export default function ItemListContainer(props) {

	const [products, setProducts] = useState([])
	const { categoryName } = useParams()

	useEffect(() => {

		const promise = new Promise((res, rej) => {
			setTimeout(() => {
				console.log(categoryName)
				if (categoryName) {
					res(items.filter(item => item.category === categoryName))
				} else {
					res(items)
				}

			}, 2000)

		})

		promise
			.then((response) => {
				setProducts(response)
			})
			.catch((error) => {
				console.log(error);
			})

	}, [categoryName])

	return (
		<>
			<Typography variant="h1" component="h2">
				{props.message}
			</Typography>
			<ItemList items={products} />
		</>

	)
}
