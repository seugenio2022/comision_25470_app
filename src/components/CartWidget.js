import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export default function CartWidget() {
	return (
		<Link to="/cart/"><ShoppingCartIcon /></Link>
	)
}
