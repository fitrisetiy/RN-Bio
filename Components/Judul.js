import React from 'React';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
				<Text style={edit.judul}>
				{this.props.judul}</Text>
			);
	}
}
const edit = {
	judul :{
		color:'#00f',
		fontSize: 30,
		fontWeight:"bold"

	}
}

export default Judul;