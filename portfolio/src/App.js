import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Portfolio" component={Portfolio} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}


export default App;


