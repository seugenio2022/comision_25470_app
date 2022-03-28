
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Thumbnail from './Thumbnail';


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
					<Box key={i} sx={{
						border: "1px solid #ccc !important",
						borderRadius: "2px",
						p: 0.5
					}}>
						<Thumbnail src={src} />
					</Box>
				)
			})}
		</Stack>
	)
}
