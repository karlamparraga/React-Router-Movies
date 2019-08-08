import React, { useState } from 'react';
import { Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
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
        <Route path="/" exact component={MovieList}/>
        <Route path="/movies/:id" component={Movie}/>
      </div>
    </div>
  );
};

export default App;
