import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
    
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        header:  "Animal Project"
   }
   handleSubmit= () =>{
    console.log("Animal Project");
    props.history.push("/Dashboard");
}
}
   

    render() { 
        return ( 
         <div>
            <Navbar />
            <br/>
            <div className= "row">
                <div className = "col-sm-4"></div>
                <div className = "card col-12 col-lg-4 login-card mt-2 hv-center">
                    <form>
                        <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="Text" 
                        className="form-control" 
                        id="name" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter name"
                        />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Mobile Number</label>
                            <input type="text"
                                className="form-control" 
                                id="mobileNumber" 
                                placeholder="Mobile Number"
                            />
                        </div> 
                    
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                            />
                        </div> 
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" 
                                className="form-control" 
                                id="confirmPassword" 
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-primary btn-block" onClick="handleSubmit"
                    >Register   
                    </button>
                    </form>
                </div>
            </div>


         </div>
        );
    }
}
 
export default SignUp;
