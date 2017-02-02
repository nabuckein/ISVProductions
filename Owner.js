import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";


//retrievedFirstName = "retrievedFirstName";
var userInfo = {
	firstName : 'empty',
	lastName : 'empty',
	email: 'empty'
};

firebase.database().ref('/users/').once('value').then(function(snapshot) {
      userInfo.firstName = snapshot.val().firstName;
      // ...
      
      snapshot.forEach(function(childSnapshot) {
	    var childKey = childSnapshot.key;
	    var childData = childSnapshot.val();
	    // ...
	    console.log("Key: " + childKey + ", Value: " + childData);
	  });

      
});

class Owner extends Component {
  
  componentWillMount(){

  }
  render() {
  	
    return (
      <div>
        <div className="CompTitle" >
          <p id="componentTitle">Public Relations</p> 
        </div>
        <div className="reviewsApprovalDiv">
          <p className="reviewsApprovalParagraphs">{userInfo.firstName}</p>
        </div>
      </div>
    );
  }

}



export default Owner;
