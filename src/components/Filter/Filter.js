import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Filter({ name, values }) {

	return (
		<>
			<Typography pl={2} fontWeight="bold" >{name}</Typography>
			<List>
				{values.map((cat, i) => (
					<ListItem disablePadding key={i}>
						<ListItemButton component={Link} key={cat} to={"/category/" + cat} >
							<ListItemText primary={cat} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	)
}
