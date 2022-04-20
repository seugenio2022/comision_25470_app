import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import CategoryService from "../../services/CategoryService";
import BreadCrumb from "./BreadCrumb";

export default function BreadCrumbContainer() {

	const { category } = useContext(CategoryContext)
	const categoryService = new CategoryService()
	const [categories, setCategories] = useState([])

	useEffect(() => {

		if (category.parentId) {
			categoryService.getById(category.parentId).then((response) => {

				const cat = {
					...response.docs[0].data()
				}

				setCategories([
					{ "name": cat.name, "to": "#" },
					{ "name": category.name, "to": "#" }]
				)
			})
		} else {
			setCategories([{ "name": category.name, "to": "#" }])
		}
	}, [category])
	return (
		<BreadCrumb categories={categories} />
	)
}
