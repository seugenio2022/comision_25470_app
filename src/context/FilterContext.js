import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {

	const [filters, setFilters] = useState([])
	const [filtersSelected, setFiltersSelected] = useState([])

	return (
		<FilterContext.Provider value={{
			filtersSelected,
			setFiltersSelected
		}}>
			{children}
		</FilterContext.Provider>
	)
}