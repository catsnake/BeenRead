import React, { useEffect, useState } from 'react';
import { useGenerateHistoryQuery } from '../slices/api/articleSlice';
import { useParams } from 'react-router';
import {
  Link,
  useNavigate,
  useLocation,
  Route,
  Routes,
} from 'react-router-dom';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';

const ArticleHistory = () => {
  const [articleHistory, setArticleHistory] = useState([]);
  const userData = useSelector((state) => state.auth);
  const { id } = useParams();
  const { data, isLoading } = useGenerateHistoryQuery(id);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setArticleHistory(data);
    console.log(data);
    // console.log('history', articleHistory)
  }, [data, articleHistory]);

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
          <Navbar userData={userData} />
        </div>
      )}
    </div>
  );
};
export default ArticleHistory;
