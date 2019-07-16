import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsyncShows } from '../actions/shows.js';
import { NavLink } from 'react-router-dom';
import ShowsDisplay from './ShowsDisplay';
import'./Shows.css';

class Shows extends Component {

  componentDidMount() {
    const { getAsyncShows } = this.props;
    getAsyncShows()
  }

    
  render() {
    const { shows, loading, error } = this.props;
    return(
      <div className='Shows'>
        <h1>Liste des spectacles</h1>
        <NavLink activeClassName="active" to={`/adminshow/new`}>
          <button type="button" className="ResumeButton">Ajouter une date</button>
        </NavLink>
        {
       (loading)
         ? <div>Chargement en cours veuillez patienter...</div>
         : ''
        }
        {
          (error !== '')
            ? <div>{error}</div>
            : ''
        }
        {
          shows.map(show => (
            <ShowsDisplay key={show.id} show={show} deleteShow={this.deleteShow} />
          ))
        }
      </div>
    )

  };
}

const mstp = state => ({
  loading: state.shows.loading,
  shows: state.shows.list,
  error: state.shows.error,
});
const mdtp = dispatch => bindActionCreators({ getAsyncShows }, dispatch);

export default connect(mstp, mdtp)(Shows);
