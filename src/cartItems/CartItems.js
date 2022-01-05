import React from 'react';
import { useGlobalContext } from '../context';
import '../cartItems/CartItems.css';

const CartItem = ({ id, img, title, price, amount }) => {
	const { removeItem, increase, decrease } = useGlobalContext();
	const totalPrice = `$${(+price.slice(1) * amount).toFixed(2)}`;

	return (
		<article key={id} className="parent">
			<div className="child">
				<p>{title}</p>
				<span className="item-price">{totalPrice}</span>
				{/* remove button */}
				<button className="remove-btn" onClick={() => removeItem(id)}>
					remove
				</button>
			</div>
			<div className="child plusMinusBtns">
				{/* increase amount */}
				<button className="amount-btn" onClick={() => increase(id)}>
					+
				</button>
				{/* amount */}
				<p className="amount">{amount}</p>
				{/* decrease amount */}
				<button className="amount-btn" onClick={() => decrease(id)}>
					-
				</button>
			</div>
			<div className="child">
				<img src={img} alt={title} className="cardImage" />
			</div>
		</article>
	);
};

export default CartItem;
