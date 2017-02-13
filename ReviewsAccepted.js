import React, { Component } from 'react';
import Reviews from './Reviews.js';
import './App.css';

	
class ReviewsAccepted extends Component {
	

    render() {
	      	return (
		 		<div className="row col-md-12 text-center">		      		
		      		 <p className="reviewParagraph">{this.props.reviewText}</p><span> by {this.props.reviewUser}</span>		
	      		</div>
	    	);
	    
	    
  	}

}



export default ReviewsAccepted;