import { Box } from '@mui/system';
import { CardMedia, Stack } from '@mui/material';

const size = {
	height: "60px",
	width: "60px"
}

export default function Thumbnail({ src }) {
	return (
		<Box sx={size}>
			<CardMedia
				component="img"
				image={src}
				height="100%"
			/>
		</Box >
	)
}
