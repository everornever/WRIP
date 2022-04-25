import './App.css';
import {useState} from 'react';
import DateField from './components/DateForm/DateField'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Frontend/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import RoutePlaning from './components/pages/RoutePlaning';
import Main from "./components/pages/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/routePlaning' component={Main} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
