import React, { useRef, useEffect } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import Form from "../components/contact/form";
import { Loader } from "@googlemaps/js-api-loader";
const Contact = ({toggle}) => {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAmZpAqCkk-NhbWxkfkILyGjmam4tjXui4",
      version: "weekly",
    });
    var map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        mapId: "402ace33d4b47500",
        center: { lat: 40.76889181354353, lng: -81.05619360894022 },
        zoom: 6,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
      });
      // var marker2 = new google.maps.Marker({
      //   position: { lat: 38.4, lng: -86.0 },
      //   map: map,
      //   title: "Hello World",
      //   optimized: false,
      //   icon: {
      //     url: "/images/House-Marker.png",
      //     scaledSize: new google.maps.Size(175, 150),
      //   },
      // });
      //     const infowindow = new google.maps.InfoWindow({
      //   content: "Cam",
      // });
    });
  });
  return (
    <Box
      sx={{
        height: "fit-content",
        position: "absolute",
        padding: "1rem 0 5rem 0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "transparent",
        zIndex: 0,
      }}
    >
      <div id="map" ref={googlemap}></div>
    </Box>
  );
};
export default Contact;
