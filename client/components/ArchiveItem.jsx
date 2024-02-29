import React from 'react';
import ArticleModal from './ArticleModal';
import { useState } from 'react';
import '../styles.css'; 

const ArchiveItem = ({ article }) => {
  const [isModalOpen, setIsModalOpened] = useState(false);

  const { title, description, createdAt } = article;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  const handleModalToggle = () => {
    console.log('handle modal toggle hit', isModalOpen);
    setIsModalOpened(!isModalOpen);
  };

  return (
    <div className='archive-item'>
      <h2
        onClick={handleModalToggle}
      >
        {article.titles.normalized}{' '}
      </h2>
      <p>Date: {formattedDate}</p>
      <p>Summary: {description}</p>
      {isModalOpen && (
        <ArticleModal
          isModalOpen={isModalOpen}
          setIsModalOpened={setIsModalOpened}
          article={article}
        />
      )}
    </div>
  );
};

export default ArchiveItem;
