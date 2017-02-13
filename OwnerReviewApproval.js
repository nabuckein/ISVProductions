import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";



class OwnerReviewApproval extends Component {

  state = {
    hideThisComponent: false,
    review: "testReviews",
    firstName : "testFirstName",
    lastName : "testLastName",
    email: "testEmail",
    acceptedReviewInFirebase: "testAcceptedReviewInFirebase",
    rejectedReviewInFirebase: "testRejectedReviewInFirebase"
  }

  componentWillMount = (e) =>{
    var userToRenderFirstName ="testingUserToRenderFirstName";
    var userToRenderLastName ="testingUserToRenderLastName";
    var userToRenderEmail ="testingUserToRenderEmail";
    var userToRenderReview ="testingUserToRenderReview";

    var firebaseRef = firebase.database().ref('users/' + this.props.userFirstName); //Maybe create an ID to use: this.props.userId
    firebaseRef.on('value',function(snapshot){
      var childKey = snapshot.val();
      userToRenderFirstName = childKey.firstName;  
      userToRenderLastName = childKey.lastName;
      userToRenderEmail = childKey.email;   
      userToRenderReview = childKey.reviewAccepted;
    });    
    
    this.setState({firstName:userToRenderFirstName});
    this.setState({lastName:userToRenderLastName});
    this.setState({email:userToRenderEmail});
    this.setState({review:userToRenderReview});
  } 

  render() {
    //if(this.state.hideThisComponent === false){
    	return(
        <div className="reviewsApprovalDiv">
        	<p className="submittedReviewFirstNameParagraph">{this.state.firstName}</p>
        	<p className="submittedReviewLastNameParagraph">{this.state.lastName}</p>
        	<p className="submittedReviewParagraph">{this.state.review}</p>
          <button id={"approvedButton" + this.props.userFirstName} className="approveReviewButton" onClick={this.props.handleApproveClick}>Approve</button>
          <button id={"rejectedButton" + this.props.userFirstName} className="rejectReviewButton" onClick={this.props.handleRejectClick}>Reject</button>
          <button className="emailReviewButton">Email</button>
        </div>
      );
    /*}
    else{
      return(null);
    }*/
  }

}



export default OwnerReviewApproval;
