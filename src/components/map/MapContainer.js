import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        { lat: 33.1605, lng: -117.0978 },
        { lat: 33.1605, lng: -114.0978 },
        { lat: 33.1605, lng: -115.0978 }
      ]
    };
  }

  // componentDidMount() {
  //   if ("geolocation" in navigator) {
  //     /* geolocation is available */
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       this.setState((state, props) => {
  //         return {
  //           markers: [
  //             ...state.markers,
  //             {
  //               lat: position.coords.latitude,
  //               lng: position.coords.longitude
  //             }
  //           ]
  //         };
  //       });
  //     });
  //   } else {
  //     /* geolocation IS NOT available */
  //     console.log("notavailable");
  //   }
  // }

  render() {
    return (
      <div className="row">
        <div className="col col-8" style={{ height: "100vh" }}>
          <Map center={[33.1605, -117.0978]} zoom={12} width={600} height={400}>
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  key={index}
                  anchor={[marker.lat, marker.lng]}
                  payload={1}
                  // onClick={({ event, anchor, payload }) => {}}
                />
              );
            })}
            <Overlay anchor={[33.1605, -117.0978]} offset={[120, 79]}>
              <img src="pigeon.jpg" width={240} height={258} alt="" />
            </Overlay>
          </Map>
        </div>
        <div className="col col-4">
          <h1>right side </h1>
        </div>
      </div>
    );
  }
}

export default MapContainer;
