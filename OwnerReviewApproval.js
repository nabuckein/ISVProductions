import React, { Component } from 'react';
import './App.css';
import * as firebase from "firebase";



class OwnerReviewApproval extends Component {

  state = {
    hideThisComponent: false,
    review: "testReviews",
    firstName : "testFirstName",
    lastName : "testLastName",
    email: "testEmail"
  }

  componentWillMount = (e) =>{
    var userToRenderFirstName ="testingUserToRenderFirstName";
    var userToRenderLastName ="testingUserToRenderLastName";
    var userToRenderEmail ="testingUserToRenderEmail";
    var userToRenderReview ="testingUserToRenderReview";

    var firebaseRef = firebase.database().ref('users/' + this.props.userFirstName);
    firebaseRef.on('value',function(snapshot){
      var childKey = snapshot.val();
      userToRenderFirstName = childKey.firstName;  
      userToRenderLastName = childKey.lastName;
      userToRenderEmail = childKey.email;   
      userToRenderReview = childKey.review;
    });    
    this.setState({firstName:userToRenderFirstName});
    this.setState({lastName:userToRenderLastName});
    this.setState({email:userToRenderEmail});
    this.setState({review:userToRenderReview});
  }

  handleApproveClick = (e) => {
    this.setState({hideThisComponent:true}); 
    firebase.database().ref('users/' + this.props.userFirstName).remove();
  }
  

  render() {
    if(this.state.hideThisComponent === false){
    	return(
        <div className="reviewsApprovalDiv">
        	<p className="submittedReviewFirstNameParagraph">{this.state.firstName}</p>
        	<p className="submittedReviewLastNameParagraph">{this.state.lastName}</p>
        	<p className="submittedReviewParagraph">{this.state.review}</p>
          <button className="approveReviewButton" onClick={this.handleApproveClick}>Approve</button>
          <button className="rejectReviewButton">Reject</button>
          <button className="emailReviewButton">Email</button>
        </div>
      );
    }
    else{
      return(null);
    }
  }

}



export default OwnerReviewApproval;
