import React, { Component } from 'react';
import './App.css';

class SubmitReview extends Component {
	
	
  	render() {
	    return (
			<div className="row col-md-12 text-center">
		      	<div className="CompTitle" >
					<p id="componentTitle">Reviews</p>	
				</div>
				<div className="SubmitReviewsDiv col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
		      		 <p className="submitReviewParagraph"> "Please enter a review and hit 'Done' button to submit it:" </p>		
		      		 <input className="col-lg-12"></input>
		      		 <div className="cancelAndDoneButtons">
		      		 	<button className="cancelReviewButton" onClick={this.props.reviewToShow}>Cancel</button>
		      		 	<button className="doneReviewButton">Done</button>
		      		 </div>
		      	</div>
	      	</div>
	    );	
  }

}



export default SubmitReview;