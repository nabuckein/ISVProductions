
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Menu from './Menu.js';
import Dynamic from './Dynamic.js';

var dailyMotionResponse = {test:"test"};

class Icons extends Component {

  //constructor(props, context) {   //getInitialState() deprecated in ECS6
    //super(props, context);
  //constructor(props) {
   //super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleVideoHover = this.handleVideoHover.bind(this);
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

  handleMenuClick = (e) =>{

    var menu = document.getElementById('menu');
    var iconVideoClass = document.getElementsByClassName('iconVideo');
    //console.log(iconVideoClass[1]);
   


    menu.classList.remove('slideMenuFromLeft');
    menu.classList.add('slideMenuToLeft');
    
    for (var n=0; n<=iconVideoClass.length-1; n++){
      if(iconVideoClass[n].classList.contains('initialHide')){
        iconVideoClass[n].classList.remove('initialHide')
        iconVideoClass[n].classList.add('showIconsWithOpacity');
      }      
      else{
        iconVideoClass[n].classList.remove('hideIconsWithOpacity');
      }
    }
    

  }

  handleCollapseClick = (e) =>{

    var menu = document.getElementById('menu');
    var iconVideoClass = document.getElementsByClassName('iconVideo');
    

    menu.classList.remove('slideMenuToLeft');
    menu.classList.add('slideMenuFromLeft');
    
    for (var i=0; i<=iconVideoClass.length-1; i++){
      //if(iconVideoClass[i].classList.contains('showIconsWithOpacity')){

        iconVideoClass[i].classList.remove('showIconsWithOpacity')
        iconVideoClass[i].classList.add('hideIconsWithOpacity');


      /*}      
      else{
        iconVideoClass[i].classList.remove('hideIconsWithOpacity');
      }*/
    }
   

  }

  handleVideoClick = (e) => {
    this.setState({activeComponent:'Video'});    

  }
  handleVideoMouseEnter = (e) => {
    var iconID = e.target.id;
    var elementHovered = document.getElementById(iconID);
    if(!elementHovered.classList.contains('iconsMouseEnter')){
      elementHovered.classList.add("iconsMouseEnter");
      elementHovered.classList.remove("iconsMouseLeave");
    }
  }

  handleVideoMouseLeave = (e) => {
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

  handlePicturesClick = (e) => {
    this.setState({activeComponent:'Pictures'});
  }

  handleContactClick = (e) => {
    this.setState({activeComponent:'Contact'});
  }

  render(){    

      
    return (      
      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {/*<div id="menu" className="MenuDiv text-center" onClick={this.handleMenuClick}>
          <Menu />
        </div>*/}

        <div id="icons" className="IconsDiv row col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">          
          <div className="iconVideo  " id="VideosIcon" onMouseEnter={this.handleVideoMouseEnter} onMouseLeave={this.handleVideoMouseLeave}>            
            <h1 className="iconsH1" aria-hidden="true" id="videoIcon" onClick={this.handleVideoClick}>VIDEOS</h1>
            
          </div>

          <div className="iconVideo " id="CalendarIcon" onMouseEnter={this.handleVideoMouseEnter} onMouseLeave={this.handleVideoMouseLeave}>
            <h1 className="iconsH1" aria-hidden="true" id="calendarIcon" onClick={this.handleCalendarClick}>CALENDAR</h1>
          </div>  

          <div className="iconVideo " id="PicturesIcon" onMouseEnter={this.handleVideoMouseEnter} onMouseLeave={this.handleVideoMouseLeave}>
            <h1 className="iconsH1" aria-hidden="true" id="picturesIcon" onClick={this.handlePicturesClick}>PICTURES</h1>
          </div>  

          <div className="iconVideo " id="ContactIcon" onMouseEnter={this.handleVideoMouseEnter} onMouseLeave={this.handleVideoMouseLeave}>
            <h1 className="iconsH1" aria-hidden="true" id="contactIcon" onClick={this.handleContactClick}>CONTACTS</h1>
          </div> 
          <div>
            <p className="iconVideo initialHide" id="collapseIcons" onClick={this.handleCollapseClick}> Collapse </p>
          </div>
        </div>     

        <div className="DynamicDiv row col-lg-10 col-md-10 col-sm-10 col-xs-10 text-center">
          <Dynamic componentToShow={this.state.activeComponent} dailyMotionResponse={dailyMotionResponse}/>
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
