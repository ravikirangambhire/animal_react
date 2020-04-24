import React, { Component } from 'react';


class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	
	render() {
		return (
			<nav className="navbar navbar-expand-lg sticky-top navbar-dark  bg-primary">
			  <a className="navbar-brand" href="#">Product seller</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Buy <span class="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Sell</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link disabled" href="#" tabindex="-1" >SignUp</a>
			      </li>
			    </ul>
			    <form className="form-inline my-2 my-lg-0">
			      <button className="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
			    </form>
			  </div>
			</nav>
		);
	}
}

export default Navbar;
