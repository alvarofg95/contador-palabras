import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <header />
      <Route path="/" component={Home} />
    </div>
  );
}

export default withRouter(App);
