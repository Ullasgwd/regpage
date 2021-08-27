import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Particles from 'react-particles-js';

function App() {
  return (

    <div className="App">
      <Form/>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 200
	        },
	        "size": {
	            "value": 5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} 
  
  height="150vh"
  style={{
   // background: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfL0U8XFVOImoWxHfl8qVe30yLnSQiZwqDQ&usqp=CAU")`,
    //backgroundRepeat:'no-repeat' ,
    //backgroundSize:'cover',
  
    
  }}
  />

    </div>

  );
}

export default App;
