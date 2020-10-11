import React, { Fragment } from 'react';
import Header from './components/Header';
import Hiring from './components/Hiring';
import Stack from './components/Stack';
import Tuition from './components/Tuition';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './sass/main.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hiring />
      <Stack />
      <Tuition />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
