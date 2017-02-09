import React, { Component } from 'react';
import SubmitReview from './SubmitReview.js';
import ReviewsAccepted from './ReviewsAccepted.js';
import './App.css';
import * as firebase from "firebase";

var reviewsToShow = [];
var acceptedReviewsArray = [];
var reviewText = [];
var firebaseReviewsRefDone = false;

var firebaseReviewsRef = firebase.database().ref('users/');

    firebaseReviewsRef.on('value', function(snapshot) { 
    	acceptedReviewsArray = [];
    	reviewText = [];
	  	snapshot.forEach(function(childSnapshot) {	
        //if(childSnapshot.val().reviewsAccepted === '1'){
        	reviewText.push(childSnapshot.val().review);
        	acceptedReviewsArray.push(childSnapshot.val().reviewsAccepted);
        //}
    });
		
	console.log("FIREBASE DONE");
		  	//firebaseReviewsRefDone = true;
});

class Reviews extends Component {
	state = {
		reviewComponentToShow: 'Reviews',
		reviewText: "testReviewText",
		acceptedReviews: ["testAcceptedReviews"]
	}
	handleSubmitReviewButton = (e) => {
		this.setState({reviewComponentToShow: 'SubmitReview'});
		//this.setState({reviewText:reviewText});
		//this.setState({acceptedReviews:acceptedReviewsArray}); //Need because REVIEW component will update when clicking this button
	}
	handleCancelOrDoneSubmitReviewButton = (e) => {
		this.setState({reviewComponentToShow: 'Reviews'});
		reviewsToShow = [];
		this.setState({reviewText:reviewText});
		this.setState({acceptedReviews:acceptedReviewsArray}); //Need because REVIEW component will update when clicking this button
	}
	handleDoneSubmitReviewButton = (e) => {
		this.setState({reviewComponentToShow: 'SubmitReviewDone'});	
		//this.setState({reviewText:reviewText});
		//this.setState({acceptedReviews:acceptedReviewsArray}); //Need because REVIEW component will update when clicking this button
	}
	
	componentWillMount = (e) => {
		console.log("REVIEWS WILL MOUNT");
		//acceptedReviewsArray = [];
	    //reviewText = [];
	  	this.setState({reviewText:reviewText});
	  	this.setState({acceptedReviews:acceptedReviewsArray});
	  	firebaseReviewsRefDone = true;
	}
	componentWillUpdate = (e) =>{
		console.log("REVIEW WILL UPDATE");
		reviewsToShow = [];
	}
	componentDidUpdate = (e) =>{
		var iconClicked = document.getElementById('componentTitle');
    	iconClicked.classList.add("iconClickedAnimation");
    	console.log("REVIEWS HAS JUST UPDATED");  
    	//acceptedReviewsArray = [];
	    //reviewText = [];
	    reviewsToShow = [];
	}
	componentDidMount = (e) =>{
		
    	console.log("REVIEWS HAS JUST MOUNTED");  
    	//acceptedReviewsArray = [];
	    //reviewText = [];
	    reviewsToShow = [];
	}
	componentWillUnmount = (e) =>{
		console.log("REVIEW HAS JUST UNMOUNTED");
		reviewsToShow = [];
	}

    render() {
    	reviewsToShow = [];
    	console.log("REVIEWS HAS JUST RENDERED");

    	for (var n=0; n <= this.state.reviewText.length-1; n++){
    		reviewsToShow.push(<ReviewsAccepted key={n} reviewText={this.state.reviewText[n]}/>);
    	}
    	//acceptedReviewsArray = []; // Need because REVIEW component is being updated when clicking on submit, done, and cancel buttons
    	if(this.state.reviewComponentToShow === 'Reviews'){
	      	return (
		 		<div className="row col-md-12 text-center">
		      		<div className="CompTitle" >
						<p id="componentTitle">Reviews</p>	
					</div>
					<div className="ReviewsDiv col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
		      			 {reviewsToShow}
		      			 <button className="submitReviewButton" onClick={this.handleSubmitReviewButton}>Submit a review</button>
		      		</div>
		      		
	      		</div>
	    	);
	    }else if(this.state.reviewComponentToShow ==='SubmitReview'){
	    	return(
	    		<SubmitReview reviewToShow={this.handleCancelOrDoneSubmitReviewButton}/>
	    	)
	    }	
	    
  	}

}



export default Reviews;