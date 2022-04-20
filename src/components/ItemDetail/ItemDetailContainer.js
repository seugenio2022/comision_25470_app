import { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemAdded from './ItemAdded';
import { Container } from '@mui/material';
import ItemService from '../../services/ItemService';


export default function ItemDetailContainer() {

	const itemService = new ItemService()
	const [item, setItem] = useState([])
	const { id } = useParams()
	const { addItem } = useContext(CartContext)
	const [cantAdded, setCantAdded] = useState(0)

	const handleOnAdd = count => {
		addItem(item, count)
		setCantAdded(count)
	}

	useEffect(() => {

		itemService.getById(id).then((response) => {
			if (response.exists()) {
				const item = {
					id: response.id,
					...response.data()
				}
				setItem(item)
			}
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
