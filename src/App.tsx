import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Search, Watch } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/watch/:id'
          element={<Watch />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
