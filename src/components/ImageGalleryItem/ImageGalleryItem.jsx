import React from 'react';
import './ImageGalleryItem.css';
export const ImageGalleryItem = ({ photo }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={photo} alt="" />
    </li>
  );
};
