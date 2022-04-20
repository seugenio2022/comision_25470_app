
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemService from '../../services/ItemService';
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
