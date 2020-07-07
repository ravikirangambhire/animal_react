import * as React from 'react';
import { Component } from 'react';
import BuySearch from './components/Buy';
import AnimalDetails from './components/AnimalDetails';
//import SignUp  from './components/signUp';
//import styles from './Homepage.css';

/*export interface Homepage Props {
  
}
 
export interface Homepage State {
  
}*/
 
class SignUp  extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			
			sign :true,
			search:false
		}
	}
	SignUp = ()=>{
		this.setState({search:true});
		this.setState({sign:false});
	}
	
	
  render() { 
    return ( 
    <div>
    	
       { this.state.sign? 
       	<div ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       		
    		<button className onClick= {this.SignUp}> Sell</button>
       	</div>: ''
        }
    	{
    		this.state.search? <BuySearch />: ''
    	}
    </div>
    );
  }
}
 
export default SignUp ;