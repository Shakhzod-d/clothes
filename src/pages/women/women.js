import { useState } from 'react';
import Card from '../../card/card';

import './style/women.css';

function Women({ listItems, setListItems, items, setItems }) {
	return (
		<main className="products">
			<div className="products-container">
				{listItems.map((listItem) => {
					const { id, title, img, price } = listItem;
					const addToCart = (item) => setItems((currentCart) => [ ...currentCart, item ]);

					// console.log(items + 'card' + 'added');

					return (
						<div key={id} className="card eachCard" style={{ width: '18rem' }}>
							<img src={img} className="card-img-top" alt={title} />
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{price}</p>
								<button
									className="btn btn-primary"
									onClick={() => {
										addToCart(listItem);
									}}
								>
									Add to Card
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}

export default Women;
