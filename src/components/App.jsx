import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import './App.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getPhotoServices } from "./services/photo";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
export class App extends Component {
  state = {
    name : "",
    photos: [],
    status: "idle",
    per_page: 12,
    page: 1,
    modalImg: "",
    shownModal: false,
  }


  toggleModal = (modalImg, modalAlt) => {
    this.setState(prevState => ({
      shownModal: !prevState.shownModal,
      modalImg,
    }));
  };

  handleChange = (evt) => {
   const {name, value} = evt.target;
   this.setState({[name]: value, prevName:value})
  }


 


  handleSubmit = async evt => {
    evt.preventDefault();
    const { name } = this.state;
    this.setState({ status: "loading"});
    try {
      const response = await getPhotoServices(name);
      this.setState({ photos: response.hits, status: "fulfilled"}); 
    } catch (error) {
      this.setState({ status: "rejected" });
      throw new Error(error.message);
    }
  }

  handleChangePage = async (targetPage) => {
    const { name} = this.state; 
    try {
      await this.setState({
        page: targetPage,
        status: "loading", // Установим статус в "loading" перед загрузкой новых фотографий
      });
  
      const response = await getPhotoServices(name, targetPage); // Используем targetPage и per_page для получения данных
      const newPhotos = response.hits;
  
      this.setState((prevState) => ({
        photos: [...prevState.photos, ...newPhotos],
        status: "fulfilled",
      }));
    } catch (error) {
      this.setState({ status: "rejected" });
      throw new Error(error.message);
    }
  }
  
  







 render() {
  const {photos, page, status} = this.state
  return (
    <>
       <div className="App">
        <Searchbar name={this.state.name}  onChange = {this.handleChange} onSubmit ={this.handleSubmit}/>
       
        {this.state.status === "loading" ? (
  <Loader />
) : (
  <div>
    <ImageGallery photos={this.state.photos} openModal={this.toggleModal} />
    {photos.length > 0 && <Button totalPhotos={photos.length / page} currentPage={page} onChangePage={this.handleChangePage} />}
    {this.state.shownModal && <Modal openModal={this.toggleModal} modalImg={this.state.modalImg} />}
  </div>
)}

       
       
      
       </div>
    </>
   );
 } 
};
