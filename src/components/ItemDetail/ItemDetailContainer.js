import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { db } from '../../Firebase';
import { getDoc, doc } from 'firebase/firestore';
import ItemAdded from './ItemAdded';
import { Container } from '@mui/material';

export default function ItemDetailContainer() {

	const [item, setItem] = useState([])
	const { id } = useParams()
	const { addItem } = useContext(CartContext)
	const [cantAdded, setCantAdded] = useState(0)

	const handleOnAdd = count => {
		addItem(item, count)
		setCantAdded(count)
	}

	useEffect(() => {

		const docRef = doc(db, "Items", id);
		const docSnap = getDoc(docRef)
		docSnap.then((response) => {
			if (response.exists()) {
				const item = {
					id: response.id,
					...response.data()
				}
				setItem(item)
			} else {
				console.log("No such document!")
			}
		}).catch((error) => {
			console.log(error);
		})

	}, [id])

	return (
		<Container>
			{
				cantAdded > 0
					? <ItemAdded item={item} cant={cantAdded} />
					: <ItemDetail detail={item} handleOnAdd={handleOnAdd} />
			}
		</Container>
	)
}
