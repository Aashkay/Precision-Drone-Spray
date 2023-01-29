import React from 'react';
import './style.css';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Frontpage from './Frontpage';
import Frontpage from './views/Frontpage';
import Team from './views/Team';
import ComputerVision from './views/ComputerVision';
import UserInterface from './views/UserInterface';

function App() {
  return (
    // <>
    //   <Frontpage />
    // </>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for frontpage component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path='/' element={<Frontpage />} />
            
          {/* This route is for team component 
          with exact path "/team", in component 
          props we passes the imported component*/}
          <Route path='/team' element={<Team />} />
            
          {/* This route is for computerVision component
          with exact path "/computervision", in 
          component props we passes the imported component*/}
          <Route path='/computervision' element={<ComputerVision />} />

          {/* This route is for userinterface component
          with exact path "/userinterface", in 
          component props we passes the imported component*/}
          <Route path='/userinterface' element={<UserInterface />} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

