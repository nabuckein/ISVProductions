import React, { Component } from 'react';
import './Owner.css';
import OwnerReviewApproval from './OwnerReviewApproval.js';
import * as firebase from "firebase";

var rows = [];


class Owner extends Component {

	state = {
		reviewsArray: ["test1"],
		reviewsFirstNameArray: ["test2"],
		reviewsLastNameArray: ["test3"],
		reviewsEmailArray: ["test4"], 
    reviewAcceptance: ["test5"],
    reviewRejection: ["test6"],
    reviewRows:[]
	}
	componentWillMount = (e) =>{
		var childDataReview= [];
		var childDataFirstNameReview= [];
		var childDataLastNameReview= [];
		var childDataEmailReview= [];	
    var childDataReviewAcceptance =[];
    var childDataReviewRejection =[];
		var firebaseRef = firebase.database().ref('users/');

	    firebaseRef.on('value', function(snapshot) { //Request to Firebase the users
	    	//var childKey = [];		    
		  	snapshot.forEach(function(childSnapshot) {	//Push each user values from the request onto different arrays
		        //var childKey.push(childSnapshot.key);
		        childDataReview.push(childSnapshot.val().review);
		        childDataFirstNameReview.push(childSnapshot.val().firstName);
		        childDataLastNameReview.push(childSnapshot.val().lastName);
		        childDataEmailReview.push(childSnapshot.val().email);
            childDataReviewAcceptance.push(childSnapshot.val().reviewAccepted);
            childDataReviewRejection.push(childSnapshot.val().reviewRejected)
		    });

	  	});

	  	this.setState({reviewsArray:childDataReview}); //Use arrays obtained on previous firebase request to update state and then pass the states as props.
		  this.setState({reviewsFirstNameArray:childDataFirstNameReview});
		  this.setState({reviewsLastNameArray:childDataLastNameReview});
		  this.setState({reviewsEmailArray:childDataEmailReview});	
      this.setState({reviewAcceptance:childDataReviewAcceptance});
      this.setState({reviewRejection:childDataReviewRejection});
      console.log("OWNER COMPONENT WILL MOUNT");
	}
  componentWillUpdate = (e)=>{
    console.log("OWNER COMPONENT WILL UPDATE");
    rows=[];

  }
  handleApproveClick = (e) => {
    //this.setState({hideThisComponent:true}); 
    var userApprovedFirstName = e.target.id.replace("approvedButton","");
    var user = firebase.database().ref('users/' + userApprovedFirstName); //Use created ID in this.props.userId
    user.update({reviewAccepted:true}); //update child'value in FB, not in this component's state
    console.log(userApprovedFirstName);
    this.setState({reviewAcceptance:[]});
    this.setState({reviewRows:[]});
  }
  handleRejectClick = (e) => {
    //this.setState({hideThisComponent:true}); 
    var userRejectedFirstName = e.target.id.replace("rejectedButton","");
    var user = firebase.database().ref('users/' + userRejectedFirstName); //Use created ID in this.props.userId
    user.update({reviewRejected:true}); //update child'value in FB, not in this component's state
    this.setState({reviewRejection:[]});
    this.setState({reviewRows:[]});
  }


  	render() {
      console.log("OWNER COMPONENT HAS RENDERED");
  		//rows = [];  		
		  for (var i=0; i <= this.state.reviewsArray.length-1; i++) {			//Need this FOR loop to create amount (depends on what's in Firebase) of OwnerReviewApproval components
		    if(this.state.reviewRejection[i] === false && this.state.reviewAcceptance[i] === false){
          this.state.reviewRows.push(<OwnerReviewApproval key={i} handleApproveClick={this.handleApproveClick} handleRejectClick={this.handleRejectClick} userRejectedReview={this.state.reviewRejection[i]} userAcceptedReview={this.state.reviewAcceptance[i]} userFirstName={this.state.reviewsFirstNameArray[i]} userLastName={this.state.reviewsLastNameArray[i]} userEmail={this.state.reviewsEmailArray[i]} userReview={this.state.reviewsArray[i]}/>);
			  }
      }	
		  if(this.state.reviewRows.length!==0){
  	    return (
  	      <div>
  	        <div className="CompTitle">
  	          <p id="componentTitle">Pending Reviews</p> 
  	        </div>
  	        <div className="reviewsContainer text-center" id="approveAndRemoveButtons">	        	
   				   {this.state.reviewRows} 
   			    </div>
  	      </div>
  	    );	
      }else{
        return(
          <div>
            <div className="CompTitle">
              <p id="componentTitle">Pending Reviews</p> 
            </div>
            <div className="reviewsContainer text-center" id="approveAndRemoveButtons">           
              <p id="noReviewsPendingParagraph"> There are currently no pending reviews </p> 
            </div>
          </div>
        );
      }
  	}
}

export default Owner;
