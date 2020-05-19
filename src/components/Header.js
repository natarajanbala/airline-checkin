import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	title: {
		display: 'block'
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						Airline check-in services
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Header;
