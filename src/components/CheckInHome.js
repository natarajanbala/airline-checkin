import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDataGrid from "react-data-grid";

const CheckInHome = ({ selectedFlight }) => {
    console.log('selectedFlight -- ', selectedFlight);
    console.log('passList -- ', selectedFlight && selectedFlight.passengers)
    const [passList, setPassList] = useState(selectedFlight && selectedFlight.passengers);
    const defaultColumnProperties = {
        sortable: true,
        editable: true,
        width: 150
    };
    const columns = [
        {
            key: 'passengerName',
            name: 'Passenger Name'
        },
        {
            key: 'ancillaryServices',
            name: 'Ancillary Services'
        },
        {
            key: 'seatNo',
            name: 'Seat Number'
        }
        
    ].map(c => ({
        ...c,
        ...defaultColumnProperties
    })
    );

    const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const rows = passList.slice();
        console.log('rows -- ', fromRow, toRow, updated);
        for (let i = fromRow; i <= toRow; i++) {

            rows[i] = { ...rows[i], ...updated };
        }
        console.log('rows -- ', rows);
        setPassList(rows);
    };
    return (
        
        
        <>
            <h5>{selectedFlight.flightName}</h5>
            {
                selectedFlight.seats && 
                <div className="seats-container">
                    {
                        Object.entries(selectedFlight.seats).map(d => {
                            return (
                                <div key={d}>
                                    <br/>
                                    {
                                        d[1].map(s => {
                                            return (
                                                <div key={s.label} className="seat-wrapper">
                                                    <span className="seat-label">
                                                        {s.label}
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            }
            <div>
                <ReactDataGrid
                    columns={columns}
                    rowGetter={i=>passList[i]}
                    rowsCount={passList.length}
                    onGridRowsUpdated={onGridRowsUpdated}
                    enableCellSelect={true}
                />
            </div>
        </>
    );
};

CheckInHome.propTypes = {
    selectedFlight: PropTypes.object
};

const mapStateToProps = ({ searchFlights }) => {
    return {
        selectedFlight: searchFlights.selectedFlight
    }
}

export default connect(mapStateToProps, null)(CheckInHome);