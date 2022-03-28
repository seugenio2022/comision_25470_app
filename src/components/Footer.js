import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
	return (
		<footer style={{
			position: "absolute",
			bottom: "0",
			width: "100%",
			height: "70px",


		}}>
			<Divider variant="middle" sx={{ mx: "500px" }} />
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}
				width={"100%"}
				height={"100%"}

			>

				<Typography variant='subtitle2' color={"primary"} >
					Copyright © 2022 BullShop
				</Typography>
				<Stack direction="row" >
					<IconButton>
						<FacebookIcon color='primary' />
					</IconButton>
					<IconButton>
						<InstagramIcon color='primary' />
					</IconButton>
					<IconButton>
						<LinkedInIcon color='primary' />
					</IconButton>
					<IconButton>
						<TwitterIcon color='primary' />
					</IconButton>
				</Stack>
			</Stack>
			<Divider variant="middle" />
		</footer>

	)
}

