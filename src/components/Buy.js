import React from 'react';
import { Component } from 'react';
import Gallery from 'react-grid-gallery';
import BuySearchResult from './BuySearchResult';
import AnimalDetails from './AnimalDetails';
import Navbar from './Navbar';
import styles from './buySearch.css';
class Buy extends React.Component {
    //state = {  };
    constructor(props){
    	super(props);
    	this.state={
    		searchResults: false,
    		animalDetails: false,
    		images:[{
			        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 174,
			        isSelected: true,
			        caption: "After Rain (Jeshu John - designerspics.com)"
				},
				{
			        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212,
			        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			        caption: "Boats (Jeshu John - designerspics.com)"
				},

				{
			        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212
				},
				{
			        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 174,
			        isSelected: true,
			        caption: "After Rain (Jeshu John - designerspics.com)"
				},
				{
			        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212,
			        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			        caption: "Boats (Jeshu John - designerspics.com)"
				},

				{
			        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212
				}
			]
    	}
    }
    searchProduct = () => {
    	this.setState({searchResults: true});

    };
    back = ()=> {
    	this.setState({searchResults: false});
    };
    details = ()=> {
 		this.setState({ animalDetails: true});

    };
    render() { 
        return ( 
         <div className={styles.div}>
         <Navbar />
          <h3 className={styles.h3}>Please select fields to search</h3>
          <form>
			  <label>
			    
			    <select>
				  <option value="grapefruit">Grapefruit</option>
			      <option selected value="product">select product</option>
				  <option value="lime">Lime</option>
				  <option  value="coconut">Coconut</option>
				  <option value="mango">Mango</option>
				</select>
				<select>
			      <option selected value="product">select State</option>
			      <option value="grapefruit">Grapefruit</option>
				  <option value="lime">Lime</option>
				  <option  value="coconut">Coconut</option>
				  <option value="mango">Mango</option>
				</select>
				<select>
			      <option selected value="product">select District</option>
				  <option value="grapefruit">Grapefruit</option>
				  <option value="lime">Lime</option>
				  <option  value="coconut">Coconut</option>
				  <option value="mango">Mango</option>
				</select>
				<select>
			      <option selected value="product">select Block/Taluka/Mandal</option>
				  <option value="grapefruit">Grapefruit</option>
				  <option value="lime">Lime</option>
				  <option  value="coconut">Coconut</option>
				  <option value="mango">Mango</option>
				</select>
			   
			  </label>
			</form>
			 
			<button  value="Search" onClick= {this.searchProduct} className={styles.button} >Search</button>
			<button onClick= {this.back} > Back </button>
			<button onClick = {this.details} > Details </button>
			<br/><br/><br/><br/>
			
			{this.state.searchResults ? this.state.animalDetails ? <AnimalDetails /> : <BuySearchResult />:
				<div>
					<h2>Featured Products </h2>
					<Gallery images={this.state.images}/>
			    </div>		
            }
			
         </div>
        );
    }
}
 
export default Buy;