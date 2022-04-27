import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { BullTextInfo } from "../../styles/components/BullTextInfo";


export default function Filter({ filter, handleClick }) {
	const [open, setOpen] = useState(true);
	const { name, displayName, values } = filter;

	const handleClickTitle = () => {
		setOpen(!open);
	};

	return (
		filter.values ?
			<Box mb={2} width={250}>
				<ListItemButton onClick={handleClickTitle}>
					<ListItemText >
						<Typography sx={{ fontWeight: "bold" }} variant="h6" > {displayName}</Typography >
					</ListItemText >
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton >

				<Collapse in={open} timeout="auto" unmountOnExit>

					<List>
						{values.map((value, i) => (
							<ListItem disablePadding key={i}>
								<ListItemButton onClick={() => handleClick(name, value)} key={value.id}>
									<ListItemText>
										{value.name} <BullTextInfo variant="caption">(23)</BullTextInfo>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Collapse>
				<Divider />
			</Box > : <></>

	)
}
