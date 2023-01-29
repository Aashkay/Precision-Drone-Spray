import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Frontpage from './views/Frontpage';
import Team from './views/Team';
import ComputerVision from './views/ComputerVision';
import UserInterface from './views/UserInterface';
/*import Home from './views/Home/Home';
import Home2 from './views/Home2/Home2';
import Home3 from './views/Home3/Home3';*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontpage/>
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path: "/computervision",
    element: <ComputerVision/>
  },
  {
    path: "/userinterface",
    element: <UserInterface/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
