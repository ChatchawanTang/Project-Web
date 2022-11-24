import React from 'react';
import { BrowserRouter,Routes ,Route,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Nav';
import Home from './Home';

// Root Of Equations
import Bisection from './RootEquation/Bisection';
import FalsePosition from './RootEquation/FalsePosition';
import OnePointInteraction from './RootEquation/OnepointInteraction';
import Newton from './RootEquation/NewtonRaphson';
import Secant from './RootEquation/Secant';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Bisection' element={<Bisection/>}></Route>
        <Route path='/FalsePosition' element={<FalsePosition/>}></Route>
        <Route path='/OnePointInteraction' element={<OnePointInteraction/>}></Route>
        <Route path='/NewtonRaphson' element={<Newton/>}></Route>
        <Route path='/Secant' element={<Secant/>}></Route>
        </Routes>
    </div>
  );
}

export default App;