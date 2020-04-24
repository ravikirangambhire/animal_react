import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';

class Login extends React.Component {
    state = {  }
    render() { 
        return ( 
         <div>
            <Navbar />
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="row">
                <div className = "col-lg-4"></div>
                <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                    />
                    </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                    <small id="emailHelp" className="form-text text-muted">Forgot password Click here to reset password</small>
                </div> 
                
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                >Login   
                </button>
            </form>
            </div>
        </div>    
         </div>
        );
    }
}
 
export default Login;
