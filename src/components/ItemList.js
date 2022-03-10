import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function ItemList(props) {

	const [products, setProducts] = useState([])

	useEffect(() => {

		const promise = new Promise((res, rej) => {
			setTimeout(() => {
				res(props.items)
			}, 2000)

		})

		promise
			.then((response) => {
				setProducts(response)
			})
			.catch((error) => {
				console.log(error);
			})

	})

	return (
		<>
			<ul>
				{
					products.map((product, i) => {
						return <Item key={i} item={product} />
					})
				}

			</ul>
		</>
	)
}
