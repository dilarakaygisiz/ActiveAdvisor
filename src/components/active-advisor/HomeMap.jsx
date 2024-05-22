import React from "react";
import { TextField, Input } from "@mui/material";
import "./homemap.css";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PlaceIcon from "@mui/icons-material/Place";
import { useEffect, useState } from "react";


const APIkey = "c5522871b67545349ef9d4bc8be9e471";

function HomeMap() {
  useEffect(() => {
    console.log(navigator);
  }, []);
  console.log(navigator.geolocation);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
  navigator.geolocation.getCurrentPosition(success, errors, options);

  const [location, setLocation] = useState();
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

  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getLocationInfo(crd.latitude, crd.longitude);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            console.log("Geolocation is not permitted by this user.");
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
        });
    }
  }, []);

  const [place, setPlace] = useState({location});
  
  return (
    <div className="mapContainer">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102101.70194454717!2d30.635532785014473!3d36.8980462656465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1713462662488!5m2!1str!2str"
        width="300"
        height="300"
        style={{ border: "0" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      

      <div className="addresses">
        <div className="address">
          <MyLocationIcon />
          <Input
            value={location}
            className="input"
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="address">
          <PlaceIcon />
          <Input className="input" placeholder="Address" />
        </div>
        
      </div>
    </div>
  );
}
export default HomeMap;
