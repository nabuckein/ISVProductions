import React, { Component } from 'react';
import './App.css';
	
class Welcome extends Component {
  render() {
	    return (
	    	<div className="text-center">
		    	<div className="CompTitle" >
		 			<p id="componentTitle">Welcome!</p>	
		 		</div>
		 		<div className="WelcomeDiv col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-offset-3 col-xs-6">
		 			<p className="WelcomeParagraphs">Click on the icons to look at example videos or pictures of our work. At I. S. Productions we are always happy to show you what we can do.</p>
		 		</div>	      	
		    </div>
	      


	      
	    );
	
  }

}


export default Welcome;
