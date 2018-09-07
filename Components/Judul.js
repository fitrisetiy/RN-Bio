import React from 'React';
import {Text} from 'react-native';

class Judul extends React.Component{
	render(){
		return(
				<Text style={edit.judul}>BIODATA</Text>
			);
	}
}
const edit = {
	judul :{
		color:"red",
		fontSize: 30,
		backgroundColor: '#00FFFF'

	}
}

export default Judul;