
import BaseService from './BaseService';

export default class CategoryService extends BaseService {

	constructor() {

		super('Categories');
	}

	getAll = () => {
		return this.get();
	}

	getById = (id) => {
		return this.get("==", 'id', parseInt(id));
	}

	getByParentId = (id) => {
		return this.get("==", 'parentId', parseInt(id))
	}

	getCategoriesFather = () => {
		return this.get('==', 'level', 0)
	}
}
