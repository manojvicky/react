import React from 'react';
class Repeat extends React.Component{

	handleClick(index){
	var indexofobj = index;
	this.props.myCallback(index);
	}
	
render(){
	const arraydata = Object.keys(this.props.data);
	const Repeat = (arraydata).map((data,index) =>
	<li className="list" value={index} key={index} style={{background : (index==this.props.indexof)?'#83d0f2':'#f4f4f4'}} onClick={this.handleClick.bind(this,index)}>{data}</li>
	)
	return(
		<div>
		<ul>{Repeat}</ul>
		</div>
	);
}
}

export default Repeat;