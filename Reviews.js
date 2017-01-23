import React, { Component } from 'react';
import './App.css';

class Reviews extends Component {
  render() {
    return (
		<div className="row col-md-12 text-center">
	      	<div className="CompTitle" >
				<p id="componentTitle">Reviews</p>	
			</div>
			<div className="ReviewsDiv col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
	      		 <p className="reviewParagraph"> Rafael is great at what he does. We also got very quick responses from him when we asked him questions. Higly recommend! :) </p>		
	      		 <p className="reviewParagraph"> Everything went as planned and he did what he promised, and more! Great experience! </p>		

	      	</div>
      	</div>
    );	
  }

}



export default Reviews;