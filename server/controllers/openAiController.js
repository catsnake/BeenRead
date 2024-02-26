const aiController = {};

aiController.getArticle = async (req, res, next) => {
  try {
    // console.log('entered try block');
    let openaiKey = process.env.OPEN_API_KEY;
    console.log('api key', process.env.OPEN_API_KEY);
    const rawData = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + openaiKey,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0125',
        messages: [
          { role: 'user', content: 'Give me a random 10 sentenced article' },
        ],
        temperature: 0.7,
      }),
    });
    // console.log('rawdata', rawData);
    const content = await rawData.json();
    // console.log('content', content);
    res.locals.getArticle = content.choices[0].message.content;
    return next();
  } catch (err) {
    return next({
      log: 'Error in openAiController',
      message: { error: 'cannot create article' },
    });
  }
};

module.exports = aiController;
