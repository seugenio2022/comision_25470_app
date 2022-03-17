import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { items } from '../mock/items';

export default function ItemDetailContainer() {

	const [item, setItem] = useState([])
	const { id } = useParams()

	useEffect(() => {

		const promise = new Promise((res, rej) => {
			setTimeout(() => {
				console.log(id)
				console.log(items.filter(item => item.id == id))
				res(items.find(item => item.id == id))
			}, 2000)

		})

		promise
			.then((response) => {
				setItem(response)
			})
			.catch((error) => {
				console.log(error);
			})

	}, [id])

	return (
		<>
			<ItemDetail detail={item} />
		</>)
}
