import React, { useEffect, useState } from 'react';
import { useGenerateHistoryQuery } from '../slices/api/articleSlice';
import { useParams } from 'react-router';
import { Link, useNavigate, useLocation, Route, Routes} from 'react-router-dom';
import { Navbar } from './Navbar'
import { useSelector } from 'react-redux';




const ArticleHistory = () => {
    const [articleHistory, setArticleHistory] = useState([])

    const {id} = useParams();
    console.log(id)
    const {data, isLoading} = useGenerateHistoryQuery(id);

    const userData = useSelector((state) => state.auth);

    useEffect(() => {
        setArticleHistory(data)
        console.log(data)
        // console.log('history', articleHistory)
    }, [data, articleHistory])
  return (
    <div>
        <div>
        {/* <Navbar/> */}
        </div>
        {isLoading ? (<p>Loading...</p>) : (
            <div>
                {data.map((article) => (
                    <div>
                        <button>{article.createdAt}</button>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        )}
        <Navbar userData= {userData} />
    </div>
  )
}

export default ArticleHistory