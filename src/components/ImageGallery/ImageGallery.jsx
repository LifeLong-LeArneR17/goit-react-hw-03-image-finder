import React from 'react';
import "./ImageGallery.css"
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos }) => {
  return <ul className="ImageGallery">
    {photos.map((photo) => (
      <ImageGalleryItem key={photo.id} photo={photo.webformatURL} />
    ))}
  </ul>;
};
