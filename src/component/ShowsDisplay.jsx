import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import './ShowsDisplay.css';

class ShowsDisplay extends Component{

  deleteShow = () => {
    const {show: {id}}= this.props
    const config = {
      method: "DELETE",
    }
    const url = `http://localhost:3000/performance/${id}`
    fetch(url, config)
    .then((res) => {
      if (res.ok) {
        alert(`Spectacle supprimé!`);
        } else {
        alert(res.error);
      }
    }).catch(e => {
      alert('Erreur lors de la suppression du spectacle');
    });
  };

render(){
  const { show: { id, city, date }} = this.props
  return (
    <div className="ShowsDisplay">
      <div className="showInfo">
      <p>
        <span className="resumeKey">
          Ville:&nbsp;
        </span>
        {city}
      </p>
      <p>
        <span className="resumeKey">
          Date de la représentation:&nbsp;
        </span>
        {moment(date).format('DD MM YYYY')}
      </p>
      </div>
      <div className="showsButton">
        <NavLink activeClassName="active" to={`/adminshow/${id}`}>
          <button type="button" className="ResumeButton">Voir</button>
        </NavLink>
        <button onClick={this.deleteShow} className="deleteButton"> Supprimer </button>

      </div>
    </div>
  );
}
  
}

export default ShowsDisplay;
