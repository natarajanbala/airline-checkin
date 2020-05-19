import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Box, Grid, Paper, Button, Menu, MenuItem, TextField, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckInModal from './CheckInModal';
import CustomTableContainer from './Table/CustomTableContainer';
import ModalWrapper from './Modal/ModalWrapper';
import { checkIn } from '../redux/actions/passengerGridActions';
import PassengerInfo from './PassengerInfo';
import FlightHeader from './FlightHeader';
import FlightDetail from './FlightDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.primary
  },
  seatMap: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  seatColor: {
    display: 'inline-block',
    border: '0px solid black',
    height: 20, width: 20, margin: 5
  },
  chip: {
    flexGrow: 1,
    backgroundColor: '#CACFD2',
    borderRadius: 3,
    margin: 5
  },
  flightCardPaper: {
    padding: theme.spacing(3),
    width: '100%',
    color: theme.palette.text.primary,
    display: 'inline-flex',
    justifyContent: 'flex-start'
  }
}));

const mapStateToProps = ({ searchFlights }) => {
  return {
    selectedFlight: searchFlights.selectedFlight,
    gridSelection: searchFlights.gridSelection
  }
}

const mapDispatchToProps = {
  checkIn
}

const CheckInHome = (props) => {
  console.log('cih props - ', props);
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [seatChangeModalOpen, setSeatChangeModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState();
  const [targetAction, setTargetAction] = useState(null);
  const [passengerAlloted, setPassengerAlloted] = useState(undefined);
  let seatChangeTitle = 'Passenger Seat Change';

  const handleCheckIn = (seat) => {
    let seatOccupied = props.selectedFlight.passengers.filter(p => p.seatNo === seat.label);
    if (seatOccupied && seatOccupied.length > 0) {
      setPassengerAlloted(seatOccupied[0]);
    } else {
      setPassengerAlloted(undefined);
    }
    setSelectedSeat(seat.label);
    toggleModal(true);
  }

  const toggleModal = (flag) => {
    setModalOpen(flag);
  }

  const onAction = (event) => {
    const t = event.currentTarget;
    setTargetAction(t);
  }

  const closeMenu = () => {
    setTargetAction(null);
  }

  const passengerAction = (action) => {
    if (action === 'CHANGE_SEAT') {
      setSeatChangeModalOpen(true);
    }
  }

  const toggleSeatModal = (flag) => {
    setSeatChangeModalOpen(flag);
    closeMenu();
  }

  const cols = [
    { id: 'passengerName', label: 'Passenger Name' },
    { id: 'ancillaryServices', label: 'Ancillary Services' },
    { id: 'seatNo', label: 'Seat Number' }
  ];

  if (props.gridSelection && props.gridSelection.length === 1) {
    seatChangeTitle += ' - ' + props.gridSelection[0].passengerName;
  }

  let seatOptions = [];
  const getSeatOptions = () => {
    let unflattenArray = [];
    Object.entries(props.selectedFlight.seats).map(([k, v]) => unflattenArray.push(v));
    seatOptions = [].concat(...unflattenArray);
  }

  const handleSeatChange = () => {
    console.log('handle seat change');
  }
  getSeatOptions();
  return (
    <>
      <div className={classes.root}>
        <Grid item xs={12} container className={classes.flightCardPaper} direction="row">
          <Grid item xs>
            <FlightHeader flight={props.selectedFlight} lite={true} />
          </Grid>
          {/* <Grid item className={classes.srcDest}>
            <FlightDetail flight={props.selectedFlight} lite={true} />
          </Grid> */}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Grid item className={classes.seatMap}>
                {
                  ['#CACFD2', '#85C1E9', '#F1948A', '#BB8FCE'].map(d =>
                    <span key={d} className={classes.seatColor} style={{ backgroundColor: d }}></span>
                  )
                }
              </Grid>
              {
                Object.entries(props.selectedFlight.seats).map(d =>
                  <div key={d}>
                    {
                      d[1].map(s =>
                        <Chip
                          onClick={() => handleCheckIn(s)}
                          key={s.label}
                          className={classes.chip}
                          label={s.label} />
                      )
                    }
                    <br />
                  </div>
                )
              }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={1}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => onAction(event)}
                variant="contained"
                color="primary"
              >
                Actions {(targetAction !== undefined && Boolean(targetAction)) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </Button>
              <Menu
                anchorEl={targetAction}
                keepMounted
                open={Boolean(targetAction)}
                onClose={closeMenu}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuItem onClick={() => passengerAction('CHANGE_SEAT')}>Change Seat</MenuItem>
              </Menu>
            </Box>
            <ModalWrapper
              open={seatChangeModalOpen}
              modalTitle={seatChangeTitle}
              width='70%'
              toggleModal={toggleSeatModal}>
              <Grid container spacing={2}>
                {
                  (props.gridSelection && props.gridSelection.length === 1)
                    ?
                    <>
                      <PassengerInfo passenger={props.gridSelection[0]} />
                      <Grid item xs={9}>
                        <Autocomplete
                          options={seatOptions}
                          onChange={handleSeatChange}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="Select seats" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={9}>
                        <Box component="span" mr={2}>
                          <Button onClick={() => toggleSeatModal(false)} variant="contained" color="primary">Save</Button>
                        </Box>
                        <Box component="span">
                          <Button onClick={() => toggleSeatModal(false)} variant="outlined">Close</Button>
                        </Box>
                      </Grid>
                    </>
                    :
                    <>
                      <h2>Only one passenger is allowed to change seat at a time.</h2>
                      <Grid item xs={9}>
                        <Box component="span">
                          <Button onClick={() => toggleSeatModal(false)} variant="outlined">Close</Button>
                        </Box>
                      </Grid>
                    </>
                }
              </Grid>
            </ModalWrapper>
            <Box>
              <CustomTableContainer
                columns={cols}
                rows={props.selectedFlight && props.selectedFlight.passengers}
                defaultSort='asc'
                defaultSortCol='passengerName'
              />
            </Box>
          </Grid>
        </Grid>
      </div>

      <CheckInModal
        {...props}
        open={modalOpen}
        seat={selectedSeat}
        passengerAlloted={passengerAlloted}
        toggleModal={toggleModal}
        checkIn={checkIn}
      />

    </>
  );
};

CheckInHome.propTypes = {
  selectedFlight: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckInHome);