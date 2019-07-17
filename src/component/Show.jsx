import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment'
import { NavLink } from 'react-router-dom';
import { getAsyncShow } from '../actions/show.js';

class Show extends Component {

  componentDidMount() {
    const { getAsyncShow } = this.props;
    const id = this.props.match.params.id
     getAsyncShow(id)
  }


 
 submitShow = (values) => {
   console.log(values)
  const id = this.props.match.params.id;
  (id !== "new")
  ? this.changeShow(values, id)
  :this.newShow(values) ;
}

changeShow = (values, id) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  };
  const url = `http://localhost:3000/performance/${id}`;
  fetch(url, config)
    .then((res) => {
      if (res.ok) {
        alert(`Spectacle modifié avec l'ID ${id}!`);
        this.props.history.push('/adminshow');
      } else {
        alert(res.error);
      }
    }).catch(e => {
      alert('Erreur lors de la modification du spectacle');
    });
}

newShow = (values)=> {
  const newValues ={
    city:values.city,
    date: values.date,
    vip_cap: values.vip_cap,
    lat: values.lat,
    longitude: values.longitude
  }
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newValues),
  };
  const url = `http://localhost:3000/performance`;
  fetch(url, config)
    .then((res) => {
      if (res.ok) {
        alert(`Spectacle ajouté!`);
        this.props.history.push('/adminshow');
      } else {
        alert(res.error);
      }
    }).catch(e => {
      alert('Erreur lors de la création du spectacle');
    });
}



  render() {
  
    const { handleSubmit, loading, error} = this.props;
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
            <h2>Gestion d'un spectacle</h2>

            <form className='showForm' onSubmit={handleSubmit(this.submitShow)}>
              <Field type="text" name="city" component="input"  />
              <Field type="date" name="date" component="input"  />
              <Field type="number" name="vip_cap" component="input" />
              <Field type="number" step="any" name="lat" component="input" />
              <Field type="number" step="any" name="longitude" component="input" />
              <input type="submit" value="Envoyer" id="submitButton" />
            </form>
            <NavLink activeClassName="active" to={`/adminshow/`}>
              <button type="button" className="ResumeButton">retour aux spectacles</button>
            </NavLink>
         </div>
        }
      </div>
    )

  };
}

const mstp = state => ({
  initialValues: {
    ...state.show.list,
    date: moment(state.show.list.date).format('YYYY-MM-DD')
  },
  loading: state.show.loading,
  show: state.show.list,
  error: state.show.error,
});

const mdtp = dispatch => bindActionCreators({ getAsyncShow }, dispatch);

export default (connect(mstp, mdtp)(reduxForm({
  form: 'showForm',
  enableReinitialize: true,
 })(Show)));