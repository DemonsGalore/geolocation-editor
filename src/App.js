import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Geolocation from './pages/Geolocation';
import TextEditor from './pages/TextEditor';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/geolocation" component={Geolocation} />
          <Route exact path="/text-editor" component={TextEditor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
