import React from "react";
import { useState, useRef } from 'react'
import PDSLogo from '../images/PDSLogo.png'
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import CV_Components from '../images/CV_Components.jpg'
import examplePrediction from '../images/examplePrediction.jpg'
import roboflowLabeling from '../images/roboflowLabeling.png'
import CurrentModelmAP from '../images/CurrentModelmAP - Copy.png'
import CurrentModelmAP2 from '../images/CurrentModelmAP2 - Copy.png'
import modelIterations from '../images/modelIterations.png'
import Ultralytics from '../images/Ultralytics.png'
import Roboflow from '../images/Roboflow.png'
import 'animate.css'
import BasicPopover from "./Popover";
  
const ComputerVision = () => {
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
            <li><Link to="/team" onClick={scrollToTop}>TEAM</Link></li>
            <li className="active"><Link to="/computervision" onClick={scrollToTop}>COMPUTER VISION</Link></li>
            <li><Link to="/userinterface" onClick={scrollToTop}>USER INTERFACE</Link></li>
          </ul>
          </div>
          <i className="fa fa-bars" onClick={handleShowMenu}></i>
        </nav>
        <div className="text-box-sub">
          <h1 className="animate__animated animate__fadeInUp">Computer Vision</h1>
          <h2 className="animate__animated animate__fadeInUp">Weed Identification & Localization</h2>
        </div>
      </section>

      <div className="gray">
        <section className="cv">
          <div className="row">
            <div className="cv-col">
              <h1 className="my-button">Summary of Subsystem</h1>
              <p>The Computer Vision subsystem is designed to <span className="emphasis">identify and locate</span> weeds in <span className="emphasis">real-time</span> as a <span className="emphasis">drone flies</span> over a crop field. It uses a model trained on images of a crop field labeled with Waterhemp weeds, which was then run on a Jetson Nano microcontroller. The model, implemented with a live video feed from a Luxonis OAK-D camera, is able to <span className="emphasis">localize</span> the weed within the frame using X and Y coordinates. In conjunction with a GPS, a python script is used to <span className="emphasis">calculate the coordinates</span> of the weed by reading <span className="emphasis">real-time data</span> from the GPS through the serial port. The model was tested for precision, recall, and mean average precision (mAP), with the best performing model having an mAP of approximately 62%. The final model was tested on a set of images to verify its accuracy and was able to detect weeds with an mAP of around 78%.</p>
            </div>
          </div>
          <hr />
          <div className="left-row">
            <div className="cv-col">
              <h2>YOLO Algorithm</h2>
              <p>YOLO (You Only Look Once) is a real-time object detection algorithm. It is a single neural network that is able to detect objects in an image and predict the class and bounding box coordinates of those objects. YOLO divides an image into a grid of cells and for each cell, it predicts a number of bounding boxes and the associated class probabilities. This allows YOLO to process an entire image in a single forward pass of the neural network, making it extremely fast compared to other object detection algorithms. Additionally, YOLO is able to handle multiple objects in a single image and can detect objects of different sizes.</p>
              <a href="https://github.com/ultralytics/yolov5/wiki/Train-Custom-Data" target="_blank" rel="noreferrer"><img src={Ultralytics} alt="Ultralytics Logo" className="small-image" /></a>
              <p>For this project, the <a href="https://ultralytics.com/yolov5" className="no-link" target="_blank" rel="noreferrer"><span className="emphasis">Ultralytics</span></a> repository was used. Ultralytics is a company that provides software and services for object detection using YOLO (You Only Look Once) algorithm. I used their implementation of YOLOv5s to train multiple models for my project. It is a user-friendly, easy to use and efficient tool that allows you to train object detection models with a high level of accuracy and speed. It also provides several pre-trained models that you can use as a starting point for your project.</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="cv-col">
              <h2>Training Process</h2>
              <p>The process of creating a custom model to detect specific objects involves several steps: gathering and organizing images, labeling the objects of interest, training the model, using the model to make predictions in the real world, and collecting examples of edge cases to improve the model. This process typically involves repeating these steps multiple times to continuously improve the model.</p>
            </div>
          </div>
          <div className="row">
            <div className="cv-col">
              <h3>Labeling</h3>
              <p><a href="https://universe.roboflow.com/precision-drone-spray/computer-vision-4svyf" className="no-link" target="_blank" rel="noreferrer"><span className="emphasis">Roboflow</span></a> was used to label waterhemp weeds for the project. The images for the project were provided by the Department of Soil and Crop Sciences and were taken using a DJI Phantom 4 drone. The images were then stitched together using Pix4DMapper. These images were divided into 100 separate images for the labeling process. The resulting dataset contained about 500 images that needed to be labeled. Using the annotation tools provided by Roboflow, bounding boxes were drawn around the waterhemp weeds in each image, as shown in the example provided. This process, known as image annotation, helped to identify the presence of waterhemp weeds in the images. Once the images were labeled, the labeled data could be exported for training the machine learning model.</p>
              <a href="https://roboflow.com/" target="_blank" rel="noreferrer"><img src={Roboflow} alt="Roboflow Logo" className="small-image-square"/></a>
              <img src={roboflowLabeling} alt="Example of labeling using Roboflow" className="large-image"/>
            </div>
          </div>
          <div className="cv-col">
            <h3>Training</h3>
          </div>
          <div className="row">
            <div className="cv-col">
              <img src={CurrentModelmAP} alt="First Model" className="large-image"/>
            </div>
            <div className="cv-col">
              <img src={CurrentModelmAP2} alt="Current model built on top first model" className="large-image"/>
            </div>
          </div>
          <p className="acenter"><BasicPopover /></p>
          <div className="row">
            <div className="cv-col">
              <p>The figure to the left shows a model trained from pretrained weights that are auto-downloaded from the latest YOLOv5 release of Ultralytics and used as the starting point for training a new model. After this model was trained and new weights were created, the new weights were used as a base to train the next model. This allows the new model to improve on previous knowledge and results in a more accurate model. After the new model is trained, the newly created weights are used as the starting point for training the next model, allowing for continuous improvement over time.</p>
            </div>
          </div>
          <div className="row">
            <div className="cv-col">
              <img src={modelIterations} alt="All model iterations." className="large-image"/>
              <p>Each training iteration was tracked using <a href="https://wandb.ai/site?utm_source=google&utm_medium=cpc&utm_campaign=Performance-Max&utm_content=site&utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_term=&utm_content={content}&gclid=CjwKCAiAhqCdBhB0EiwAH8M_Gpsy0GjYIPdMlexqkVHSONo-1PSJP5slp_Q0xWonQqIxETJeosDmDhoCWaoQAvD_BwE" target="_blank" rel="noreferrer" className="no-link"><span className="emphasis">Weights and Biases</span></a>. Above, you can see every time the training script was run on a set of labeled images to attempt to create the best model possible.</p>
            </div>
          </div>
          <div className="row">
            <div className="cv-col">
              <h3>Model Results and Accuracy</h3>
              <img src={examplePrediction} alt="Example prediction from model." className="large-image"/>
              <p>Using the Ultralytics repository, the model was used on a set of images to test the detection accuracy. This image shows an example of the resulting detection using the best model created. Each bounding box is a detected weed with the corresponding confidence score. The confidence score reflects how likely the box contains an object and how accurate the boundary box is.</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="cv-col">
              <h2>Deployment</h2>
              <p>In order to deploy the model, a case will be 3D-printed to fit all the components and secure them on the drone's platform. Once the necessary parts are secured on the drone, the microcontroller will be controlled via WiFi remotely. This allows the python script that communicates with the model and all the components to be ran when necessary.</p>
            </div>
          </div>
          <div className="row">
            <div className="cv-col">
              <h3>Computer Vision Parts</h3>
              <img src={CV_Components} alt="Computer Vision Components" className="large-image" />
              <p>These components are used in conjunction to implement the computer vision for the drone. A python script was written that communicates with all the pictured devices. Example code from DepthAI was used to interact with the Luxonis Oak Camera and to call the model. Additional code was added to read data from the Emlid Reach M+ GPS through the serial port and use the given coordinates of the drone to calculate the coordinates of the identified weeds.</p>
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
  
export default ComputerVision;