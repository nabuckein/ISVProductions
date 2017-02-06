import React, { Component } from 'react';
import './App.css';

class OwnerReviewApproval extends Component {

  

  render() {
  	return(
    <div className="reviewsApprovalDiv">
    	<p className="submittedReviewFirstNameParagraph">{this.props.firstName}</p>
    	<p className="submittedReviewLastNameParagraph">{this.props.lastName}</p>
    	<p className="submittedReviewParagraph">{this.props.review}</p>
        <button className="approveReviewButton" onClick={this.props.approveHandler}>Approve</button>
        <button className="rejectReviewButton">Reject</button>
        <button className="emailReviewButton">Email</button>
    </div>
    );
  }

}



export default OwnerReviewApproval;
