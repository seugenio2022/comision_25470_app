import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

let itemEj = {
	"id": 1,
	"title": "item1",
	"description": "description1",
	"price": "price1",
	"pictureUrl": "./remera.jpg"
}

export default function ItemDetailContainer() {

	const [item, setItem] = useState([])

	useEffect(() => {

		const promise = new Promise((res, rej) => {
			setTimeout(() => {
				res(itemEj)
			}, 2000)

		})

		promise
			.then((response) => {
				setItem(response)
			})
			.catch((error) => {
				console.log(error);
			})

	})

	return (
		<>
			<ItemDetail detail={item} />
		</>

	)
}
