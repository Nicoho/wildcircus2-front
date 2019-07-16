import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shows from './component/Shows'
import Show from './component/Show'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/adminshow" component={Shows} />
        <Route path="/adminshow/:id" component={Show} />
      </Switch>
    </div>
  );
}

export default App;
