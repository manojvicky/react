import React from 'react';

class Rightpane extends React.Component{
	
	render(){
		const valuesofobj = Object.values(this.props.data);
		const lastdata = valuesofobj[this.props.indexofdata];
		const arraydata = Object.keys(this.props.data);
		return(
			<div className="rightpane">
			<div className="adjust">
			<h1>Name of Dinosaur: <span>{arraydata[this.props.indexofdata]}</span></h1>
			<div className="data">This Dinosaur appeared in <span>{lastdata.appeared}</span> and had 
			height <span>{lastdata.height}</span>, length <span>{lastdata.length}</span> and 
			weight <span>{lastdata.weight}</span>.It is of order <span>{lastdata.order}</span> and 
			vanished in <span>{lastdata.vanished}</span>  </div>
			</div>
			</div>
			);
		
		
	}
}

export default Rightpane;