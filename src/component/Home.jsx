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
    <div className='container'>
      <div className="row">
        <div className='col-sm-12 col-md-4'>
          <UserShows />
        </div>

      </div>
     <MapShows />
    </div>
    
  </div>
)
}

export default Home;

