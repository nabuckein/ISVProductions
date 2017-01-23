import React, { Component } from 'react';
import './App.css';

class Calendar extends Component {
  render() {
    return (
      <div>
      	<div className="CompTitle" >
			<p id="componentTitle">Calendar</p>	
		</div>
		<div className="CalendarDiv">
      		<p className="CalendarParagraphs">Testing Calendar component</p>
      	</div>
      </div>
    );
  }

}



export default Calendar;