import React from 'react'
import Item from './Item';

export default function ItemList(props) {
	return (
		<>
			<ul>
				{
					props.items.map((product, i) => {
						return <Item key={i} item={product} />
					})
				}

			</ul>
		</>
	)
}
