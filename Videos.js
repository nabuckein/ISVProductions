import React, { Component } from 'react';
import './App.css';

class Videos extends React.Component {

  	static defaultProps = {
			passedDailyMotionResponseListFromIconsJS : "response has not been received from Dynamic.js"
	}

    handleVideoClick = (e) => {
    	var elementClickedId = e.target.id;
    	var videoClickedPos = elementClickedId.substr(10,1);
    	var passedListOfIDsFromDailyMotion = this.props.passedDailyMotionResponseListFromIconsJS;
 		var request = new XMLHttpRequest();
  		request.onreadystatechange = function() {
        	if (this.readyState === 4 && this.status === 200) {          
        		//console.log(this.response);
        		window.open(this.response.url,"","width=800,height=460,menubar=no,titlebar=no,status=no,scrollbar=no");
      		}
      		else{
    			console.log("ERROR: Something went wrong with API request for url. Request status code: " + this.status);
      		}
    	};
	    request.open("GET",'https://api.dailymotion.com/video/' + passedListOfIDsFromDailyMotion[videoClickedPos].id + "?fields=url",true);
	    request.responseType = "json";
	    request.send(); 
	}


	render() {
	    return (
		    <div>
		    	<div className="CompTitle" >
		 			<p id="componentTitle">Videos</p>	
		 		</div>
		 		<div className="VideosDiv" onClick={this.handleVideoClick}>

		 		</div>	      	
		    </div>
	    );
  	}

}



export default Videos;