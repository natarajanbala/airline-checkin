import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    modalPaper: {
        position: 'absolute',
        width: '45%',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    modalTitle: {
        textTransform: 'uppercase',
        color: '#3f51b5'
    }
}));

function getModalStyle() {
    const top = 50, left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const ModalWrapper = ({ open, modalTitle, toggleModal, width, children }) => {
    if (!open) {
        return null;
    }
    const classes = useStyles();
    const modalStyles = getModalStyle();
    if (width !== undefined) {
        modalStyles.width = width;
    }

    return (
            <Modal aria-labelledby={modalTitle} open={open} onClose={() => toggleModal(false)}>
                <div style={modalStyles} className={classes.modalPaper} >
                    <h2 className={classes.modalTitle}>{modalTitle}</h2>
                    <hr style={{marginBottom: '20px'}}/>
                    { children }
                </div>
            </Modal>
    );
};

ModalWrapper.propTypes = {
   
};

export default ModalWrapper;