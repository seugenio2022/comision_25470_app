import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemText, Skeleton, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext";
import { BullTextInfo } from "../../styles/components/BullTextInfo";
import Filter from "./Filter";


export default function FilterList({ loading, filterList, handleClick }) {

	return (
		(loading ? Array.from(new Array(3)) : filterList).map((filter, i) =>
			filter?.values ? <Filter key={i} filter={filter} handleClick={handleClick} />
				: <Skeleton key={i} width={300} height={350} />
		)
	)
}
