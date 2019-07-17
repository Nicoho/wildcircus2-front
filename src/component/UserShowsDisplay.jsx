import React from 'react';
import moment from 'moment';
import './UserShowsDisplay.css';

function UserShowsDisplay({show}) {
return(
  <div className="UserShowsDisplay">
    <div className="showInfo">
      <p className="showInfos">
        <span>
          Ville:&nbsp;
        </span>
        {show.city}
      </p>
      <p className="showInfos">
        <span>
          Date de la représentation:&nbsp;
        </span>
        {moment(show.date).format('DD MM YYYY')}
      </p>
      </div>  
  </div>
)
}

export default UserShowsDisplay;