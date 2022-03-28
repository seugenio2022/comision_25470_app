
import Filter from './Filter';
import { Box } from '@mui/system';

const filters = [
	{
		"id": 1,
		"name": "Categoría",
		"values": ['Abrigos', 'Bermudas y Shorts', 'Blusas', 'Remeras']
	},
	{
		"id": 2,
		"name": "Marca",
		"values": ['Nike', 'Adidas', 'Lacoste', 'Puma']
	}
]
export default function FilterList() {

	return (
		<Box sx={{ mr: 2 }}>
			{
				filters.map((filter, i) => {
					return <Filter key={i} name={filter.name} values={filter.values} />
				})
			}
		</Box>
	)
}
