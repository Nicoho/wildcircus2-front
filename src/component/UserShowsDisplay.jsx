import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

function UserShowsDisplay({show}) {
return(
  <div className="UserShowsDisplay">
    <div className="showInfo">
      <p>
        <span className="resumeKey">
          Ville:&nbsp;
        </span>
        {show.city}
      </p>
      <p>
        <span className="resumeKey">
          Date de la représentation:&nbsp;
        </span>
        {moment(show.date).format('DD MM YYYY')}
      </p>
      </div>
      <div className="showsUserButton">
        <NavLink activeClassName="active" to={`/adminshow/${show.id}`}>
          <button type="button" className="ResumeButton">Voir</button>
        </NavLink>
      </div>
    
  </div>
)
}

export default UserShowsDisplay;