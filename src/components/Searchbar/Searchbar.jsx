import React from 'react';
import "./Searchbar.css"
export const Searchbar = ({name, onChange,onSubmit}) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            name = "name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value = {name}
            onChange = {onChange}
          />
        </form>
      </header>
    </>
  );
};
