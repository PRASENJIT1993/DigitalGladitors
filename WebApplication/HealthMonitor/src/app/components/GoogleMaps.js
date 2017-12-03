import React from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = {
  lat: 24.585445,
  lng: 73.71247900000003
};


const coords1 = {
  lat: 24.385445,
  lng: 73.71247900000003
};

const coords2 = {
  lat: 24.315445,
  lng: 73.71247900000003
};

const params = { v: '3.exp', key: 'AIzaSyAdhzJ2jZMlQaKpeNvROG-EgDo1HZS38BQ' };

class GoogleMaps extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'960px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Hang on!! While we are loading maps..'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'You are here'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
        <Marker
          lat={coords1.lat}
          lng={coords1.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />

        <Marker
          lat={coords2.lat}
          lng={coords2.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />

      </Gmaps>
    );
  }
};

export default GoogleMaps;