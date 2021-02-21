var fetch = require('node-fetch');
var redis = require('redis');
var client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub() {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    // fetch all pages
    while (resultCount > 0) {
        const response = await fetch(`${baseUrl}?page=${onPage}`);
        const jobs = await response.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('retrieved ' + jobs.length + ' jobs on page ' + onPage + '.');
        onPage++;
    }

    console.log('got ' + allJobs.length + ' jobs total.');

    // filter results
    const juniorJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        if (jobTitle.includes('senior') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('architect') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('lead')) {
            return false;
        }

        return true;
    });

    console.log('filtered down to', juniorJobs.length + '.');

    // set values in redis
    const success = await setAsync('github', JSON.stringify(juniorJobs));

    console.log({ success });

}

fetchGithub();

module.exports = fetchGithub;