const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./config/db")
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const aiController = require('./controllers/openAiController')
const articleRouter = require('./routes/articleRoutes')

const PORT = 3000;

//use dotenv
dotenv.config();
console.log(process.env.MONGO_URL);
app.use(express.json());

//allows the server to interact with website
app.use(cors());

//connect database
connectDB();

app.use(express.static(path.join(__dirname, '../index.html')));

//use API routers

app.use('/api/user', userRouter);
//CHAT GPT - add to controller file to modularize
app.get('/api/openai', aiController.getArticle, (req, res) => {
  res.status(200).send(res.locals.getArticle);
});
app.use('/api/article', articleRouter)


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//error handlers for unknown page
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//global error handlers
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
