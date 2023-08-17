import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import './App.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
export const App = () => {
  return (
    <div className="App">
     <Searchbar/>
     <ImageGallery/>
    </div>
  );
};
