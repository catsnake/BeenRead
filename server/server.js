const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./config/db")
const dotenv = require('dotenv')
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

dotenv.config()
const PORT = 3000;
app.use(express.json());
connectDB()

app.use(express.static(path.join(__dirname, 'public', 'index.html')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//CHAT GPT
//add to controller file to modularize
app.post('/api/chat', async (req, res) => {
  const { message } = req.body
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo-0125",
        prompt: message,
        max_tokens:200
      });
  
   res.json({ response: completion.data.choices[0].text }






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
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;