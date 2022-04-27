import { FilterAltSharp } from '@mui/icons-material';
import BaseService from './BaseService';

export default class FilterService extends BaseService {

	constructor() {
		super('Filters');
		this.filterValuesService = new BaseService('FilterValues');
	}

	getAllWithValues = async (onComplete) => {
		const filters = []

		const response = await this.get()
		const promisesGetValues = []

		response.forEach((doc) => {
			const filter = {
				...doc.data()
			}

			const pFilterValues = this.filterValuesService.get("==", "filterId", parseInt(filter.id))
			promisesGetValues.push(pFilterValues)
			filters.push(filter)
		})

		Promise.all(promisesGetValues).then((responseValues) => {

			responseValues.forEach((response, i) => {

				const values = []
				response.forEach((doc) => {
					const value = {
						...doc.data()
					}
					values.push(value)
				})
				filters[i].values = values
			})
			onComplete(filters)
		})

	}

}
