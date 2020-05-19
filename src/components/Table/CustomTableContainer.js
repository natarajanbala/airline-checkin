import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Paper, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableHeadSelection from './TableHeadSelection';
import { gridSelection } from '../../redux/actions/passengerGridActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faWheelchair } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    descriptionCell: {
      whiteSpace: "nowrap",
      maxWidth: "200px",
      width: "100px",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }));

const mapStateToProps = (props) => {
  console.log('mstp ctc - ', props);
  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {
    gridSelection: (items) => {
      dispatch(gridSelection(items));
    }
  }
}

const CustomTableContainer = props => {
    const classes = useStyles();
    const [order, setOrder] = React.useState(props.defaultSort || 'asc');
    const [orderBy, setOrderBy] = React.useState(props.defaultSortCol || undefined);
    const [selected, setSelected] = React.useState([]);

    // const handleSelectAllClick = (event) => {
    //     if (event.target.checked) {
    //       const newSelecteds = props.rows.map((n) => n.id);
    //       setSelected(newSelecteds);
    //       return;
    //     }
    //     setSelected([]);
    // };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
        props.gridSelection(newSelected);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const tooltipText = (object) => {
      return object.join(', ');
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table">
                <TableHeadSelection
                    headCells={props.columns}
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    // onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={props.rows.length}
                    />
                <TableBody>
                {stableSort(props.rows, getComparator(order, orderBy))
                    .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                        <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={labelId}
                        selected={isItemSelected}
                        >
                            <TableCell padding="checkbox">
                            <Checkbox
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                            { row.isPhysChallenged 
                              ? 
                              <FontAwesomeIcon icon={faWheelchair} style={{ color: '#f50057' }} />
                              : row.isCarryingInfant 
                                ? <FontAwesomeIcon icon={faBabyCarriage} style={{ color: '#f50057' }} />
                                : ''
                            } { ` `}
                            {row.passengerName}
                            </TableCell>
                            <TableCell scope="row">
                            <Tooltip disableFocusListener title={tooltipText(row.ancillaryServices)}>    
                            <div className={classes.descriptionCell}>        
                            {
                              tooltipText(row.ancillaryServices)
                             
                            } </div></Tooltip></TableCell>
                            <TableCell>{row.seatNo}</TableCell>
                        </TableRow>
                    );
                })
                }
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

CustomTableContainer.propTypes = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTableContainer);