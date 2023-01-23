import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import PrimaryInput from "../../components/input/input";
//import Canvas from "./Canvas";
import cottonField from "../../CottonField.jpg";
import { PrimaryButton } from "../../components/button/button";
import CoordinatesList from "./CoordinatesList";
import  { hostUrl } from '../../constants';
import { Link } from "react-router-dom";
import PDSLogo from '../../images/PDSLogo.png'
// importing Link from react-router-dom to navigate to 
// different end points.



function Home3() {

  const [showMenu, setShowMenu] = useState(false)

  const navLinks = document.getElementById("navLinks")

  function handleShowMenu() {
    setShowMenu(true)
    navLinks.style.display = "block"
  }

  function handleHideMenu() {
    setShowMenu(false)
    navLinks.style.display = "none"
  }

  function scrollToTop() { window.scrollTo(0, 0) }


  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => getCoordinates(), []);

  const getCoordinates = () => {

    fetch(`${hostUrl}/getCoordinates`, {
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
      fetch(`${hostUrl}/updateCoordinates`, {
        method: "POST",
        body: JSON.stringify({ coordinates: coordinates }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.json()
        window.location.reload()
      });
    } else {
      alert("Please enter details");
    }
  };

  return (
    <React.Fragment>
      <section className="sub-header">
        <nav>
          <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
          <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={handleHideMenu}></i>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
            <li><Link to="/team" onClick={scrollToTop}>TEAM</Link></li>
            <li><Link to="/computervision" onClick={scrollToTop}>COMPUTER VISION</Link></li>
            <li className="active"><Link to="/userinterface" onClick={scrollToTop}>USER INTERFACE</Link></li>
          </ul>
          </div>
          <i className="fa fa-bars" onClick={handleShowMenu}></i>
        </nav>
        <div className="text-box-sub">
          <h1 class="animate__animated animate__fadeInUp">User Interface</h1>
          <h2 class="animate__animated animate__fadeInUp">Manage Options for Spraying</h2>
        </div>

      </section>

      <div className="gray">
        <section className="UI">
          <div className="left-row">
            <div className="UI-col">
              <h1>How to interact with the User Interface</h1>
              <p>Shown below is an image of the crop field. Here, the user can manage options for the spray drone.</p>
              <p>Under the image there is a list of coordinates that correspond to GPS coordinates of detected and geotagged weeds. The coordinates have been related to the size of the image.</p>
              <p>As the user, you have the option to <span className="emphasis">enter new coordinates</span> using the text input boxes that also appear below the image. Furthermore, you can also choose to <span className="emphasis">remove unwanted/uncessary coordinates</span> of specific weeds that you don't need the spray drone to target.</p>
              <p>After you are satisfied with the list of weeds to target, the coordinates can then be sent back to the drone for spraying.</p>
            </div>
          </div>

          </section>
          


      <div>
      {/* <Canvas /> */}
      <header>
        {/*<p>MAP</p>
        <p><Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/map">Map</Link></p> */}
      </header>{/*displays image of field will need to change when image is located on database */}
      <img src={cottonField} alt="CottonMap" width="100%" height="100%" />
      <Grid 
        alignItems="start"
        justifyContent="center"
        container
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Grid>
            <p variant="h5" noWrap component="a" href="">
              Add Coordinates
            </p>
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
              {"Add Coordinates"}{/*shows textbox that allows user to input coordiantes */}
            </PrimaryButton>
          </Grid>
        </Grid>
        <CoordinatesList coordinates={coordinates} />
      </Grid>
    </div>
    </div>
    <section className="footer">
      <h4>About Us</h4>
      <p>Undergraduate Senior Design Project for the <br /> Electrical and Computer Engineering Department at Texas A&M University</p>
      <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
      </section>
    </React.Fragment>
    
  );
}
export default Home3;
