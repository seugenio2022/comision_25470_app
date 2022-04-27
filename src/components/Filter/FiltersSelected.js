import { Box, Chip, Skeleton } from "@mui/material"

export default function FiltersSelected({ filters, handleDelete }) {

	return (
		filters.map((filter, i) =>
			<Chip sx={{ my: 1 }} key={i} label={filter.value} color="secondary" onDelete={handleDelete} />
		)

	)
}
