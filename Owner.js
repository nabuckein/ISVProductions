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
	    firebaseRef.on('value', function(snapshot) {
	    	//var childKey = [];		    
		  	snapshot.forEach(function(childSnapshot) {
		        //var childKey.push(childSnapshot.key);
		        childDataReview.push(childSnapshot.val().review);
		        childDataFirstNameReview.push(childSnapshot.val().firstName);
		        childDataLastNameReview.push(childSnapshot.val().lastName);
		        childDataEmailReview.push(childSnapshot.val().email);
		    });

	  	});
	  	this.setState({reviewsArray:childDataReview});
		this.setState({reviewsFirstNameArray:childDataFirstNameReview});
		this.setState({reviewsLastNameArray:childDataLastNameReview});
		this.setState({reviewsEmailArray:childDataEmailReview});	     

	}


  	render() {
  		rows = [];  		
		for (var i=0; i <= this.state.reviewsArray.length-1; i++) {			
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
