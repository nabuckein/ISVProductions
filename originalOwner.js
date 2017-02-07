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

      snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      userInfo.firstName = childKey;
      arrayOfReviews.push(<div className="reviewsApprovalDiv"><p className="submittedReviewParagraph">{"Name: " + childKey + ", E-Mail Address: " + childData.email}</p>
        <button className="approveReviewButton" id={childKey}>Approve</button>
        <button className="rejectReviewButton">Reject</button></div>);
      });

      
});

class Owner extends Component {

  state = {
    refreshReviewsList: false
  }

  
  componentDidMount = (e) => {

    document.getElementById("approveAndRemoveButtons").addEventListener('click',function(e){
      
      var userApproved = e.target.id;
      //firebase.database().ref('/users/' + userApproved).remove();
      //arrayOfReviews.pop(arrayOfReviews[0]);
      console.log(arrayOfReviews);
      console.log(e.target.parentNode.className);
      if(e.target.parentNode.className === "reviewsApprovalDiv"){ //Works for making reviewsApprovalDiv disappear on a click
        console.log(e.target.parentNode);
        e.target.parentNode.style.opacity = 0;
        e.target.parentNode.style.height = 0;
      }
      
    });

  }
  
  render() {
  	
	    return (
	      <div>
	        <div className="CompTitle">
	          <p id="componentTitle">Pending Reviews</p> 
	        </div>
	        <div className="reviewsContainer text-center" id="approveAndRemoveButtons">
	        	{arrayOfReviews}
	        </div>
	      </div>
	    );


	
  }

}



export default Owner;
