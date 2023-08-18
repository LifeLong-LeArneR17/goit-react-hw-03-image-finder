import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import './App.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getPhotoServices } from "./services/photo";
import { Button } from "./Button/Button";

export class App extends Component {
  state = {
    name : "",
    photos: [],
    status: "idle",
    per_page: 12,
    page: 1,
  }


  


  handleChange = (evt) => {
   const {name, value} = evt.target;
   this.setState({[name]: value, prevName:value})
  }


 


  handleSubmit = async evt => {
    evt.preventDefault();
    const { name } = this.state;
    this.setState({ status: "loading" ,page: 1});
    try {
      const response = await getPhotoServices(name);
      this.setState({ photos: response.hits, status: "fulfilled" }); 
    } catch (error) {
      this.setState({ status: "rejected" });
      throw new Error(error.message);
    }
  }

  handleChangePage = async (targetPage) => {
    const { name,  page} = this.state;
    try {
      await this.setState(
        {
          page: targetPage,
        }
      );
      try {
        const response = await getPhotoServices(name, page);
        const newPhotos = response.hits;
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...newPhotos],
          status: "fulfilled",
        }));
      } catch (error) {
        this.setState({ status: "rejected" });
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error updating page:", error);
    }
  }
  




  



 render() {
  const {photos, per_page, page} = this.state
  return (
    <>
       <div className="App">
        <Searchbar name={this.state.name}  onChange = {this.handleChange} onSubmit ={this.handleSubmit}/>
        <ImageGallery photos={this.state.photos} onClick= {this.onChangeGallery}/>
       {photos.length > 0 && <Button totalPhotos={photos.length / page} currentPage={page} onChangePage={this.handleChangePage}/>}
       </div>
    </>
   );
 } 
};
