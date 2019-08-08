import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Router path="/" component={MovieList}></Router>
        <Router path="/movies/:id" component={Movie}></Router>
      </div>
    </div>
  );
};

export default App;
