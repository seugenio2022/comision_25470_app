
import Filter from './Filter';
import { Box } from '@mui/system';

export default function FilterList({ filters }) {



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
