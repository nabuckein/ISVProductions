
import * as firebase from "firebase";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Menu from './Menu.js';
import Dynamic from './Dynamic.js';
import NavigationBar from './NavigationBar.js';

var dailyMotionResponse = {test:"test"};

//Initialize Firebase

var config = {
        apiKey: "AIzaSyDvvApUyZHysaiGjsXs3zDjlE0eCPxhyi8",
        authDomain: "isvproductions-70e87.firebaseapp.com",
        databaseURL: "https://isvproductions-70e87.firebaseio.com",
        storageBucket: "isvproductions-70e87.appspot.com",
        messagingSenderId: "202300622003"
      };

firebase.initializeApp(config);

class Icons extends React.Component {

  //constructor(props, context) {   //getInitialState() deprecated in ECS6
    //super(props, context);
  //}

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


  handleCollapseClick = (e) =>{

    var menu = document.getElementById('menu');
    var iconVideoClass = document.getElementsByClassName('iconVideo');
    menu.classList.remove('slideMenuToLeft');
    menu.classList.add('slideMenuFromLeft');    
    for (var i=0; i<=iconVideoClass.length-1; i++){
        iconVideoClass[i].classList.remove('showIconsWithOpacity')
        iconVideoClass[i].classList.add('hideIconsWithOpacity');
    }
  }

  handleVideoClick = (e) => {
    this.setState({activeComponent:'Video'});    
    console.log("CLICKED!");
  }


  handleTabMouseEnter = (e) => {
    var iconID = e.target.id;
    var elementHovered = document.getElementById(iconID);
    if(!elementHovered.classList.contains('iconsMouseEnter')){
      elementHovered.classList.add("iconsMouseEnter");
      elementHovered.classList.remove("iconsMouseLeave");
    }
  }

  handleTabMouseLeave = (e) => {
    var iconID = e.target.id;
    var elementHovered = document.getElementById(iconID);
    if(!elementHovered.classList.contains('iconsMouseLeave')){
      elementHovered.classList.add("iconsMouseLeave");
      elementHovered.classList.remove("iconsMouseEnter");
    }
  }

  handleCalendarClick = (e) => {
    this.setState({activeComponent:'Calendar'});
  }

  handleReviewsClick = (e) => {
    this.setState({activeComponent:'Reviews'});
  }

  handleContactClick = (e) => {
    this.setState({activeComponent:'Contact'});
  }

  render(){    

    if(window.innerWidth<=400){

      return (      
        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div id="fixedNavBarForSmallerScreens" className="fixedNavBar">   
            <div className="navTitleDiv text-center">       
              <NavigationBar onClick={this.handleVideoClick} title="Videos" />
              <NavigationBar onClick={this.handleCalendarClick} title="Calendar" />
              <NavigationBar onClick={this.handleReviewsClick} title="Reviews" />
              <NavigationBar onClick={this.handleContactClick} title="Contact" />
            </div>
          </div>     

          <div className="DynamicDiv row col-sm-12 col-xs-12 text-center">
            <Dynamic componentToShow={this.state.activeComponent} dailyMotionResponse={dailyMotionResponse}/>
          </div>

        </div>
      );

    }
    else{
      return (      
        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {/*<div id="menu" className="MenuDiv text-center" onClick={this.handleMenuClick}>
            <Menu />
          </div>*/}

          <div id="icons" className="IconsDiv row col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">          
            <div className="iconVideo  " id="VideosIcon" onMouseEnter={this.handleTabMouseEnter} onMouseLeave={this.handleTabMouseLeave}>            
              <h1 className="iconsH1" aria-hidden="true" id="videoIcon" onClick={this.handleVideoClick}>VIDEOS</h1>            
            </div>

            <div className="iconVideo " id="CalendarIcon" onMouseEnter={this.handleTabMouseEnter} onMouseLeave={this.handleTabMouseLeave}>
              <h1 className="iconsH1" aria-hidden="true" id="calendarIcon" onClick={this.handleCalendarClick}>CALENDAR</h1>
            </div>  

            <div className="iconVideo " id="ReviewsIcon" onMouseEnter={this.handleTabMouseEnter} onMouseLeave={this.handleTabMouseLeave}>
              <h1 className="iconsH1" aria-hidden="true" id="reviewsIcon" onClick={this.handleReviewsClick}>REVIEWS</h1>
            </div>  

            <div className="iconVideo " id="ContactIcon" onMouseEnter={this.handleTabMouseEnter} onMouseLeave={this.handleTabMouseLeave}>
              <h1 className="iconsH1" aria-hidden="true" id="contactIcon" onClick={this.handleContactClick}>CONTACT</h1>
            </div> 
            <div>
              <p className="iconVideo initialHide" id="collapseIcons" onClick={this.handleCollapseClick}> Collapse </p>
            </div>
          </div>     

          <div className="DynamicDiv row col-lg-10 col-md-10 text-center">
            <Dynamic componentToShow={this.state.activeComponent} dailyMotionResponse={dailyMotionResponse}/>
          </div>

        </div>
      );
    }

  }

}

export default Icons;


ReactDOM.render(
  <Icons />,
    document.getElementById('icons')
);
