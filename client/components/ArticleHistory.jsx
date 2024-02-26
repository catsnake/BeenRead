import React, { useEffect, useState } from 'react';
import { useGenerateHistoryQuery } from '../slices/api/articleSlice';
import { useParams } from 'react-router';

const ArticleHistory = () => {
    const [articleHistory, setArticleHistory] = useState([])

    const {id} = useParams();
    console.log(id)
    const {data, isLoading} = useGenerateHistoryQuery(id);

    useEffect(() => {
        setArticleHistory(data)
        console.log(data)
        // console.log('history', articleHistory)
    }, [data, articleHistory])
  return (
    <div>
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
    </div>
  )
}

export default ArticleHistory