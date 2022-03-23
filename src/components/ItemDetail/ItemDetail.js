import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { CardMedia, Grid, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import ThumbnailList from './ThumbnailList';
const borderStyle = {
	maxWidth: 350,
	border: "1px solid #ccc !important",
	borderRadius: "10px",
	height: 400,
	padding: 2
}

export default function ItemDetail({ detail, handleOnAdd }) {
	const thumbnailList = [detail.pictureUrl, detail.pictureUrl, detail.pictureUrl]
	return (
		<Paper
			sx={{
				flexGrow: 1,
				p: 3
			}}
		>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
			>
				<Grid item  >
					<Stack
						direction="row"
						alignItems="flex-start"
						justifyContent="space-between"
					>
						<ThumbnailList images={thumbnailList} />
						<CardMedia
							sx={{ ml: 15 }}
							component="img"
							height={400}
							image={detail.pictureUrl}
						/>
					</Stack>
				</Grid>

				<Grid item sx={borderStyle}>
					<Stack height={350} direction="column" justifyContent="space-between">

						<Box>
							<Typography sx={{ mb: 1.5 }} variant="h4" component="div">
								{detail.title}
							</Typography>
							<Typography sx={{ mb: 3 }} variant="h5" component="div">
								$ {detail.price}
							</Typography>
							<Typography color="text.body">
								{detail.description}
							</Typography>
						</Box>
						<Box>
							<ItemCount init={1} stock={detail.stock} onAdd={handleOnAdd} />
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</Paper >
	)
}
