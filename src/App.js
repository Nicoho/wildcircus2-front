import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home'
import Shows from './component/Shows'
import Show from './component/Show'
import './App.css'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adminshow" component={Shows} />
        <Route path="/adminshow/:id" component={Show} />
      </Switch>
    </div>
  );
}

export default App;
