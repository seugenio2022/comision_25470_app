import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';
import { CategoryContext } from '../../context/CategoryContext';

const _categoryService = new CategoryService()

export default function TabControls({ location }) {


	const [value, setValue] = useState(false);
	const [categoriesFather, setCategoriesFather] = useState([]);
	const navigate = useNavigate()
	const { setCategory } = useContext(CategoryContext)

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
		})

		if (location.pathname === '/') {
			setValue(false);
		}

	}, [location.pathname]);

	const handleClick = (cat) => {
		setCategory(cat)
		navigate(`/category/0/${cat.id}/`)
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={value} onChange={handleChange}>
				{categoriesFather.map((cat) => (
					<Tab sx={{ fontSize: "15px", fontWeight: "900" }} onClick={() => handleClick(cat)} key={cat.id} label={cat.name} />
				))}
			</Tabs>
		</Box>
	);
}

