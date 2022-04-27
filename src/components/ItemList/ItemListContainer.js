import ItemList from './ItemList';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';
import ItemService from '../../services/ItemService';
import { ItemsContext } from '../../context/ItemsContext';
import Constants from '../../utils/Constants';
import { FilterContext } from '../../context/FilterContext';

export default function ItemListContainer() {

	const categoryService = new CategoryService()
	const itemService = new ItemService()
	const [loading, setLoading] = useState(true)
	const { level, categoryId } = useParams()
	const { items, setItemsWithFilters } = useContext(ItemsContext)

	const loadProducts = (categoriesFather) => {

		let resultDocs = {}
		let clearFilters = false

		if (categoryId && level != Constants.CATEOGRY_LEVEL_0) {

			resultDocs = itemService.getByCategoriesId([parseInt(categoryId)])
		} else if (level == Constants.CATEOGRY_LEVEL_0 && categoriesFather?.length > 0) {
			clearFilters = true
			const categoriesChildId = categoriesFather.filter((cat) =>
				cat.parentId == categoryId
			).map(cat => cat.id)

			resultDocs = itemService.getByCategoriesId(categoriesChildId)

		} else {

			clearFilters = true
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

			setItemsWithFilters(itemsAux, clearFilters)
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

	return (<ItemList items={items} loading={loading} />)
}
