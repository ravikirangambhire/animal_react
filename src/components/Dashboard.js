import React from 'react';
import { Component } from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
    state = {  };
    

    render() { 
        return ( 
         <div>
        
          <img className = "image" src= {"https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"} alt="Logo" />
          <h4 className="text">Name: Ramesh </h4>
          <h4 className= "text"> Address: bsdbj hsdh </h4>
          <h4 className="text"> Phone: 8797656798 </h4>
          <button className="text"> Edit</button>
          <h2>Your Animals</h2>
          <img className= "image" src ={"https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"} alt="Logo" />
          <button> Edit</button>
         </div>
        );
    }
}
 
export default Dashboard;