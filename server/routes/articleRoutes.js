const express = require('express');
const openAiController = require('../controllers/openAiController');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.post(
  '/saveArticle',
  openAiController.getArticle,
  articleController.saveArticle,
  (req, res) => {
    res.status(201).json(res.locals.savedArticle);
  },
);

router.get(
  '/generateArticleHistory/:id',
  articleController.generateArticleHistory,
  (req, res) => {
    res.status(200).json(res.locals.generateArticleHistory);
  },
);

router.put('/checkIsRead', articleController.checkIsRead, (req, res) => {
  res.status(200).json(res.locals.findArticle);
});

module.exports = router;
