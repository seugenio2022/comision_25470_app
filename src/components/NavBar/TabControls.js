import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';

const _categoryService = new CategoryService()

export default function TabControls({ location }) {


	const [value, setValue] = useState(false);
	const [categoriesFather, setCategoriesFather] = useState([]);
	const navigate = useNavigate()

	useEffect(() => {

		let catAux = []

		_categoryService.getCategoriesFather().then((response) => {

			response.forEach((doc) => {

				const category = {
					...doc.data()
				}
				catAux.push(category)
			})
			setCategoriesFather(catAux)
		}).catch((error) => {
			console.log(error)
		})

		if (location.pathname === '/') {
			setValue(false);
		}

	}, [location.pathname]);

	const handleClick = (catId) => {
		navigate(`/category/0/${catId}/`)
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={value} onChange={handleChange}>
				{categoriesFather.map((cat) => (
					<Tab onClick={() => handleClick(cat.id)} key={cat.id} label={cat.name} />
				))}
			</Tabs>
		</Box>
	);
}

