import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../mock/items';
import FilterList from './../Filter/FilterList';


export default function ItemListContainer(props) {

	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const { categoryName } = useParams()

	useEffect(() => {
		setLoading(true)
		const promise = new Promise((res, rej) => {
			setTimeout(() => {
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
				setLoading(false)
			})
			.catch((error) => {
				setLoading(false)
			})

	}, [categoryName])

	return (
		<>
			<FilterList />
			<ItemList items={products} loading={loading} />
		</>

	)
}
