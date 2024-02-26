import React, { useEffect, useState } from 'react';
import { useGenerateHistoryQuery } from '../slices/api/articleSlice';
import { useParams } from 'react-router';

const ArticleHistory = () => {
  const [articleHistory, setArticleHistory] = useState([]);

  const { id } = useParams();
  //console.log('id:',id)
  const { data, isLoading } = useGenerateHistoryQuery(id);
  const [show, setShow] = useState(false);
  //   const [show2, setShow2] = useState('')

  // useEffect(() => {
  //     setArticleHistory(data)
  //     console.log('data:',data)
  //     // console.log('history', articleHistory)
  // }, [data, articleHistory])
  //   if(isLoading)
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((article) => (
            <div
              onClick={() => {
                if (article.isRead === true) {
                  setShow(true);
                } else {
                  setShow(false);
                }
              }}
            >
              {article.createdAt}
              {article.isRead === true && <p>Was Read</p>}
              {article.isRead === false && <p>Not Read</p>}
              {show && article.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleHistory;
