import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from './Jobs';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const JOB_API_URL = 'api/jobs';

async function fetchJobs(updateCb, loadedCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCb(json);
  loadedCb(true);
}

function App() {

  const [jobList, updateJobs] = useState([]);
  const [jobsLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchJobs(updateJobs, setLoaded);
  }, []);

  return (
    <div className="App" style={{ marginTop: '40px' }}>
      {jobsLoaded ? <Jobs jobs={jobList} /> :
        <div id="loader">
          <Loader
            type="Puff"
            color="#CD853F"
            height={90}
            width={90}
            visible={!jobsLoaded}
          />
        </div>
      }
    </div>
  );
}

export default App;
