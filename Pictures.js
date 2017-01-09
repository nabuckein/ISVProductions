import React, { Component } from 'react';
import './App.css';

class Pictures extends Component {
  render() {
    return (
		<div>
	      	<div className="CompTitle" >
				<p id="componentTitle">Pictures</p>	
			</div>
			<div className="PicturesDiv">
	      		<p className="PicturesParagraphs">Testing Pictures component</p>
							<div className="text-center">
								<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-pause="hover">
								  {/*<!-- Indicators -->*/}
								  <ol className="carousel-indicators">
								    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
								    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
								    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
								    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
								  </ol>

								  {/*<!-- Wrapper for slides -->*/}
								  <div className="carousel-inner" role="listbox">
								    <div className="item active">
								      <img src="1.svg" alt="1.svg"/>
								      <div className="carousel-caption">
								        
								      </div>
								    </div>
								    <div className="item">
								      <img src="2.svg" alt="2.svg"/>
								      <div className="carousel-caption">
								        
								      </div>
								    </div>
								    <div className="item">
								      <img src="3.svg" alt="3.svg"/>
								      <div className="carousel-caption">
								        
								      </div>
								    </div>
								    <div className="item">
								      <img src="4.svg" alt="4.svg"/>
								      <div className="carousel-caption">
								       
								      </div>
								    </div>
								    
								  </div>

								  {/*<!-- Controls -->*/}
								  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
								    <span className="glyphicon glyphicon-chevron-left glyphicon-phone-only" aria-hidden="true"></span>
								    <span className="sr-only">Previous</span>
								  </a>
								  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
								    <span className="glyphicon glyphicon-chevron-right glyphicon-phone-only" aria-hidden="true"></span>
								    <span className="sr-only">Next</span>
								  </a>
								</div>
							</div>	      		
	      	</div>
      </div>
    );
  }

}



export default Pictures;