
import Filter from './Filter';
import { Box } from '@mui/system';

const filters = [
	{
		"id": 1,
		"name": "Categorías",
		"values": ['Abrigos', 'Bermudas y Shorts', 'Blusas', 'Ropa Deportiva']
	}
]
export default function FilterList() {

	return (
		<Box sx={{ mr: 5 }}>
			{
				filters.map((filter, i) => {
					return <Filter key={i} name={filter.name} values={filter.values} />
				})
			}
		</Box>
	)
}
