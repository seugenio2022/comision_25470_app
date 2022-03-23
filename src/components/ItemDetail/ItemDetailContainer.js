import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { items } from '../../mock/items';
import { CartContext } from '../../context/CartContext';

export default function ItemDetailContainer() {

	const [item, setItem] = useState([])
	const { id } = useParams()
	const { addItem, cart } = useContext(CartContext)
	const getCount = count => {
		addItem(item, count)
	}
	console.log(cart)
	useEffect(() => {

		const promise = new Promise((res, rej) => {
			setTimeout(() => {
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
			<ItemDetail detail={item} handleOnAdd={getCount} />
		</>)
}
