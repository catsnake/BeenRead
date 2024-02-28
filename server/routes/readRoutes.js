const express = require('express');
const readController = require('../controllers/readController');

const router = express.Router();

router.get('/readDailyUser', socialController.readDailyUser, (req, res) => {
    res.status(200).json(res.locals.user);
  });

router.get('/updateTimeFinished', socialController.updateTimeFinished, (req, res) => {
    res.status(200).json(res.locals.user);
});

router.post('/updateTimeSpent', socialController.updateTimeSpent, (req, res) => {
    res.status(200).json(res.locals.user);
});

router.get('/updateDailyStreak', socialController.updateDailyStreak, (req, res) => {
    res.status(200).json(res.locals.user);
});

router.get('/updateDailyReset', socialController.updateDailyReset, (req, res) => {
    res.status(200).json(res.locals.users);
});

module.exports = router;
