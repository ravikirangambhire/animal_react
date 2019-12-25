import React from 'react';
import { Component } from 'react';
import styles from './AnimalDetails.css';
import image from './image.jpg';
import image2 from './image2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Login from './Login';
// <img src={image} className= "img-fluid rounded float-right img-thumbnail" alt="Avatar" />
/* caousel basic code
	 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img src={image2} className="d-block w-100" alt="..." />
			    </div>
			    <div className="carousel-item">
			      <img src={image} className="d-block w-100" alt="..." />
			    </div>
			    <div className="carousel-item">
			      <img src={image2} className="d-block w-100" alt="..." />
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
*/
class AnimalDetails extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		login: false
    	}
    }
    login = () => {
    	this.setState({ login: true});
    }
    render() { 
        return ( 
         <div className= "container-fluid">
         <br/><br/>
            {
            	this.state.login? 
            		<Login/> : 
            		<div className="row">
	            <div className="col-sm-8"> 
	            	<Carousel>
		                <div>
		                    <img src={image} />
		                    <p className="legend">Legend 1</p>
		                </div>
		                <div>
		                    <img src={image2} />
		                    <p className="legend">Legend 2</p>
		                </div>
		                <div>
		                    <img src={image} />
		                    <p className="legend">Legend 3</p>
		                </div>
		            </Carousel>
	            </div>
	         	<div className="col-sm-4">
				  <div className={styles.container}>
				    <h4><b>John Doe</b></h4> 
				    <hr />
				    <p>Architect & Engineer</p> <hr />
				    <h4> Address: 221 B, Baker strert,</h4> 
				    <h4> London  SE 34 LD</h4> <hr />
				    <p>Prize: 50000</p>
				    <button type="button" className="btn btn-primary" onClick={this.login}>Connect</button>
				  </div>
				</div>
		    </div>
            }
         </div>
        );
    }
}
 
export default AnimalDetails;