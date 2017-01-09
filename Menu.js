import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';

class Menu extends Component{

	state = {
		menuClicked : false
	}

	handleMenuClick = (e) => {
		this.setState({menuClicked:true});
	}
	
	static defaultProps = {
		showMenu: true
	}

	render(){
			return(
				<div>
					<p id="menuTab" onClick={this.handleMenuClick}> > MENU > </p>
				</div>
			);
		

	}



}

export default Menu;