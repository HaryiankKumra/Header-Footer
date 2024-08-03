import React from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./component/layout/Footer/Footer";
import MainContent from './component/layout/Footer/MainContent';
import Header from './component/layout/Footer/Header';

function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Footer />
    </Router>
  );
}

export default App;
