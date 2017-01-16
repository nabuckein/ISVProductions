import React, { Component } from 'react';
import './NavigationBar.css';
	
class NavigationBar extends React.Component {
  render() {
	    return (
	    	<div id="fixedNavBarForSmallerScreens" className="fixedNavBar">         
			  
			    <h3 className="navTitle">{this.props.title}</h3>

			</div> 	      
	    );
	
  }

}


export default NavigationBar;
