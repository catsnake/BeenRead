import React from 'react'

const ArticleModal = ({ setIsModalOpened }) => {

  // Logic for when user clicks x (no back end logic here, user isn't finished reading)  
  const handleModalXBtn = () => {
    console.log('hanle modal x button!');
    setIsModalOpened(false);
  }  
 
  // Logic for when user is done reading article (some back end logic here)
  const handleDoneReadingBtn = () => {
    console.log('handle done reading button!');
    setIsModalOpened(false);
  }
    
  return (
    <div className="article-modal-container">
        <div className="article-modal-contents">
            <div className="modal-title-container">
                <h1 className='modal-title'>Article Title</h1>
                <svg onClick={handleModalXBtn} className='modal-x-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </div>
            <p className='article-body-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum architecto maxime cupiditate, quibusdam voluptates provident id reprehenderit eius, quisquam veniam ipsam laborum sequi distinctio soluta velit perspiciatis. Minus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    
        </div>
        <div className="article-modal-button">
            <a className='done-reading-btn' onClick={handleDoneReadingBtn}>I'm Done</a>
        </div>
    </div>
  )
}

export default ArticleModal