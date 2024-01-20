import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import Bus from "../../assets/logos/Bus.webp";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 28.610472500678526,
  lng: 77.19866274283488,
};

const markers = [
  { lat: 28.645214214491705, lng: 77.17865889353992 },
  { lat: 28.698134108264224, lng: 77.2149735389862 },

  { lat: 28.572300913191132, lng: 77.23830943217835 },

  { lat: 28.572150157611475, lng: 77.21994166649012 },
];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA2GdjDHfIOvdkscGUDZTtbuWNFuQOI8xM",
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
        zoom={13}
        center={center}
      >
        {markers.map((marker, index) => (
          <MarkerF
            icon={{
              url: Bus,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
