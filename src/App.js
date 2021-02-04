import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar';
import { DataWrapper } from './Components/data/Data';
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/footer/Footer';
import MemeTemplate from './Components/memetemplate/MemeTemplate';

function App() {
  return (
    <Router>
      <Navbar />
      <DataWrapper>
        <Route path="/" component={Gallery} exact />
        <Route path="/:id" component={MemeTemplate} />
      </DataWrapper>
      <Footer />
    </Router>
  );
}

export default App;
