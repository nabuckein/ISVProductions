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
      });  
});

class Owner extends Component {

  state = {
    refreshReviewsList: false,
    reviews: arrayOfReviews[0],
    firstNames : arrayOfReviewsFirstName,
    lastNames : arrayOfReviewsLastName,
    emails: arrayOfReviewsEmail
  }

  handleApproveClick = (e) =>{
    arrayOfReviews.pop();
    console.log(arrayOfReviews);
    this.setState({reviews:arrayOfReviews[1]});
  }

  render() {
  	
	    return (
	      <div>
	        <div className="CompTitle">
	          <p id="componentTitle">Pending Reviews</p> 
	        </div>
	        <div className="reviewsContainer text-center" id="approveAndRemoveButtons">	        	
            <OwnerReviewApproval approveHandler={this.handleApproveClick} firstName={this.state.reviews} lastName={arrayOfReviewsLastName[0]} review={arrayOfReviews[0]}/>
            <OwnerReviewApproval firstName={arrayOfReviewsFirstName[1]} lastName={arrayOfReviewsLastName[1]} review={arrayOfReviews[1]}/>
	        </div>
	      </div>
	    );


	
  }

}



export default Owner;
