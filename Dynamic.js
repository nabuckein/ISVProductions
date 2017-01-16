import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import Welcome from './Welcome.js';
import Contact from './Contact.js';
import Calendar from './Calendar.js';
import Pictures from './Pictures.js';
import Videos from './Videos.js';
//import Icons from './Icons.js';

var videosId = [];
//var passedDailyMotionResponse = {};
var passedDailyMotionResponseList = [];



class Dynamic extends Component {

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

  			var iconClicked = document.getElementById('componentTitle');
    			iconClicked.classList.add("iconClickedAnimation");

    		


  			
  		}

		render(){
			passedDailyMotionResponseList = this.props.dailyMotionResponse.list;

			if(this.props.componentToShow === 'Video'){
				return(
					<Videos passedDailyMotionResponseListFromIconsJS={passedDailyMotionResponseList}/>
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
		       		<Welcome/>
		    	);
			}
		}

}


export default Dynamic;





