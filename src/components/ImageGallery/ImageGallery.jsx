import React from 'react';
import "./ImageGallery.css"
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, openModal  }) => {
  return <ul className="ImageGallery">
    {photos.map((photo) => (
      <ImageGalleryItem key={photo.id} smallImg={photo.webformatURL }           largeImg={photo.largeImageURL}
      openModal={openModal}
      />
    ))}
  </ul>;
};
