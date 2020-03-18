import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
import PropTypes from 'prop-types';

import { loadFlights, selectFlight } from '../redux/actions/searchFlightActions';
import FlightServices from './FlightServices';

const FlightSearch = ({ flights, loadFlights, selectedFlight, selectFlight}) => {
    const [ selectOptions, setSelectOptions ] = useState({});

    useEffect(() => {
        if(!flights || flights.length === 0) {
            loadFlights();
        } else {
            setSelectOptions(
                flights.map(flight => {
                    return {
                        label: flight.flightName,
                        value: flight.flightNo
                    };
                })
            );
        }
    }, [flights]);   

    return (
        <>
            <Select 
                options={selectOptions}
                onChange={selectFlight}
            />
            {
                selectedFlight && <FlightServices flight={selectedFlight} />
            }
        </>
    );
};

FlightSearch.propTypes = {
    flights: PropTypes.array,
    loadFlights: PropTypes.func.isRequired,
    selectedFlight: PropTypes.object,
    selectFlight: PropTypes.func
};

const mapStateToProps = ({ searchFlights }) => {
    console.log('FS mstp state - ', searchFlights);
    return {
        flights: searchFlights.flights,
        selectedFlight: searchFlights.selectedFlight
    }
}

const mapDispatchToProps = {
    loadFlights,
    selectFlight
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearch);