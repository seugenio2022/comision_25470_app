import { Box } from '@mui/system';
import { CardMedia, Stack } from '@mui/material';

const borderStyle = {
	border: "1px solid #ccc !important",
	borderRadius: "2px",
	height: "60px",
	width: "60px",
	p: 0.5
}
export default function ThumbnailList({ images }) {
	return (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={2}
		>
			{images.map((src, i) => {
				return (
					<Box key={i} Box sx={borderStyle}>
						<CardMedia
							component="img"
							image={src}
						/>
					</Box >
				)
			})}
		</Stack>
	)
}
