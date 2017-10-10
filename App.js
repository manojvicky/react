import React from 'react';
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';
class App extends React.Component{
	constructor(){
		super();
		this.state = {indexof: 0};
		
	}
	
	handleRightplane(index) {
		this.setState({indexof: index});
	}
  
	render(){
		
		return(
			<div>
			<Leftpane data={data} myCallback={(index) => {this.handleRightplane(index);}} indexof={this.state.indexof}/>
			<Rightpane data={data} indexofdata={this.state.indexof}/>
			</div>
			);
		
	}
}

const data = {
  "bruhathkayosaurus": { 
    "appeared": -70000000, 
    "height": 25, 
    "length": 44, 
    "order": "saurischia", 
    "vanished": -70000000, 
    "weight": 135000 
  }, 
  "lambeosaurus": { 
    "appeared": -76000000, 
    "height": 2.1, 
    "length": 12.5, 
    "order": "ornithischia", 
    "vanished": -75000000, 
    "weight": 5000 
  }, 
  "linhenykus": { 
    "appeared": -85000000, 
    "height": 0.6, 
    "length": 1, 
    "order": "theropoda", 
    "vanished": -75000000, 
    "weight": 3 
  }, 
  "pterodactyl": { 
    "appeared": -150000000, 
    "height": 0.6, 
    "length": 0.8, 
    "order": "pterosauria", 
    "vanished": -148500000, 
    "weight": 2 
  }, 
  "stegosaurus": { 
    "appeared": -155000000, 
    "height": 4, 
    "length": 9, 
    "order": "ornithischia", 
    "vanished": -150000000, 
    "weight": 2500 
  }, 
  "triceratops": { 
    "appeared": -68000000, 
    "height": 3, 
    "length": 8, 
    "order": "ornithischia", 
    "vanished": -66000000, 
    "weight": 11000 
  } 
}

export default App;