import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FilterList from './../Filter/FilterList';
import { db } from '../../Firebase';
import { query, where, collection, getDocs } from 'firebase/firestore';


export default function ItemListContainer(props) {

	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const { categoryName } = useParams()

	useEffect(() => {
		setLoading(true)

		const itemsCollection = collection(db, 'Items')
		let resultDocs = {}

		if (categoryName) {

			const q = query(itemsCollection, where("category", "==", categoryName));
			resultDocs = getDocs(q);

		} else {
			resultDocs = getDocs(itemsCollection);
		}
		let itemsAux = []
		resultDocs.then((response) => {
			response.forEach((doc) => {
				const item = {
					id: doc.id,
					...doc.data()
				}
				console.log(item)
				itemsAux.push(item)
			})

			setProducts(itemsAux)
			setLoading(false)

		}).catch((error) => {

			setLoading(false)
			console.log(error)

		})

	}, [categoryName])

	return (
		<>
			<FilterList />
			<ItemList items={products} loading={loading} />
		</>

	)
}
