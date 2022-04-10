import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FilterList from './../Filter/FilterList';
import CategoryService from '../../services/CategoryService';
import ItemService from '../../services/ItemService';

export default function ItemListContainer() {

	const categoryService = new CategoryService()
	const itemService = new ItemService()
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const { level, categoryId } = useParams()
	const [filters, setFilters] = useState([])

	const setCategoriesFilter = () => {

		let filterAux = []
		categoryService.getByParentId(categoryId).then((response) => {
			const category = {
				id: 1,
				name: "Categoría",
				values: []
			}
			response.forEach((doc) => {
				category.values.push({ ...doc.data() })
			})

			filterAux.push(category)
			setFilters(filterAux)
			loadProducts(category.values)

		}).catch((error) => {
			console.log(error)
		})

	}

	const loadProducts = (categoriesFather) => {

		let resultDocs = {}


		if (categoryId && level != '0') {
			console.log(level + " " + categoryId)
			resultDocs = itemService.getByCategoriesId([categoryId])
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
			console.log(error)

		})

	}

	useEffect(() => {
		setLoading(true)

		if (level == '0') {
			setCategoriesFilter()
		} else {
			loadProducts()
		}

	}, [level, categoryId])

	return (
		<>
			<FilterList filters={filters} />
			<ItemList items={products} loading={loading} />
		</>

	)
}
