import BaseService from './BaseService';

export default class FilterService extends BaseService {

	constructor() {
		super('Filters');
		this.filterValuesService = new BaseService('FilterValues');
	}

	getAllWithValues = (onComplete) => {
		const filters = []
		this.get().then(response => {

			response.forEach((doc) => {
				const filter = {
					...doc.data()
				}
				this.filterValuesService.get("==", "filterId", filter.filterId).then(response => {
					const values = []
					response.forEach((doc) => {

						const value = {
							...doc.data()
						}
						values.push(value)
					})
					filter.values = values
				})
				filters.push(filter)

			})
			onComplete(filters)
		})
	}

}
