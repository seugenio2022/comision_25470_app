import Typography from '@mui/material/Typography';

export default function ItemListContainer(props) {
	return (
		<Typography variant="h1" component="h2">
			{props.message}
		</Typography>
	)
}
