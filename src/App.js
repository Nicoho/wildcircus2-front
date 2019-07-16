import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shows from './component/Shows'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/adminshow" component={Shows} />
      </Switch>
    </div>
  );
}

export default App;
