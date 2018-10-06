import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Judul from '../Components/Judul';

class HomeScreen extends Component {
render() {
    return (
    	<View style={styles.container}>
    	<Image 
    	style={{width:100,height:100}}
    	source={require('./fb.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Telepon atau Email"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
    	<Text style={styles.buttonText}> MASUK </Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text>Lupa kata sandi?</Text>
    	</TouchableOpacity>
    	</View>    	
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#D4D4'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: '#000000'
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3B5998',
		marginVertical: 10,
		paddingHorizontal: 80
	},

	buttonText:{
		fontSize:13,
		color:'#f7f7f7'
	}
})

class DetailsScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
          <Judul judul = "Selamat Datang"/>
          <Image
              style={{width: 300, height: 200}}
              source={require('./saya.png')} />
            <Text style={styles.welcome}>
              Nama : Fitri Setiyani
            </Text>
            <Text style={styles.instructions}>
              Kelas : XI RPL 1
            </Text>
            <Text style={styles.instructions}>
              No Absen : 14
            </Text>
          </View>
        );
      }
    }

const RootStack = StackNavigator ({
    Home : HomeScreen,
    Details : DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component{
    render(){
        return <RootStack/>
    }
}