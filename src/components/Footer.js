import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
	return (

		<Box sx={{


			'& > :not(style)': {
				mt: 10,
				width: "100%",
				height: 100,
			},
		}}>
			<Paper elevation={0} style={{ display: "flex" }}>

				<Stack
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={2}
					width={"100%"}
					margin={"0px 70px 0px 70px"}
				>
					<Typography color={"primary"} >Copyright © 2022 RopaOnline</Typography>
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
			</Paper>
		</Box >

	)
}

