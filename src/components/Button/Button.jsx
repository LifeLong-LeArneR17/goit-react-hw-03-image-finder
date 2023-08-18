import React from 'react';
import './Button.css';
export const Button = ({ totalPhotos, currentPage, onChangePage }) => {
  return (
    <button
      onClick={() => {
        onChangePage(currentPage + 1);
      }}
      className="Button"
      disabled = {currentPage === totalPhotos}
    >
      Load more
    </button>
  );
};
