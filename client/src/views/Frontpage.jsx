import React from "react";
import { useState } from 'react'
import PDSLogo from '../images/PDSLogo.png'
import AM_Logo from '../images/AM_Logo.jpg'
import ProjectConecptImage from '../images/ProjectConecptImage.jpg'
import Drone from '../images/Drone.jpg'
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import OppositeContentTimeline from "./Timeline";
  
const Frontpage = () => {
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
  return (
    <React.Fragment>
        <section className="header">
          <nav>
            <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
            <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={handleHideMenu}></i>
            <ul>
              <li className="active"><Link to="/" onClick={scrollToTop}>HOME</Link></li>
              <li><Link to="/team" onClick={scrollToTop}>TEAM</Link></li>
              <li><Link to="/computervision" onClick={scrollToTop}>COMPUTER VISION</Link></li>
              <li><Link to="/userinterface" onClick={scrollToTop}>USER INTERFACE</Link></li>
            </ul>
            </div>
            <i className="fa fa-bars" onClick={handleShowMenu}></i>
          </nav>

          <div className="text-box">
            <h1 className="animate__animated animate__zoomInLeft">Precision Drone Spray</h1>
            <p>ECEN Capstone</p>
            <img src={AM_Logo} alt="Texas A&M University Electrical and Computer Engineering Logo" id="AM_Logo" />
            <a href="#LearnMore" className="hero-btn">Learn More</a>
          </div>
        </section>

        {/* <!-- Project Concept --> */}
        <section className="gray" id="LearnMore">
          <section className="concept">
            <div className="row">
              <div className="concept-col">
                <h1>Overview</h1>
                <p>The Precision Drone Spray project is an autonomous system designed to deal with weeds in agricultural fields. It consists of a drone that maps the field, <span className="emphasis">identifies</span>, and <span className="emphasis">geotags</span> weed locations, and then <span className="emphasis">sprays</span> herbicide on the weeds. The system is intended to be a more efficient and precise method of weed management than current methods, such as crop dusters and manual spraying, which can be imprecise and time-consuming. The project also includes a  <span className="emphasis">website with a user interface</span> that allows users to view the weed locations on a map and manage options for mapping and spraying. </p>
              </div>
              <div className="concept-col" id="projImg">
                <img src={ProjectConecptImage} alt="Project Concept" />
              </div>
            </div>
            <div className="cent-row">
              <div className="concept-col banner">
                <p>A step towards more <span className="emphasis">precise and efficient agriculture</span> through the use of unmanned aerial vehicles and targeted herbicide application.</p>
              </div>
            </div>
            <div className="cent-row">
              <div className="concept-col">
              <h2>Drone</h2>
              <p id="Subtext"><b>Hylio AG-110</b></p>
              <img className='dronepic' src={Drone} alt="Drone" />
              <p>Provided by the Department of Soil and Crop Sciences</p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='cv-col'>
                <h2>Timeline</h2>
                <p>This project is part of the courses ECEN 403/404, spanning across both semesters. The Precision Drone Spray project was done during the fall semester of 2022 and the spring semester of 2023.</p>
                <OppositeContentTimeline />
              </div>
            </div>
            <hr />
            <div className="left-row">
              <div className="cv-col">
                <h2>Testing</h2>
                <p>Where are we testing it? What is the crop field and weeds we're testing on? <br />
                Was thinking about adding the nav links as banners of some sort across the page perhaps.</p>
              </div>
            </div>
            <hr />
            <div className="left-row">
              <div className="cv-col">
                <h2>Contact Us</h2>
                <p>Add a form that will send an email automatically to <br />PrecisionDroneSpray@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="cent-row">
                <h2 className="animate__animated animate__pulse">Check out the project GitHub!</h2>
                <div className="git">
                    <a href="https://github.tamu.edu/aashaykadakia/PrecisionDroneSpray" target="_blank" rel="noreferrer"><i className="fa fa-github"> <span className="font-fam">GitHub</span></i></a>
                </div>
            </div>
          </section>
        </section>

        {/* <!-- Footer --> */}
        <section className="footer">
        <h4>About Us</h4>
        <p>Undergraduate Senior Design Project for the <br /> Electrical and Computer Engineering Department at Texas A&M University</p>
        <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
        </section>
    </React.Fragment>
  );
};
  
export default Frontpage;