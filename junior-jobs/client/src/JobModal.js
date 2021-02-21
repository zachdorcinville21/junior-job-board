import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const styles = makeStyles({
    modalButton: {
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Encode Sans',
    }
})

export default function JobModal({ job, open, handleClose }) {

    if (!job.title) {
        return (
            <div />
        );
    }

    const classes = styles();

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                keepMounted
            >
                <DialogTitle id="alert-dialog-slide-title"><span style={{fontSize: '18px', fontFamily: 'Encode Sans'}}>{job.title} - {job.company}</span> <img id='company-logo' src={job.company_logo} /></DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize: '14px', fontFamily: 'Encode Sans'}} id="alert-dialog-slide-description" dangerouslySetInnerHTML={{ __html: job.description }} />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.modalButton} onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <a id='apply-btn' href={job.url} target='_blank'>
                        <Button className={classes.modalButton} variant='contained' color="primary">
                            Apply
                        </Button>
                    </a>
                </DialogActions>
            </Dialog>
        </div>
    );
}