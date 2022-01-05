import React, { useState, useContext, useReducer, useEffect } from 'react';
// import cartItems from './boughtItems';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const initialState = {
		loading: false,
		cart: [],
		totalProducts: 0
	};
	const [ state, setState ] = useState(initialState);

	const handleAddToCart = (clickedItem) => {
		setState((prev) => {
			return {
				...prev,
				totalProducts: prev.totalProducts + 1,
				cart: [ ...prev.cart, clickedItem ]
			};
		});
	};
	// console.log(children);
	const clearCart = () => {
		setState((oldState) => ({ ...oldState, cart: [], totalProducts: 0 }));
	};
	const removeItem = (id) => {
		const idx = state.cart.findIndex((item) => item.id === id);

		setState((oldState) => {
			return {
				...oldState,
				cart: [ ...state.cart.slice(0, idx), ...state.cart.slice(idx + 1) ]
			};
		});
	};
	const increase = (id) => {
		let dpCloneCart = JSON.parse(JSON.stringify(state.cart));
		let idx = dpCloneCart.findIndex((item) => item.id === id);
		dpCloneCart[idx].amount += 1;

		setState((oldState) => {
			return {
				...oldState,
				cart: dpCloneCart
			};
		});
	};
	const decrease = (id) => {
		let dpCloneCart = JSON.parse(JSON.stringify(state.cart));
		let idx = dpCloneCart.findIndex((item) => item.id === id);
		dpCloneCart[idx].amount -= 1;

		setState((oldState) => {
			return {
				...oldState,
				cart: dpCloneCart
			};
		});
	};

	useEffect(
		() => {
			// dispatch({ type: 'GET_TOTALS' });
		}
		// [ state.cart, cartItems ]
	);
	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				increase,
				decrease,
				handleAddToCart
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
