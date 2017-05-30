import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

// spread operator line 10
// {preload.shows.map(show => <ShowCard {...show}  />)}
// {preload.shows.map(show => <ShowCard show={show} />)}

// React class must have a render method, and render has to return a markup

// Added plugins babel-plugin-transform-class-properties in babelrc for handleSearchTermChange arrow function

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1> svideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
        </header>
        <div>
        {preload.shows
          .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
};

export default Search;
