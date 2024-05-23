import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./homemap.css";
import { Input } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PlaceIcon from "@mui/icons-material/Place";

const APIkey = "c5522871b67545349ef9d4bc8be9e471";

const defaultCenter = [36.87352, 30.65658];
const markers = [
  { lat: 36.875, lng: 30.657, name: "Toprak Football Field", address: "Siteler, 07070 Konyaaltı/Antalya" },
  { lat: 36.872, lng: 30.655, name: "MegaSpor Volleyball Club (Beach Volley)", address: "Deniz, Konyaaltı Cd. No:36, 07070 Muratpaşa/Antalya " },
  { lat: 36.874, lng: 30.654, name: "Konyaalti Football Field", address: "Pınarbaşı, Akdeniz Ünv. No:9, 07070 Konyaaltı/Antalya" },
  { lat: 36.873, lng: 30.655, name: "Konyaalti Basketball Field", address: "Bahtılı, 07130 Konyaaltı/Antalya" },
  { lat: 37.029, lng: 30.59681, name: "Dosemealti Football Field", address: "Yeniköy, Kenan Evren Cd. No:185, 07190 Döşemealtı/Antalya" },
  { lat: 36.851, lng: 30.828, name: "Lara Football Field", address: "Güzeloba, Lara Cd., 07230 Muratpaşa/Antalya" },
  { lat: 36.882, lng: 30.671, name: "Konyaalti Beach Park Tennis Courts", address: "Meltem, Tenis Kortu, Beach Park, 07030 Muratpaşa/Antalya" },
];

// Fix for default marker icon issues in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function HomeMap() {
  const [location, setLocation] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
  navigator.geolocation.getCurrentPosition(success, errors, options);

  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          console.log("results:", data.results);
          setLocation(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="mapContainer">
      <MapContainer center={defaultCenter} zoom={15} style={{ height: "450px", width: "430px", marginLeft: "25px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={[marker.lat, marker.lng]}
            eventHandlers={{
              click: () => {
                setSelectedAddress(marker.address);
              },
            }}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="addresses">
        <div className="address">
          <MyLocationIcon />
          <Input
            value={location}
            className="input"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="address">
          <PlaceIcon />
          <Input 
            className="input" 
            placeholder="Address" 
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMap;
