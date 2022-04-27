import { Box, Skeleton } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoryContext } from "../../context/CategoryContext"
import CategoryService from "../../services/CategoryService"
import FilterService from "../../services/FilterService"
import Filter from "./Filter"
import FilterList from "./FilterList"
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext"
import FiltersSelected from "./FiltersSelected"
import Constants from "../../utils/Constants"
import { FilterContext } from "../../context/FilterContext"


export default function FilterListContainer() {

	const [filterList, setFilterList] = useState([])
	const [categoryFilter, setCategoryFilter] = useState({})
	const { setCategory } = useContext(CategoryContext)
	const { filterListing } = useContext(ItemsContext)
	const { setFiltersSelected, filtersSelected } = useContext(FilterContext)
	const categoryService = new CategoryService()
	const filterService = new FilterService()
	const { categoryId, level } = useParams()
	const [loading, setLoading] = useState(true)
	const [loadingCategoryFilter, setLoadingCategoryFilter] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {

		categoryService.getByParentId(categoryId).then((response) => {
			const categoryAux = {
				id: 1,
				displayName: "Categoría",
				values: []
			}
			response.forEach((doc) => {
				categoryAux.values.push({ ...doc.data() })
			})

			if (level == Constants.CATEOGRY_LEVEL_0) {
				setCategoryFilter(categoryAux)
			}

			setLoadingCategoryFilter(false)
		}).catch((error) => {
			console.log(error)
		})

		filterService.getAllWithValues((filters) => {
			setFilterList(filters)
			setLoading(false)
		})
	}, [categoryId])

	useEffect(() => {


	}, [])

	const handleClickCategory = (name, category) => {
		setCategory(category)
		navigate(`/category/${category.name}/${category.id}/`)
		setCategoryFilter({})
	};
	const handleClickFilter = (filterName, filterValue) => {
		filterListing(filterName, filterValue.name)

		let filtersSelectedAux = filtersSelected.slice()
		filtersSelectedAux.push({ "name": filterName, "value": filterValue.name })
		setFiltersSelected(filtersSelectedAux)

		setFilterList(filterList.filter((filter) => filter.name != filterName))
	};
	const handleDelete = () => {

	}

	return (
		<Box sx={{ mr: 2 }}>
			<FiltersSelected filters={filtersSelected} handleDelete={handleDelete} />
			{loadingCategoryFilter ? <Skeleton width={300} height={350} />
				: <Filter handleClick={handleClickCategory} filter={categoryFilter} />}
			<FilterList handleClick={handleClickFilter} loading={loading} filterList={filterList} />
		</Box>
	)
}
