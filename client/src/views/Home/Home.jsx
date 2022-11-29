import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/input/input";
//import Canvas from "./Canvas";
import cottonField from "../../CottonField.jpg";
import { PrimaryButton } from "../../components/button/button";
import CoordinatesList from "./CoordinatesList";

function Home() {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => getCoordinates(), []);

  const getCoordinates = () => {
    fetch("/getCoordinates", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setCoordinates(res.data.coordinates);
      });
  };

  const handleChangeLatitude = (event) => {
    console.log(event.target.value);
    setLatitude(event.target.value);
  };

  const handleChangeLongitude = (event) => {
    setLongitude(event.target.value);
  };

  const handleSubmit = () => {
    console.log(latitude, longitude);

    const coordinates = {
      lat: latitude,
      long: longitude,
    };
    if (longitude && latitude) {
      fetch("/updateCoordinates", {
        method: "POST",
        body: JSON.stringify({ coordinates: coordinates }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      window.location.reload()
    } else {
      alert("Please enter details");
    }
  };

  return (
    <div>
      {/* <Canvas /> */}
      <header>
        <p>Welcome to The Precision Drone Spray Project</p>
      </header>
      <img src={cottonField} alt="CottonMap" width="100%" height="100%" />
      <Grid
        alignItems="start"
        justifyContent="center"
        container
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Grid>
            <Typography variant="h5" noWrap component="a" href="">
              Add Coordinates
            </Typography>
          </Grid>
          <Box pt={3} sx={{ width: "100%" }}>
            <Grid pt={3} item>
              <PrimaryInput
                label={"Latitude"}
                type={"number"}
                name="latitude"
                fullWidth
                placeholder={"Latitude"}
                value={latitude}
                onChange={handleChangeLatitude}
              />
            </Grid>

            <Grid pt={3} item>
              <PrimaryInput
                label={"Longitude"}
                type={"number"}
                name="longitude"
                fullWidth
                placeholder={"Longitude"}
                value={longitude}
                onChange={handleChangeLongitude}
              />
            </Grid>
          </Box>

          <Grid item xs={12} sx={{ paddingTop: 2 }}>
            <PrimaryButton variant="contained" onClick={handleSubmit} fullWidth>
              {"Add Coordinates"}
            </PrimaryButton>
          </Grid>
        </Grid>
        <CoordinatesList coordinates={coordinates} />
      </Grid>
    </div>
  );
}
export default Home;
