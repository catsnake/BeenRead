import React, { useEffect, useState } from 'react'

function ArticleDisplay() {
  const [isArticleOpen, setIsArticleOpened] = useState(false);
  const [articleOfTheDay, setArticleOfTheDay] = useState({});
  const [articleTitle, setArticleTitle] = useState('');

  let tempArticleTitle = '';
  let tempArticleImage = '';

  useEffect(() => {
    console.log('use effect hit');
    fetch('http://localhost:3000/api/article/articleOfTheDay')
        .then(response => response.json())
        .then(data => {
            tempArticleImage = data.article.thumbnail.source;
            setArticleOfTheDay(data);
            setArticleTitle(data.title);
            tempArticleTitle = data.title;
        })
        .catch(err => {
            console.log('Error fetching article of the day: ', err);
        });


  }, []);

  useEffect(() => {
     console.log('thumbnail: ', tempArticleImage);
    const tempAotd = articleOfTheDay.article;
    const tempThumbnail = tempAotd;
  }, [articleOfTheDay]);

//   console.log('AOTD: ', articleOfTheDay);
  console.log('article title', articleTitle)
    
  return (
    <div className="article-display-container" >
        <p className='aotd-body-text'>Article of the Day</p>
        <h3 className='aotd-header'>{articleTitle.replace('_', ' ')}</h3>
    </div>
  )
}

export default ArticleDisplay;