import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FlightSearch from './FlightSearch';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CheckInHome from './CheckInHome';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth="md">
					<Header />
					<div style={{backgroundColor: '#00000014'}}>
					<Switch>
						<Route exact path="/">
							<FlightSearch />
						</Route>
						<Route path="/checkin">
							<CheckInHome />
						</Route>
					</Switch>
					</div>
					<Footer />
				</Container>
			</ThemeProvider>
		</>
		
		
	);
};
export default App;
