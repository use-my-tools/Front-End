import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class MapContainer extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        { lat: 33.1605, lng: -117.0978 },
        { lat: 33.1605, lng: -114.0978 },
        { lat: 33.1605, lng: -115.0978 },
        { lat: 34.1605, lng: -115.0978 },
        { lat: 31.1605, lng: -115.0978 },
        { lat: 33.1605, lng: -115.0978 },
        { lat: 33.1605, lng: -115.0978 },
        { lat: 33.1605, lng: -117.0978 },
        { lat: 33.1605, lng: -114.0878 },
        { lat: 33.1605, lng: -115.0988 },
        { lat: 34.1605, lng: -115.0778 },
        { lat: 31.1605, lng: -115.0678 },
        { lat: 33.1605, lng: -114.0978 },
        { lat: 33.1605, lng: -115.0978 },
        { lat: 33.1605, lng: -114.0978 },
        { lat: 33.1605, lng: -115.0978 },
        { lat: 34.1605, lng: -115.0978 },
        { lat: 31.1605, lng: -115.0978 },
        { lat: 33.1605, lng: -115.0968 },
        { lat: 33.1605, lng: -117.0878 },
        { lat: 33.1605, lng: -114.0958 },
        { lat: 33.1605, lng: -112.0978 },
        { lat: 34.1605, lng: -215.0978 },
        { lat: 31.1705, lng: -115.0978 },
        { lat: 33.1505, lng: -115.0978 },
        { lat: 33.1405, lng: -115.0978 }
      ],
      loading: true
    };
  }
  componentDidMount(props) {
    this._isMounted = true;
    navigator.geolocation.getCurrentPosition(
      position => {
        if (this._isMounted) {
          const { latitude, longitude } = position.coords;
          this.setState({
            markers: [...this.state.markers, { lat: latitude, lng: longitude }],
            loading: false
          });
        }
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="row">
        <div className="col col-12" style={{ height: "50vh" }}>
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
        {/* <div className="col col-4">
          <h1>right side </h1>
        </div> */}
      </div>
    );
  }
}

export default MapContainer;
