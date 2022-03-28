import React from 'react'
import Item from './Item';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@mui/material';

export default function ItemList({ items, loading }) {
	return (
		<Grid
			container
			direction="row"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
			ml={2}
		>
			{
				(loading ? Array.from(new Array(3)) : items).map((product, i) => {
					return (
						<Grid key={i} item>
							{product ? (
								<Item item={product} />
							) : (
								<Skeleton variant="rectangular" width={300} height={350} />
							)}

						</Grid>
					)
				})
			}
		</Grid>

	)
}
