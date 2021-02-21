var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// start job to retrieve github jobs
new CronJob('0 */12 * * *', fetchGithub, null, true, 'America/Los_Angeles').start(); 