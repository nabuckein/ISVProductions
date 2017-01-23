import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';

class MenuWrapper extends Component{

	state = {
		menuClicked : false
	}

	
	static defaultProps = {
		showMenu: true
	}
	handleMenuClick = (e) => {
		this.setState({menuClicked:true});
	}
	

	render(){
		if(this.props.showMenu === true){
			return(
				<div>
					<p id="menuTab" onClick={this.handleMenuClick}>MENU</p>
				</div>
			);
		}else{
			return(
				<div>
					

				</div>
			);
		}

	}



}

export default MenuWrapper;