import { useContext } from "react"
import Modal from "./UI/Modal"
import { currencyFormatter } from '../util/formatting'

export default function Cart() {
	useContext(CartContext)
	const cartCtx = useContext(CartContext)

	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price, 0
	)

	return <Modal className="cart">
		<h2>Your Cart</h2>
		<ul>
			{cartCtx.items.map((item) => (
				<li key={item.id}>
					{item.name} - {item.quantity}
				</li>
			))}
		</ul>
		<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
		<p className="modal-actions">
			<button textOnly>Close</button>
			<button>Go to Checkout</button>
		</p>
	</Modal>
}