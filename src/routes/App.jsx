import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Home from '../components/05-pages/landing-pages/Home';

const App = ({ getData }) => {
  React.useEffect(async () => {
    const data = await require('../../data.json');
    getData(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  getData,
};

export default connect(null, mapDispatchToProps)(App);