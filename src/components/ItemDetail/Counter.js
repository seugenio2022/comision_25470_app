import { IconButton, Chip, Typography, Stack } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Counter({ handleAdd, handleRemove, value, maxValue }) {
	return (
		<Stack my={2} direction="row" alignItems="center">
			<IconButton color="primary" onClick={handleRemove}>
				<RemoveIcon fontSize="small" />
			</IconButton>
			<Chip
				label={value}
				size="large"
				variant="outlined"
				style={{ 'width': '100px' }}
			/>
			<IconButton color="primary" onClick={handleAdd}>
				<AddIcon fontSize="small" />
			</IconButton>
			<Typography>({maxValue} disponibles)</Typography>
		</Stack>
	)
}
