import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default withRouter(App);
