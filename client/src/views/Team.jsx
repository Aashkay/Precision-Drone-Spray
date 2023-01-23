import React from "react";
import { useState } from 'react'
import PDSLogo from '../images/PDSLogo.png'
import Martin_Profile from '../images/Martin_Profile.jpg'
import Aashay_Profile from '../images/Aashay_Profile.jpg'
import Swarnabha_Profile from '../images/Swarnabha_Profile.jpg'
import Muthu_Profile from '../images/Muthu_Profile.jpg'
import Bholuram_Profile from '../images/Bholuram_Profile.jpg'
import Ubaldo_Profile from '../images/Ubaldo_Profile.jpg'
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Team = () => {
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
        <section className="sub-header">
          <nav>
            <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
            <div className="nav-links" id="navLinks">
              <i className="fa fa-times" onClick={handleHideMenu}></i>
              <ul>
                <li><Link to="/" onClick={scrollToTop}>HOME</Link></li>
                <li className="active"><Link to="/team" onClick={scrollToTop}>TEAM</Link></li>
                <li><Link to="/computervision" onClick={scrollToTop}>COMPUTER VISION</Link></li>
                <li><Link to="/userinterface" onClick={scrollToTop}>USER INTERFACE</Link></li>
              </ul>
            </div>
            <i className="fa fa-bars" onClick={handleShowMenu}></i>
          </nav>
          <div className="text-box-sub">
            <h1 className="animate__animated animate__fadeInUp">Project Team</h1>
            <br />
          </div>
        </section>

        <div className="gray">
            <section className="team">
                <h2>Undergraduate Students</h2>
                <div className="row">
                    <div className="team-col">
                    <h3>Martin Wnorowski</h3>
                    <img src={Martin_Profile} alt="Martin's Profile Pic" className="profpic" />
                    <h4>Computer Vision Lead</h4>
                    {/* <p>Pursuing a B.S. degree in Electrical and Computer Engineering with a minor in Engineering Project Management.</p> */}
                    <a href="https://www.linkedin.com/in/martin-wnorowski/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                    <div className="team-col">
                    <h3>Aashay Kadakia</h3>
                    <img src={Aashay_Profile} alt="Aashay's Profile Pic" className="profpic" />
                    <h4>Website and Database Lead</h4>
                    {/* <p>Pursuing a degree in Electrical and Computer Engineering Major with a minor in Engineering Project Management.</p> */}
                    <a href="https://www.linkedin.com/in/aashaykadakia/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                </div>

                <h2>Teaching Assistant</h2>
                <div className="row">
                    <div className="team-col">
                    <h3>Swarnabha Roy</h3>
                    <img src={Swarnabha_Profile} alt="Swarnabha's Profile Pic" className="profpic" />
                    {/* <p>Pursuing a degree in Electrical and Computer Engineering Major with a minor in Engineering Project Management.</p> */}
                    <a href="https://www.linkedin.com/in/swarnabha-roy-53a588a4/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                </div>

                <h2>Collaborators in the <a href="https://soilcrop.tamu.edu/" style={{textDecoration: "none"}} target="_blank" rel="noreferrer"><span className="Aggie">Department of Soil and Crop Sciences</span></a></h2>
                <div className="row">
                    <div className="team-col">
                    <h3>Dr. Muthukumar Bagavathiannan</h3>
                    <img src={Muthu_Profile} alt="Dr Muthu's Profile Pic" className="profpic" />
                    {/* <p>Pursuing a degree in Electrical and Computer Engineering Major with a minor in Engineering Project Management.</p> */}
                    <a href="https://www.linkedin.com/in/muthukumar-bagavathiannan-22b20847/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                    <div className="team-col">
                    <h3>Bholuram Gurjar</h3>
                    <img src={Bholuram_Profile} alt="Bholuram's Profile Pic" className="profpic" />
                    {/* <p>Pursuing a degree in Electrical and Computer Engineering Major with a minor in Engineering Project Management.</p> */}
                    </div>
                    <div className="team-col">
                    <h3>Ubaldo Torres</h3>
                    <img src={Ubaldo_Profile} alt="Ubaldo's Profile Pic" className="profpic" />
                    {/* <p>Pursuing a degree in Electrical and Computer Engineering Major with a minor in Engineering Project Management.</p> */}
                    </div>
                </div>
            </section>
        </div>

        {/* <!-- Footer --> */}
        <section className="footer">
            <h4>About Us</h4>
            <p>Undergraduate Senior Design Project for the <br /> Electrical and Computer Engineering Department at Texas A&M University</p>
            <Link to="/" onClick={scrollToTop}><img src={PDSLogo} alt="PDS Logo" /></Link>
        </section>
      </React.Fragment>
    );
};
  
export default Team;