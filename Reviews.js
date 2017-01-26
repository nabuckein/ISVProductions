import React, { Component } from 'react';
import SubmitReview from './SubmitReview.js';
import './App.css';

class Reviews extends Component {
	state = {
		reviewComponentToShow: 'Reviews'
	}
	handleSubmitReviewButton = (e) => {
		this.setState({reviewComponentToShow: 'SubmitReview'});
	}
	handleCancelSubmitReviewButton = (e) => {
		this.setState({reviewComponentToShow: 'Reviews'});
	}

	componentDidUpdate(){
		var iconClicked = document.getElementById('componentTitle');
    			iconClicked.classList.add("iconClickedAnimation");
	}

    render() {
    	if(this.state.reviewComponentToShow === 'Reviews'){
	      	return (
		 		<div className="row col-md-12 text-center">
		      		<div className="CompTitle" >
						<p id="componentTitle">Reviews</p>	
					</div>
					<div className="ReviewsDiv col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
		      			 <p className="reviewParagraph"> "Rafael is great at what he does. We also got very quick responses from him when we asked him questions. Highly recommend!" </p>		
		      			 <p className="reviewParagraph"> "Everything went as planned and he did what he promised, and more! Great experience!" </p>		
		      			 <button className="submitReviewButton" onClick={this.handleSubmitReviewButton}>Submit a review</button>
		      		</div>
	      		</div>
	    	);
	    }else{
	    	return(
	    		<SubmitReview reviewToShow={this.handleCancelSubmitReviewButton}/>
	    	)
	    }	
  	}

}



export default Reviews;