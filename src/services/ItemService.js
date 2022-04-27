
import BaseService from './BaseService';

export default class ItemService extends BaseService {

	constructor() {
		super('Items');
	}

	getAll = () => {
		return this.get();
	}

	getByCategoriesId = (ids) => {

		return this.get("in", 'categoryId', ids);
	}

	getByCategoriesId = (ids) => {

		return this.get("in", 'categoryId', ids);
	}
}
