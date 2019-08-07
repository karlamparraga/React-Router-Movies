import React, { useState } from 'react';
import {BrowserRouter as Route} from 'react-router-dom';

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
        <Route path="/" component={MovieList}></Route>
        <Route path="/movies/:id" component={Movie}></Route>
      </div>
    </div>
  );
};

export default App;
