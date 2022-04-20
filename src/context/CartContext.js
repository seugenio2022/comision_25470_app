import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

	const [cart, setCart] = useState([])

	const addItem = (item, count) => {

		let newCartItem = { item, count }
		let cartCopy = cart.slice(0)
		if (isInCart(item)) {
			setCart(cartCopy.map((cart, i) => {
				if (cart.item.id == newCartItem.item.id) {
					cart.count = cart.count + newCartItem.count;
				}
				return cart
			}))
		} else {
			cartCopy.push(newCartItem)
			setCart(cartCopy)
		}

	}

	const removeItem = (itemToRemove) => {
		if (isInCart(itemToRemove)) {
			let cartCopy = cart.filter(cartItem => cartItem.item.id !== itemToRemove.id)
			setCart(cartCopy)
		}
	}
	const clear = () => {
		setCart([])
	}
	const isInCart = (item) => {
		return cart.find(cart => cart.item.id == item.id)
	}

	const getTotalCount = () => {
		let total = 0;
		cart.forEach(cartItem => {

			total = total + cartItem.count
		})
		return total
	}

	const getTotalPrice = () => {
		let total = 0;
		cart.forEach(cartItem => {
			total = total + cartItem.item.price * cartItem.count
		})
		return total
	}

	return (
		<CartContext.Provider value={{
			addItem,
			removeItem,
			clear,
			cart,
			getTotalCount,
			getTotalPrice
		}}>
			{children}
		</CartContext.Provider>
	)
}