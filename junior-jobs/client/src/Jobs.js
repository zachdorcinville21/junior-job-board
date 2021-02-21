import React, { useState, useEffect } from 'react';
import Job from './Job';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import JobModal from './JobModal';
import { JobList, Filter, Input } from './styles';
import { handleKeywordSearch, handleCitySearch } from './utilities/index';
import coffee from './images/coffee.svg';


export default function Jobs({ jobs }) {
    // modal
    const [open, setOpen] = useState(false);
    const [selectedJob, selectJob] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // job list
    const [noResults, setNoResults] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 10);
    const [numberPages, setNumPages] = useState(numPages);
    const offset = 10 * activeStep;

    const [allJobs, setAllJobs] = useState(jobs);
    const [jobsShown, setJobsShown] = useState([]);

    useEffect(() => {
        setJobsShown(allJobs.slice(offset, offset + 10));
    }, [activeStep, allJobs, offset]);

    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

    const onJobSelect = job => {
        selectJob(job);
        handleClickOpen();
    }

    const onFilter = e => {
        switch (e.target.id) {
            case "keyword":
                const jobsByKeyword = handleKeywordSearch(jobs, e.target.value);
                if (jobsByKeyword !== null) {
                    setAllJobs(jobsByKeyword);
                    setJobsShown(jobsByKeyword.slice(offset, offset + 10));
                    setNumPages(Math.ceil(jobsByKeyword.length / 10));
                } else {
                    setNoResults(true);
                }
                break;
            case "city":
                const jobsByCity = handleCitySearch(jobs, e.target.value);
                if (jobsByCity) {
                    setAllJobs(jobsByCity);
                    setJobsShown(jobsByCity.slice(offset, offset + 10));
                    setNumPages(Math.ceil(jobsByCity.length / 10));
                } else {
                    setNoResults(true);
                }
                break;
        }
    }

    return (
        <div className='jobs'>
            <JobModal open={open} job={selectedJob} handleClose={handleClose} />
            <div id="heading" style={{ padding: '15px', textAlign: "left" }}>
                <Typography variant='h4' style={{ color: 'white', fontFamily: 'Encode Sans', fontSize: '27px', marginLeft: '0.5rem' }}>
                    Junior Level Software Jobs
                </Typography>
                <Typography variant='h6' style={{ color: 'white', fontFamily: 'Encode Sans', fontSize: '16px', marginLeft: '0.5rem' }}>
                    {numJobs} jobs found.
                </Typography>
            </div>

            <JobList>
                <Filter>
                    <Input id='keyword' placeholder="filter by keyword" onChange={onFilter} />
                    <Input id='city' placeholder="filter by city" onChange={onFilter} />
                </Filter>
                {jobsShown.map((job, idx) => <Job job={job} key={idx} onSelect={onJobSelect} />)}
            </JobList>

            {noResults === true ? <Typography variant='h1'>No results.</Typography> : null}

            <div id='page-num' style={{ color: 'white', textAlign: "center", fontFamily: "Encode Sans" }}>
                Page {activeStep + 1} of {numberPages}
            </div>

            <MobileStepper
                variant="progress"
                steps={Math.ceil(numJobs / 10)}
                position="bottom"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep + 1 === numberPages}>
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
            { window.innerWidth >= 1076 ? <img src={coffee} style={{ width: "35%", height: "35%", position: "fixed", top: "50%", right: "2%" }} /> : null}
        </div>
    )
}