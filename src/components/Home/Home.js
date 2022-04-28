
import { Stack } from '@mui/material';
import ItemListContainer from '../ItemList/ItemListContainer';
import Information from './Information';

export default function Home() {

	return (
		<Stack direction="column" spacing={6} alignItems="center">
			<Information />
			<ItemListContainer />
		</Stack>
	)
}
