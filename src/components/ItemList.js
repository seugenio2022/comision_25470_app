import React from 'react'
import Item from './Item';
import Grid from '@mui/material/Grid';

export default function ItemList(props) {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
		>
			{
				props.items.map((product, i) => {
					return (
						<Grid key={i} item>
							<Item item={product} />
						</Grid>
					)
				})
			}
		</Grid>

	)
}
