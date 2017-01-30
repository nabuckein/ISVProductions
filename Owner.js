import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";


//retrievedFirstName = "retrievedFirstName";

class Owner extends Component {

  state = {
    retrievedFirstName: 'null'
  }

  componentWillMount = (e) =>{
    //var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + 'test').once('value').then(function(snapshot) {
      window.username = snapshot.val().firstName;
      // ...
      //console.log(username);
      
    });
    this.setState({retrievedFirstName: window.username});
    console.log(this.state.retrievedFirstName);
  }
  render() {
    
    return (
      <div>
        <div className="CompTitle" >
          <p id="componentTitle">Public Relations</p> 
        </div>
        <div className="reviewsApprovalDiv">
          <p className="reviewsApprovalParagraphs">{this.state.retrievedFirstName}</p>
        </div>
      </div>
    );
  }

}



export default Owner;
