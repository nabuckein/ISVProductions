import React, { Component } from 'react';
import './Owner.css';
import OwnerReviewApproval from './OwnerReviewApproval.js';
import * as firebase from "firebase";

var rows = [];


class Owner extends Component {

	state = {
		reviewsArray: ["test1"],
		reviewsFirstNameArray: ["test2"],
		reviewsLastNameArray: ["test3"],
		reviewsEmailArray: ["test4"]
	}
	componentWillMount = (e) =>{
		var childDataReview= [];
		var childDataFirstNameReview= [];
		var childDataLastNameReview= [];
		var childDataEmailReview= [];	
		var firebaseRef = firebase.database().ref('users/');

	    firebaseRef.on('value', function(snapshot) { //Request to Firebase the users
	    	//var childKey = [];		    
		  	snapshot.forEach(function(childSnapshot) {	//Push each user values from the request onto different arrays
		        //var childKey.push(childSnapshot.key);
		        childDataReview.push(childSnapshot.val().review);
		        childDataFirstNameReview.push(childSnapshot.val().firstName);
		        childDataLastNameReview.push(childSnapshot.val().lastName);
		        childDataEmailReview.push(childSnapshot.val().email);
		    });

	  	});

	  	this.setState({reviewsArray:childDataReview}); //Use arrays obtained on previous firebase request to update state and then pass the states as props.
		this.setState({reviewsFirstNameArray:childDataFirstNameReview});
		this.setState({reviewsLastNameArray:childDataLastNameReview});
		this.setState({reviewsEmailArray:childDataEmailReview});	 
	}

  	render() {
  		rows = [];  		
		for (var i=0; i <= this.state.reviewsArray.length-1; i++) {			//Need this FOR loop to create amount (depends on what's in Firebase) of OwnerReviewApproval components
		    rows.push(<OwnerReviewApproval userFirstName={this.state.reviewsFirstNameArray[i]} userLastName={this.state.reviewsLastNameArray[i]} userEmail={this.state.reviewsEmailArray[i]} userReview={this.state.reviewsArray[i]}/>
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
