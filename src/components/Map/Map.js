import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 23.8103,
      lng: 90.4125,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "600px", width: "100%" }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: "AIzaSyB92lowmt1P22IPzYkRB9wbZXlsBvEyrbQ" }}
          defaultCenter={{ lat: 23.8103, lng: 90.4125 }}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={23.8103} lng={90.4125} text="My Marker" />
          {/* <Marker position={{ lat: 23.8103, lng: 90.4125 }} /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
