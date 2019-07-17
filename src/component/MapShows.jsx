import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import moment from 'moment';
import './MapShows.css'

class MapShows extends Component {

  render() {
    const { shows } = this.props
    const position = [47.403967, 2.427808];
    return (
      <div className="MapShows">
        <Map
          style={
          {
            widthmax: '400px',
            height: '400px',
            margin: 'auto',
          }}
          center={position}
          zoom={5}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {shows.map(show => (
            <Marker
              key={show.id}
              position={[show.lat, show.longitude]}
            >
              <Popup>
                {show.city} <br/>
                {moment(show.date).format('DD-MM-YYYY')}
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    )};
}

const mstp = state => ({
  shows: state.shows.list,

});

export default connect(mstp)(MapShows);