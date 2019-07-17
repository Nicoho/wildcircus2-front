import React from 'react';
import { NavLink } from 'react-router-dom';
import UserShows from './UserShows';
import MapShows from './MapShows';
import './Home.css'


function Home() {
return(
  <div className="Home">
    <h1 className="homeTitle">WILD CIRCUS AGENDA</h1>
    <NavLink activeClassName="active" to={`/adminshow`}>
          <button type="button" className="adminButton">page admin</button>
    </NavLink>
    <div className='container'>
      <div className="row">
        <div className='col-sm-12 col-md-6 col-lg-8'>
          <UserShows />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4'>
        <MapShows />
        </div>
      </div> 
    </div>
  </div>
)
}

export default Home;

