import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

import './App.css';

const styles = makeStyles({
    text: {
        fontFamily: 'Encode Sans',
    }
});

export default function Job({ job, onSelect }) {
    const titleTooLong = job.title.length > 60;
    const classes = styles();
    return (
        <Paper className='job' onClick={() => onSelect(job)}>
            <div className='job-content'>
                <Typography className={classes.text} variant='h5'>{titleTooLong ? `${job.title.slice(0, 60)}....` : job.title}</Typography>
                <Typography className={classes.text} variant='h6'>{job.company}</Typography>
                <Typography className={classes.text}>{job.location}</Typography>
            </div>

            <div>
                <Typography className={classes.text}>Posted on {job.created_at.split(' ').slice(0, 3).join(' ')}</Typography>
            </div>
        </Paper>
    );
}