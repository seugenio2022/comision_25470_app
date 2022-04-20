import { Box } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoryContext } from "../../context/CategoryContext"
import CategoryService from "../../services/CategoryService"
import FilterService from "../../services/FilterService"
import Filter from "./Filter"

export default function FilterListContainer() {

	const [filterList, setFilterList] = useState([])
	const { category } = useContext(CategoryContext)
	const categoryService = new CategoryService()
	const filterService = new FilterService()
	const { categoryId } = useParams()
	let filterAux = []
	useEffect(() => {


		categoryService.getByParentId(categoryId).then((response) => {
			const categoryAux = {
				id: 1,
				name: "Categoría",
				values: []
			}
			response.forEach((doc) => {
				categoryAux.values.push({ ...doc.data() })
			})

			filterAux.push(categoryAux)

			setFilterList(filterAux)

		})

	}, [categoryId])

	return (
		<Box sx={{ mr: 2 }}>
			{

				filterList.map((filter, i) => {
					return <Filter key={i} name={filter.name} values={filter.values} />
				})
			}
		</Box>
	)
}
