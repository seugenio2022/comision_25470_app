import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BullTextInfo } from "../../styles/components/BullTextInfo";


export default function Filter({ name, values }) {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Box mb={2} width={250}>
			<ListItemButton onClick={handleClick}>
				<ListItemText >
					<Typography sx={{ fontWeight: "bold" }} variant="h6">{name}</Typography>
				</ListItemText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>

				<List>
					{values.map((value, i) => (
						<ListItem disablePadding key={i}>
							<ListItemButton component={Link} key={value.id} to={`/category/${value.level}/${value.id}/`} >
								<ListItemText>
									{value.name} <BullTextInfo variant="caption">(23)</BullTextInfo>
								</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Collapse>
			<Divider />
		</Box>
	)
}
