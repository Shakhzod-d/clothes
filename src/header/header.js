import './style/header.css';
import { Link } from 'react-router-dom';
import { CgShoppingBag } from 'react-icons/cg';
import CartContainer from '../cart/CartContainer';
import 'animate.css';

function Header() {
	// console.log(items.keys.length + 'items from header');
	return (
		<header className="headerParent animate__animated animate__bounce">
			<div className="nav-links">
				<Link to="/">Women</Link>
				<Link to="/men">Men</Link>
				<Link to="/kids">Kids</Link>
			</div>
			<div className="nav-icon">
				<CgShoppingBag />
			</div>
			<div className="nav-cart">
				<select>
					<option>$ USD</option>
					<option>€ EUR</option>
					<option>¥ JPY</option>
				</select>
				<CartContainer />
			</div>
		</header>
	);
}

export default Header;
