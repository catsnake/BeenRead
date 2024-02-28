const User = require('./models/userModel');
const Article =require('./models/articleModel')

articleSave = async () => {
    try {
        const response = await axios.get('https://api.wikimedia.org/feed/v1/wikipedia/en/featured/2024/02/27');
        const article = response.data.tfa;
        const { title } = article;
        const description = article.extract;

        const duplicate = await Article.findOne({title})

        if(!duplicate) {
        await new Article({title,description,article}).save();
        return {article, title, description}
        }
      } catch (err) {
       console.error("Error in saving article: ", err); 
      }
}


module.exports = articleSave