import React, { Component } from 'react';
import Reviews from './Reviews.js';
import './App.css';

	
class ReviewsAccepted extends Component {
	

    render() {
    		var reviewBackgroundColor; 
    		console.log(this.props.odd%2);
    		if(this.props.odd%2===1){
    			reviewBackgroundColor = {
    				backgroundColor: '#b01000'
    			}
    		}else{
    			reviewBackgroundColor = {
    				backgroundColor: '#cc1000'
    			}
    		}
	      	return (
		 		<div style={reviewBackgroundColor} className="reviewParagraphDiv row col-md-12 text-center">		      		
		      		 <p className="reviewParagraph">{this.props.reviewText}</p><span> by {this.props.reviewUser}</span>		
	      		</div>
	    	);
	    
	    
  	}

}



export default ReviewsAccepted;