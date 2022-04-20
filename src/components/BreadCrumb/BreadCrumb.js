import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb({ categories }) {
	return (
		<div role="presentation" onClick={handleClick} >
			<Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
				<Link style={{ color: "#999", textDecoration: "none" }} to='/' color="inherit" underline="hover" >BullShop</Link>
				{
					categories.map((cat) =>

					(<Link style={{ color: "#999", textDecoration: "none" }} key={cat} to={cat.to} >
						{cat.name}
					</Link>)
					)
				}

			</Breadcrumbs>
		</div>
	);
}
