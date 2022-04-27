import { createContext, useContext, useState } from "react";
import { FilterContext } from "./FilterContext";

export const ItemsContext = createContext()

export const ItemsContextProvider = ({ children }) => {

	const [items, setItems] = useState([])
	const { filtersSelected, setFiltersSelected } = useContext(FilterContext)

	const applyFilter = (filterName, value, newItems) => {
		let predicate = null
		if (filterName == "gender") {
			predicate = item => item.gender == value
		}
		if (filterName == "brand") {
			predicate = item => item.brand == value
		}
		return newItems.filter(predicate)
	}
	const filterListing = (filterName, value) => {

		let newItems = applyFilter(filterName, value, items)
		setItems(newItems)
	}

	const setItemsWithFilters = (newItems, clearFilters = false) => {
		debugger
		let itemsFiltered = newItems
		if (clearFilters) {
			setFiltersSelected([])
		} else if (filtersSelected.length > 0) {
			filtersSelected.forEach(filter => {
				itemsFiltered = applyFilter(filter.name, filter.value, newItems)
			})
		}
		setItems(itemsFiltered)
	}


	return (
		<ItemsContext.Provider value={{
			items,
			setItemsWithFilters,
			filterListing
		}}>
			{children}
		</ItemsContext.Provider>
	)
}