import ItemList from './ItemList';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';
import ItemService from '../../services/ItemService';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { Stack } from '@mui/material';
import { CategoryContext } from '../../context/CategoryContext';
import BreadCrumbContainer from '../BreadCrumb/BreadCrumbContainer';
import FilterListContainer from '../Filter/FilterListContainer';

export default function ItemListContainer() {

	const categoryService = new CategoryService()
	const itemService = new ItemService()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const { level, categoryId } = useParams()

	const loadProducts = (categoriesFather) => {

		let resultDocs = {}


		if (categoryId && level != '0') {

			resultDocs = itemService.getByCategoriesId([parseInt(categoryId)])
		} else if (level == '0' && categoriesFather?.length > 0) {

			const categoriesChildId = categoriesFather.filter((cat) =>
				cat.parentId == categoryId
			).map(cat => cat.id)

			resultDocs = itemService.getByCategoriesId(categoriesChildId)

		} else {
			resultDocs = itemService.getAll();
		}

		let itemsAux = []
		resultDocs.then((response) => {


			response.forEach((doc) => {
				const item = {
					id: doc.id,
					...doc.data()
				}


				itemsAux.push(item)
			})

			setProducts(itemsAux)
			setLoading(false)

		}).catch((error) => {
			setLoading(false)
		})

	}

	useEffect(() => {
		setLoading(true)

		categoryService.getByParentId(categoryId).then((response) => {
			const category = {
				id: 1,
				name: "Categoría",
				values: []
			}
			response.forEach((doc) => {
				category.values.push({ ...doc.data() })
			})
			loadProducts(category.values)

		})
		loadProducts()


	}, [level, categoryId])

	return (<ItemList items={products} loading={loading} />)
}
