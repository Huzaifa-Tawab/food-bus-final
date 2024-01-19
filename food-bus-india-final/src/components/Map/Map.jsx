// import React from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = () => <div>hjhjkhjkhjkhjkhjk</div>;

// export default function Map() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyA2GdjDHfIOvdkscGUDZTtbuWNFuQOI8xM" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent lat={33.619968} lng={72.9481216} text="My Marker" />
//         <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//       </GoogleMapReact>
//     </div>
//   );
// }

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 33.619968,
  lng: 72.9481216,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA2GdjDHfIOvdkscGUDZTtbuWNFuQOI8xM",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        // center={center}
      >
        <Marker position={center} />
        {/* <Marker position={lat: 59.955413 lng={ 30.337844}} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;
