
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.js';
import Dynamic from './Dynamic.js';

var dailyMotionResponse = {test:"test"};

class Icons extends Component {

  //constructor(props, context) {   //getInitialState() deprecated in ECS6
    //super(props, context);
  state = {
    activeComponent: 'Welcome',
    show: true
  }  

  componentWillMount(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {          
        dailyMotionResponse = this.response;
      }
      else{
    
      }
    };
    xhttp.open("GET",'https://api.dailymotion.com/user/hd_sz/videos',true);
    xhttp.responseType = "json";
    xhttp.send();         
  }

  handleVideoClick = (e) => {
    this.setState({activeComponent:'Video'}); 
    
  }

  handleCalendarClick = (e) => {
    this.setState({activeComponent:'Calendar'});
  }

  handlePicturesClick = (e) => {
    this.setState({activeComponent:'Pictures'});
  }

  handleContactClick = (e) => {
    this.setState({activeComponent:'Contact'});
  }

  render(){    

      
    return (      
      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="IconsDiv row col-lg-2 col-md-2 col-sm-2 col-xs-2">          
          <div className="iconVideo" id="VideosIcon">            
            <span className="glyphicon glyphicon-facetime-video glyphicon-tablet-portrait glyphicon-phone-only" aria-hidden="true" id="testID" onClick={this.handleVideoClick}></span>
            
          </div>

          <div className="iconVideo" id="CalendarIcon">
            <span className="glyphicon glyphicon-calendar glyphicon-tablet-portrait glyphicon-phone-only" aria-hidden="true" onClick={this.handleCalendarClick}></span>
          </div>  

          <div className="iconVideo" id="PicturesIcon">
            <span className="glyphicon glyphicon-picture glyphicon-tablet-portrait glyphicon-phone-only" aria-hidden="true" onClick={this.handlePicturesClick}></span>
          </div>  

          <div className="iconVideo" id="ContactIcon">
            <span className="glyphicon glyphicon-envelope glyphicon-tablet-portrait glyphicon-phone-only" aria-hidden="true" onClick={this.handleContactClick}></span>
          </div> 
        </div>     

        <div className="DynamicDiv row col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <Dynamic componentToShow={this.state.activeComponent} dailyMotionResponse={dailyMotionResponse} testText="SADFDSAFDSAFDSAFDSAFDSAFDSAFDSAFDSAFDSAFDS"/>
        </div>

      </div>
    );

  }

}

export default Icons;

ReactDOM.render(
  <Icons />,
    document.getElementById('icons')
);