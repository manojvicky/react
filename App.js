import React from 'react';
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';
class App extends React.Component{
	render(){
		return(
			<div>
			<Leftpane/>
			<Rightpane/>
			</div>
			);
		
	}
}

export default App;