import * as React from 'react';
import { Component } from 'react';
import BuySearch from './components/Buy';
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
			search: false
		}
	}
	details= ()=> {
		this.setState({search: true});
		this.setState({home: false});
	}
  render() { 
    return ( 
    <div>
    	
       { this.state.home? 
       	<div ><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
       		<button className= {styles.buy}onClick= {this.details}>Buy </button>
    		<button> Sell</button>
       	</div>: ''
        }
    	{
    		this.state.search? <BuySearch />: ''
    	}
    </div>
    );
  }
}
 
export default Homepage ;