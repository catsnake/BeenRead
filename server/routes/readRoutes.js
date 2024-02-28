const express = require('express');
const readController = require('../controllers/readController');

const router = express.Router();

router.get(
  '/readDailyArticle/:username',
  readController.readDailyArticle,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.get(
  '/updateTimeFinished/:username',
  readController.updateTimeFinished,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.post('/updateTimeSpent', readController.updateTimeSpent, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get(
  '/updateDailyStreak/:username',
  readController.updateDailyStreak,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.get('/dailyReset', readController.dailyReset, (req, res) => {
  res.status(200).json(res.locals.users);
});

module.exports = router;
