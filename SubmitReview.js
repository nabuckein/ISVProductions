import React, { Component } from 'react';
import './App.css';

import * as firebase from "firebase";

var config = {
			        apiKey: "AIzaSyDvvApUyZHysaiGjsXs3zDjlE0eCPxhyi8",
			        authDomain: "isvproductions-70e87.firebaseapp.com",
			        databaseURL: "https://isvproductions-70e87.firebaseio.com",
			        storageBucket: "isvproductions-70e87.appspot.com",
			        messagingSenderId: "202300622003"
			      };
firebase.initializeApp(config);

class SubmitReview extends Component {

	componentDidUpdate(){
		
		
	}
	handleSubmitDone(){		
		var usersFirstName = document.getElementById("usersFirstName").value;
		var usersLastName = document.getElementById("usersLastName").value;
 		var usersEmail = document.getElementById("usersEmail").value;
 		var usersReview = document.getElementById("usersReview").value;


		
		if(usersEmail !== "" && usersFirstName !== "" && usersLastName !== "" && usersReview !== ""){
			console.log(usersEmail);
			//function writeUserData(userId,email){
				firebase.database().ref('users/' + "test").set({
				    firstName: usersFirstName,
				    lastName: usersLastName,
				    email: usersEmail,
				    review: usersReview
				}).catch(function(error){
				  	console.log(error);
				});
			//}
		}
	}
	
  	render() {
	    return (
			<div className="row col-md-12 text-center">
				
		      	<div className="CompTitle" >
					<p id="componentTitle">Reviews</p>	
				</div>
				<div className="SubmitReviewsDiv col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 text-center">
					<div className="text-center">
		      		 <p className="submitReviewParagraph col-lg-12 col-md-12"> Enter a review and hit 'Done' button to submit it: </p>		
		      		 <input className="submitReviewInput submitReviewInputText col-lg-offset-2 col-lg-8" id="usersReview" type="text" placeholder="Enter your review here."></input>
		      		 <input className="submitReviewInput submitReviewInputUserInfo col-lg-offset-3 col-lg-6" id="usersFirstName" type="text" placeholder="Enter your first name."></input>
		      		 <input className="submitReviewInput submitReviewInputUserInfo col-lg-offset-3 col-lg-6" id="usersLastName" type="text" placeholder="Enter your last name."></input>
		      		 <input className="submitReviewInput submitReviewInputUserInfo col-lg-offset-3 col-lg-6 col-lg-offset-3" id="usersEmail" type="text" placeholder="Enter your e-mail address."></input>
		      		</div>
		      		 <div className="cancelAndDoneButtons">
		      		 	<button className="cancelReviewButton" onClick={this.props.reviewToShow}>Cancel</button>
		      		 	<button className="doneReviewButton" onClick={this.handleSubmitDone}>Done</button>
		      		 </div>
		      	</div>
	      	</div>
	    );	
  }

}



export default SubmitReview;