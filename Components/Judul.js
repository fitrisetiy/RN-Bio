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
		color:'#000',
		fontSize: 30,
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight:"bold"

	}
}

export default Judul;