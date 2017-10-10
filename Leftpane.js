import React from 'react';
import Repeat from './Repeat';



class Leftpane extends React.Component{
	
	render(){
		return(
			<div className="leftpane">
				<Repeat data={this.props.data} myCallback={this.props.myCallback} indexof={this.props.indexof}/>
			</div>
			);
	}
}


export default Leftpane;