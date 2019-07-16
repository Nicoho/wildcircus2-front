import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsyncShow } from '../actions/show.js';

class Show extends Component {

  componentDidMount() {
    const { getAsyncShow } = this.props;
    const id = this.props.match.params.id
     getAsyncShow(id)
  }

  render() {
  
    const { show, loading, error } = this.props;
    console.log(show)
    return(
      <div className='Show'>
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
          <div>
          { show.city}
         </div>
        }
      </div>
    )

  };
}

const mstp = state => ({
  loading: state.show.loading,
  show: state.show.list,
  error: state.show.error,
});

const mdtp = dispatch => bindActionCreators({ getAsyncShow }, dispatch);

export default connect(mstp, mdtp)(Show);