import React, { Component } from 'react';
import './App.css';
import './index.css';

class Dynamic extends Component {
  render() {
  	if(this.props.showWelcomeComponent === 0){
	    return (
	      <div className="WelcomeDiv">
	        <h2 className="dynamic-title-text-sizes"> Click on the icons to look at example videos or pictures of our work. At I. S. Productions we are always happy to show you what we can do.</h2>
	      </div>
	    );
	}else{
		return(
		  <div className="WelcomeDiv">
	        <h2 className="dynamic-title-text-sizes"> showWelcomeComponent is FALSE !</h2>
	      </div>

		);
	}
  }

}


export default Dynamic;
