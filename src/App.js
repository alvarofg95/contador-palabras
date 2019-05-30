import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/contacto" component={Contacto} />
    </div>
  );
}

export default withRouter(App);
