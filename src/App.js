import React, { useState } from 'react';
import Header from './header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Women from '../src/pages/women/women';
import Men from '../src/pages/men/men';
import Kids from '../src/pages/kids/kids';
import Items from './data/data';

function App() {
	const [ listItems, setListItems ] = useState(Items);

	return (
		<React.Fragment>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Women listItems={listItems} />} />
					<Route path="/men" element={<Men />} />
					<Route path="/kids" element={<Kids />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
