import React, { useState } from 'react';
import CartItem from '../cartItems/CartItems';
import { BsCart } from 'react-icons/bs';
import { useGlobalContext } from '../context';

import './CartContainer.css';

const CartContainer = () => {
	const { cart, total, clearCart, amount } = useGlobalContext();
	const [ isActive, setActive ] = useState(false);
	// console.log(items);

	return (
		<section className="cart">
			{/* cart header */}
			<header onClick={() => setActive(!isActive)}>
				<span>
					<BsCart size={25} />
				</span>
			</header>
			{/* cart items */}
			<div className={isActive ? 'active' : 'inactive'}>
				<p className="myInlineSpan">
					<b>My Bag,</b>&nbsp; {`${amount} items`}
				</p>
				<div className="eachItem">
					{cart.map((item) => {
						return <CartItem key={item.id} {...item} />;
					})}

					{/* cart footer */}
					<footer className="myFlexParent">
						<div className="myFlexChild">
							<button type="button" className="btn danger-btn" onClick={clearCart}>
								clear cart
							</button>
							<button type="button" className="btn btn-light">
								View bag
							</button>
						</div>
					</footer>
				</div>
			</div>
		</section>
	);
};

export default CartContainer;
