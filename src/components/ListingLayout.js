import { Stack } from '@mui/material'
import React from 'react'
import BreadCrumbContainer from './BreadCrumb/BreadCrumbContainer'
import FilterListContainer from './Filter/FilterListContainer'
import ItemListContainer from './ItemList/ItemListContainer'

export default function ListingLayout() {
	return (
		<Stack direction="column" spacing={2} width="100%">
			<BreadCrumbContainer />
			<Stack direction="row">
				<FilterListContainer />
				<ItemListContainer />
			</Stack>
		</Stack>
	)
}
