import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsyncShows } from '../actions/shows.js';
import UserShowsDisplay from './UserShowsDisplay';

class UserShows extends Component {

  componentDidMount() {
    const { getAsyncShows } = this.props;
    getAsyncShows()
  }

  render() {
    const { shows, loading, error } = this.props;
    console.log(shows)
    return(
      <div className="UserShows">
        <h1>Prochaines représentations</h1> 
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
            <UserShowsDisplay key={show.id} show={show} />
          ))
        }
      </div>
  )}
};

const mstp = state => ({
  loading: state.shows.loading,
  shows: state.shows.list,
  error: state.shows.error,
});
const mdtp = dispatch => bindActionCreators({ getAsyncShows }, dispatch);

export default connect(mstp, mdtp)(UserShows);

