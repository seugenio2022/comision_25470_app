import { Link } from 'react-router-dom';
import { BullButton } from '../../styles/components/BullButton';

export default function ItemButton({ id, size }) {
	return (
		<BullButton color='secondary' size={size} to={"/Item/" + id} LinkComponent={Link} variant="contained">
			Ver detalle del producto
		</BullButton>
	)
}
