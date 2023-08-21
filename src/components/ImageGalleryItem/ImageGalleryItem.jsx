import React from 'react';
import './ImageGalleryItem.css';
export const ImageGalleryItem = ({ smallImg, largeImg, openModal  }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => openModal(largeImg)}    >
      <img className="ImageGalleryItem-image" src={smallImg} alt="" />
    </li>
  );
};
