const schedule = require('node-schedule');
const dailyReset = require('./dailyReset');
const articleSave = require('./articleSave'); 
const { reset } = require('nodemon');

let lastRunDate = null;

const resetJob = () => {
    const currentDate = new Date();

    if (!lastRunDate || !isSameDay(currentDate, lastRunDate)) {
        dailyReset();
        articleSave();
        lastRunDate = currentDate;
    }
};

// Function to check if two dates are the same day
const isSameDay = (date1, date2) => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

// Function to reset the job
const scheduleResetJob = () => {
    resetJob();
    const job = schedule.scheduleJob('0 0 * * *', resetJob);
    return job;
};

module.exports = scheduleResetJob;

