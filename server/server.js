const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./config/db")
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')


dotenv.config()
const PORT = 3000;
app.use(express.json());
//aloows the server to interact with website
app.use(cors())

//connect 
connectDB()

app.use(express.static(path.join(__dirname, 'public', 'index.html')));


//api routes
app.use('/api/user', userRouter)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error handlers
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

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