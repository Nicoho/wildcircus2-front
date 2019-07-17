import React from 'react';
import { NavLink } from 'react-router-dom';
import UserShows from './UserShows';
import MapShows from './MapShows';


function Home() {
return(
  <div className="Home">
    <p>blabla</p>
    <NavLink activeClassName="active" to={`/adminshow`}>
          <button type="button" className="ResumeButton">page admin</button>
      </NavLink>
     <UserShows />
     <MapShows />
  </div>
)
}

export default Home;

