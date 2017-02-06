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

var arrayOfReviewsFirstName = [];
var arrayOfReviewsLastName = [];
var arrayOfReviewsEmail = [];
var arrayOfReviews = [];
var rows = [];

var firebaseRef = firebase.database().ref('users/');
	    firebaseRef.on('value', function(snapshot) {
	  	snapshot.forEach(function(childSnapshot) {
	        var childKey = childSnapshot.key;
	        var childData = childSnapshot.val();
	        userInfo.firstName = childKey;
	        arrayOfReviewsFirstName.push(childData.firstName);
	        arrayOfReviewsLastName.push(childData.lastName);
	        arrayOfReviewsEmail.push(childData.email);
	        arrayOfReviews.push(childData.review);
	      //});  
	    	});
	  	});

class Owner extends Component {

	componentWillUpdate = (e) =>{
		arrayOfReviewsFirstName = [];
		arrayOfReviewsLastName = [];
		arrayOfReviewsEmail = [];
		arrayOfReviews = [];
		rows = [];

		
	}

  render() {
  		rows = [];
		for (var i=0; i <= arrayOfReviews.length-1; i++) {			
		    rows.push(<OwnerReviewApproval userFirstName={arrayOfReviewsFirstName[i]} userLastName={arrayOfReviewsLastName[i]} userEmail={arrayOfReviewsEmail[i]} userReview={arrayOfReviews[i]}/>
			);
		}
	    return (
	      <div>
	        <div className="CompTitle">
	          <p id="componentTitle">Pending Reviews</p> 
	        </div>
	        <div className="reviewsContainer text-center" id="approveAndRemoveButtons">	        	
 				{rows}
 			</div>
	      </div>
	    );	
  }
}

export default Owner;
