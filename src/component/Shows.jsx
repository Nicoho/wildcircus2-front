import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsyncShows } from '../actions/show.js';

class Shows extends Component {

  componentDidMount() {
    const { getAsyncShows } = this.props;
    getAsyncShows()
  }

  render() {
    const { shows, loading, error } = this.props;
    return(
      <div className='Shows'>
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
            <div key={show.id}>
              { show.city }
              { show.date }
              
            </div>
          ))
        };
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
