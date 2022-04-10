import { Stack } from '@mui/material';
import React from 'react'
import ItemListContainer from '../ItemList/ItemListContainer';
import Banner from './Banner';
import Information from './Information';

export default function Home() {
	return (
		<Stack direction="column" spacing={6} alignItems="center">
			<Banner />
			<Information />
			<ItemListContainer />
		</Stack>
	)
}
