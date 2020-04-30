import * as React from 'react';
import { Component } from 'react';
import BuySearch from './components/Buy';
import SignUp from './components/SignUp';
import AnimalDetails from './components/AnimalDetails';
import styles from './Homepage.css';
/*export interface Homepage Props {
  
}
 
export interface Homepage State {
  
}*/
 
class Homepage  extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			home: true,
			search: false,
			signUp: false,
		}
	}
	details= ()=> {
		this.setState({search: true});
		this.setState({home: false});
	}
	sellFlow = () => {
		this.setState({home: false});
		this.setState({signUp: true});
	}
  render() { 
    return ( 
    <div>
    	 
       { this.state.home? 
       	<div ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       		<button className= {styles.buy}onClick= {this.details}>Buy </button>
    		<button onClick= {this.sellFlow}> Sell</button>
       	</div>: ''
        }
    	{
    		this.state.search? <BuySearch />: ''
			}
			{
				this.state.signUp? <SignUp />: ''
			}
    </div>
    );
  }
}
 
export default Homepage ;
