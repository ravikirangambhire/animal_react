import React from 'react';
import { Component } from 'react';
import Gallery from 'react-grid-gallery';

class BuySearchResult extends React.Component {
    constructor(props) {
    	super(props);
    	this.state={
    		searchResults: false,
    		images:[{
			        src: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			        thumbnail: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
			        thumbnailWidth: 320,
			        thumbnailHeight: 174,
			        isSelected: true,
			        caption: "After Rain (Jeshu John - designerspics.com)"
				},
				{
			        src: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnail: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212,
			        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			        caption: "Boats (Jeshu John - designerspics.com)"
				},

				{
			        src: "https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnail: "https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212
				},
				{
			        src: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnail: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			        thumbnailWidth: 320,
			        thumbnailHeight: 174,
			        isSelected: true,
			        caption: "After Rain (Jeshu John - designerspics.com)"
				},
				{
			        src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			        thumbnail: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212,
			        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			        caption: "Boats (Jeshu John - designerspics.com)"
				},

				{
			        src: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			        thumbnail: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			        thumbnailWidth: 320,
			        thumbnailHeight: 212
				}
			]
    	}
    }
    render() { 
        return ( 
         <div>
          <h3>Following are products we found nearby you!!!</h3>
          <Gallery images={this.state.images}/>
         </div>
        );
    }
}
 
export default BuySearchResult;