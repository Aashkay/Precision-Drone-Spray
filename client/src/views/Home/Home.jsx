import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/input/input";
//import Canvas from "./Canvas";
import cottonField from "../../CottonField.jpg";
import { PrimaryButton } from "../../components/button/button";
import CoordinatesList from "./CoordinatesList";
import  { hostUrl } from '../../constants';
import { Link } from "react-router-dom";


function Home() {
  

  return (
    <div>
      {/* <Canvas /> */}
      <header>
        <p>Welcome to The Precision Drone Spray Project</p>
        <p><Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/map">Map</Link></p>
        
      </header>{/*displays image of field will need to change when image is located on database */}
      
    </div>
  );
}
export default Home;
