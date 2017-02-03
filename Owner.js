import React, { Component } from 'react';
import './Owner.css';
import OwnerReviewApproval from './OwnerReviewApproval.js';
import * as firebase from "firebase";


//retrievedFirstName = "retrievedFirstName";
var userInfo = {
	firstName : 'empty',
	lastName : 'empty',
	email: 'empty'
};

var arrayOfReviews = [];


firebase.database().ref('/users/').once('value').then(function(snapshot) {
      userInfo.firstName = snapshot.val().firstName;
      // ...
      
      snapshot.forEach(function(childSnapshot) {
	    var childKey = childSnapshot.key;
	    var childData = childSnapshot.val();
	    // ...
	    //console.log("Key: " + childKey + ", Value: " + childData);
	    arrayOfReviews.push(<p className="submittedReviewParagraph">{"Name: " + childKey + ", E-Mail Address: " + childData.email}</p>,
	    	<button className="approveReviewButton">Approve</button>,
	    	<button className="rejectReviewButton">Reject</button>);
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
	        	{arrayOfReviews}
	        </div>
	      </div>
	    );

	
  }

}



export default Owner;
