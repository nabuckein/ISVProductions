import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import Contact from './Contact.js';
import Calendar from './Calendar.js';
import Pictures from './Pictures.js';
import Videos from './Videos.js';
//import Icons from './Icons.js';

var videosId = [];
var passedDailyMotionResponse = {};
var passedDailyMotionResponseList = [];


class Dynamic extends React.Component {

		static defaultProps = {
			componentToShow: "Welcome",
			clicked: false
		}
		
		/*
		shouldComponentUpdate(nextProps,nextState,nextContext){
			if (nextProps.componentToShow === this.props.componentToShow){
				return false;
			}
		}
		*/
		componentDidUpdate(){

    		if(passedDailyMotionResponseList !== undefined && this.props.componentToShow === 'Video' && videosId.length === 0){
    			//document.removeChild(document.getElementById("videosComp"));
    			
    			var elementClassNames = document.getElementsByClassName("VideosDiv");
    			
		    	for (var n=0; n<=passedDailyMotionResponseList.length-1; n++){
        			  videosId.push(passedDailyMotionResponseList[n].id);
		    	  	  var newPElement = document.createElement('p');
		      		  newPElement.id = "videoTitle" + n;  
		      		  newPElement.className = "videos-paragraphs";
		      		  var newPElementTitle = document.createTextNode(passedDailyMotionResponseList[n].title);
		      
		      		  if(passedDailyMotionResponseList[n].title !== undefined){
		       	  	  	newPElement.appendChild(newPElementTitle);
		        		elementClassNames[0].appendChild(newPElement);
	            	  }
		  		}		  		
  			}  

  			
  		}

		render(){

			passedDailyMotionResponseList = this.props.dailyMotionResponse.list;

			if(this.props.componentToShow === 'Video'){
				return(
					<Videos/>
		      	);
			}
			
			else if(this.props.componentToShow === 'Calendar'){
				videosId = [];
				return(
					<Calendar/>
		      	);
			}
			else if(this.props.componentToShow === 'Pictures'){
				videosId = [];
				return(
					<Pictures/>
		      	);
			}else if(this.props.componentToShow === 'Contact'){
				videosId = [];
				return(
					<Contact/>
			      	
		      	);
			}
	    	else if(this.props.componentToShow === "Welcome"){
	    		videosId = [];
			    return (
		       		<div className="WelcomeDiv row col-lg-12 col-md-12 col-sm-12 col-xs-12">
		        		<h2 className="dynamic-title-text-sizes"> Click on the icons to look at example videos or pictures of our work. At I. S. Productions we are always happy to show you what we can do.</h2>
		      	 	</div>
		    	);
			}
		}

}


export default Dynamic;





