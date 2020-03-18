import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightSearch from './FlightSearch';
import { Switch, Route } from 'react-router-dom';
import CheckInHome from './CheckInHome';

const App = () => {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/">
					<FlightSearch />
				</Route>
        <Route path="/checkin">
          <CheckInHome />
        </Route>
			</Switch>
			<Footer />
		</div>
	);
};
export default App;
